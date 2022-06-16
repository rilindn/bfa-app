import { AntDesign } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';
import { DataTable } from 'react-native-paper';

import Avatar from '../../../components/Avatar/Avatar';
import Colors from '../../../constants/Colors';
import { positions } from './../../../data/positions';
import styles from './TeamTable.styles';

export default function TeamTable({ teamPlayers, handleDelete }) {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Player</DataTable.Title>
        <DataTable.Title>Position</DataTable.Title>
        <DataTable.Title style={{ marginRight: -100 }} />
      </DataTable.Header>
      {teamPlayers?.map((player) => (
        <DataTable.Row key={player.id} style={styles.tableRow}>
          <DataTable.Cell>
            <View style={styles.player}>
              <Avatar
                name={`${player.Player.firstName} ${player.Player.lastName}`}
                size={30}
                image={player.Player.User.profilePic}
              />
              <Text style={[styles.tableCellValue, { marginLeft: 5 }]}>
                {player.Player.firstName} {player.Player.lastName}
              </Text>
            </View>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.tableCellValue}>
              {positions.find(({ value }) => value === player?.position)?.label}
            </Text>
          </DataTable.Cell>
          <DataTable.Cell style={{ marginRight: -100 }}>
            <TouchableOpacity style={styles.tableCellValue} onPress={() => handleDelete(player.id)}>
              <AntDesign name="delete" size={30} color={Colors.red + 90} />
            </TouchableOpacity>
          </DataTable.Cell>
        </DataTable.Row>
      ))}
    </DataTable>
  );
}
