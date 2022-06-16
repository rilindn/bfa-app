import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity, View, Text, ToastAndroid, Alert, Modal } from 'react-native';

import { addPlayerToTeam } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import { positions } from '../../../data/positions';
import useAuth from '../../../hooks/useAuth';
import CustomButton from '../../Button/Button';
import SelectInput from '../../SelectInput/SelectInput';
import TextInput from '../../TextInput/TextInput';
import TeamPlayersModal from '../TeamPlayersModal/TeamPlayersModal';
import styles from './AddTeamPlayers.styles';

export default function AddTeamPlayers({ closeModal, visible, teamPlayers, setTeamPlayers }) {
  const { authData } = useAuth();
  const [loading, setLoading] = useState(false);
  const [playersModal, setPlayersModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState({});

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const handleUpdate = (data, res) => {
    const composedPlayerData = {
      id: res.id,
      Player: {
        firstName: selectedPlayer.firstName,
        lastName: selectedPlayer.lastName,
        User: {
          profilePic: selectedPlayer.profilePic,
        },
      },
      position: res.position,
    };
    setTeamPlayers([...teamPlayers, composedPlayerData]);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = {
        ClubId: authData.Club.clubId,
        PlayerId: selectedPlayer.playerId,
        position: data.position,
      };
      const result = await addPlayerToTeam(payload);

      if (result?.status === 200) {
        handleClose();
        handleUpdate(data, result.data);

        ToastAndroid.show(
          `${selectedPlayer.firstName} ${selectedPlayer.lastName} was added to the team`,
          ToastAndroid.LONG
        );
      } else {
        const errorMsg = result.response.data.errors?.[0]?.message || result.response.data;
        Alert.alert('Error occurred!', JSON.stringify(errorMsg));
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error occurred!', 'Please try again!');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    closeModal();
    reset();
  };

  const handleSelectedPlayer = (player) => {
    setValue('player', `${player.firstName} ${player.lastName}`);
    setSelectedPlayer(player);
  };

  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={() => handleClose()}>
      <View style={styles.modalView}>
        <View style={styles.container}>
          <View style={styles.postHeader}>
            <Text style={styles.headerText}>Add Player</Text>
            <TouchableOpacity onPress={() => closeModal()}>
              <AntDesign name="closecircle" size={30} color={Colors.gray4} />
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <TouchableOpacity onPress={() => setPlayersModal(true)}>
              <TextInput
                name="player"
                placeholder="Player"
                control={control}
                rules={rules.player}
                errors={errors}
                darkMode
                disabled
              />
            </TouchableOpacity>
            <SelectInput
              name="position"
              placeholder="Position"
              control={control}
              rules={rules.position}
              errors={errors}
              options={positions}
              darkMode
            />
            <CustomButton
              label="Add"
              onPress={handleSubmit(onSubmit)}
              style={styles.saveBtn}
              loading={loading}
            />
          </View>
        </View>
      </View>
      <TeamPlayersModal
        visible={playersModal}
        closeModal={() => setPlayersModal(false)}
        handleSelectedPlayer={(player) => handleSelectedPlayer(player)}
      />
    </Modal>
  );
}

const rules = {
  position: {
    required: {
      value: true,
      message: 'Position is required',
    },
  },
  player: {
    required: {
      value: true,
      message: 'Player is required',
    },
  },
};
