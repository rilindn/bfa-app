import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { Divider } from 'react-native-paper';

import { deleteTeamPlayer, getMyTeamPlayers } from '../../api/ApiMethods';
import CustomButton from '../../components/Button/Button';
import AddTeamPlayers from '../../components/Team/AddTeamPlayers/AddTeamPlayers';
import Colors from '../../constants/Colors';
import useAuth from '../../hooks/useAuth';
import styles from './Team.styles';
import TeamTable from './TeamTable/TeamTable';

export default function Team({ navigation }) {
  const [teamPlayers, setTeamPlayers] = useState([]);
  const { authData } = useAuth();

  const fetchTeam = async () => {
    const result = await getMyTeamPlayers(authData.Club.clubId);
    setTeamPlayers(result.data.TeamPlayers);
  };
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    fetchTeam();
  }, []);

  const handleDelete = async (teamPlayerId) => {
    const result = await deleteTeamPlayer(teamPlayerId);
    if (result.status === 200) {
      setTeamPlayers(teamPlayers.filter(({ id }) => id !== teamPlayerId));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>My Team</Text>
        <CustomButton
          label="Add player"
          labelStyle={styles.addVacancyBtnLabel}
          style={styles.addVacancyBtn}
          onPress={() => setFormVisible(true)}
          icon={<AntDesign name="plus" size={14} color={Colors.light} />}
        />
      </View>
      <Divider style={{ marginBottom: 15 }} />
      <AddTeamPlayers
        visible={formVisible}
        teamPlayers={teamPlayers}
        setTeamPlayers={setTeamPlayers}
        closeModal={() => setFormVisible(false)}
      />
      {!!teamPlayers && <TeamTable teamPlayers={teamPlayers} handleDelete={handleDelete} />}
    </View>
  );
}
