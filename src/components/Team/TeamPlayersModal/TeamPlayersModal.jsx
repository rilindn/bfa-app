import { AntDesign, FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Modal,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from 'react-native';

import { getNoTeamPlayers } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import Avatar from '../../Avatar/Avatar';
import styles from './TeamPlayersModal.styles';

export default function TeamPlayersModal({ closeModal, visible, handleSelectedPlayer }) {
  const [loading, setLoading] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetchNoTeamPlayers();
  }, []);

  const fetchNoTeamPlayers = async (searchQuery) => {
    setLoading(true);
    try {
      const players = await getNoTeamPlayers(searchQuery);
      if (players?.status === 200) {
        setLoading(false);
        setPlayers(players.data);
      }
    } finally {
      setLoading(false);
    }
  };

  const selectPlayer = (player) => {
    handleSelectedPlayer(player);
    closeModal();
  };

  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={() => closeModal()}>
      <View style={styles.modalView}>
        <View style={styles.container}>
          <View style={styles.postHeader}>
            <Text style={styles.headerText}>Select Player</Text>
            <TouchableOpacity onPress={() => closeModal()}>
              <AntDesign name="closecircle" size={30} color={Colors.gray4} />
            </TouchableOpacity>
          </View>
          <View style={styles.search}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor={Colors.gray3 + 60}
              selectionColor={Colors.green1}
              onChangeText={(val) => fetchNoTeamPlayers(val)}
            />
            <FontAwesome
              style={styles.searchIcon}
              name="search"
              size={24}
              color={Colors.gray3 + 50}
            />
          </View>
          <ScrollView style={styles.form}>
            {!loading ? (
              players.map((player) => (
                <TouchableOpacity
                  key={player.id}
                  onPress={() => selectPlayer(player)}
                  style={styles.singleRow}>
                  <Avatar
                    size={45}
                    name={`${player.firstName} ${player.lastName}`}
                    image={player.profilePic}
                  />
                  <View style={styles.userDataContainer}>
                    <Text style={styles.name}>
                      {player.firstName} {player.lastName}
                    </Text>
                    <Text style={styles.position}>{player.position}</Text>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <ActivityIndicator color={Colors.green1} size="small" />
            )}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
