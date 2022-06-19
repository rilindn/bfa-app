import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { DataTable } from 'react-native-paper';

import Colors from '../../../constants/Colors';
import Avatar from '../../Avatar/Avatar';
import styles from './DetailedSearchResults.styles';

const DetailedSearchResult = ({ navigation, players, getBack }) => {
  return (
    <View style={styles.container}>
      <View style={styles.genInfo}>
        <Text style={styles.searchRes}>Search results</Text>
        <TouchableOpacity onPress={getBack} style={styles.backBtn}>
          <Text style={styles.backBtnText}>Back to form</Text>
          <AntDesign name="back" size={20} color={Colors.light} />
        </TouchableOpacity>
      </View>
      <View style={styles.results}>
        {players.length ? (
          <FlatList
            data={players}
            renderItem={({ item }) => _renderItem({ navigation, item })}
            keyExtractor={({ item, key }) => item?.playerId?.toString()}
          />
        ) : (
          <Text style={styles.noMatchesText}>No players matched!</Text>
        )}
      </View>
    </View>
  );
};

const _renderItem = ({ item, navigation }) => {
  const fullName = `${item.firstName} ${item.lastName}`;
  return (
    <View style={styles.result} key={item.playerId}>
      <TouchableOpacity
        style={styles.userInfos}
        onPress={() => {
          navigation.navigate('ViewProfile', {
            id: item.User.id,
          });
        }}>
        <Avatar size={40} name={fullName} image={item.User.profilePic} />
        <Text style={styles.name}>{fullName}</Text>
      </TouchableOpacity>
      <View style={styles.characteristics}>
        <DataTable>
          {item.position && (
            <DataTable.Row style={styles.tableRow}>
              <DataTable.Cell style={styles.tableCellKey}>
                <Text style={styles.tableCellKeyText}>Position</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableCellValue}>{item.position}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          )}
          {item.User.birthDate && (
            <DataTable.Row style={styles.tableRow}>
              <DataTable.Cell style={styles.tableCellKey}>
                <Text style={styles.tableCellKeyText}>Age</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableCellValue}>
                  {moment().diff(item.User.birthDate, 'years')} years old
                </Text>
              </DataTable.Cell>
            </DataTable.Row>
          )}
          {item.foot && (
            <DataTable.Row style={styles.tableRow}>
              <DataTable.Cell style={styles.tableCellKey}>
                <Text style={styles.tableCellKeyText}>Foot</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableCellValue}>{item.foot}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          )}
          {item.nationality && (
            <DataTable.Row style={styles.tableRow}>
              <DataTable.Cell style={styles.tableCellKey}>
                <Text style={styles.tableCellKeyText}>Nationality</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableCellValue}>{item.nationality}</Text>
              </DataTable.Cell>
            </DataTable.Row>
          )}
          {item.height && (
            <DataTable.Row style={styles.tableRow}>
              <DataTable.Cell style={styles.tableCellKey}>
                <Text style={styles.tableCellKeyText}>Height</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableCellValue}>{item.height} cm</Text>
              </DataTable.Cell>
            </DataTable.Row>
          )}
          {item.weight && (
            <DataTable.Row style={styles.tableRow}>
              <DataTable.Cell style={styles.tableCellKey}>
                <Text style={styles.tableCellKeyText}>Weight</Text>
              </DataTable.Cell>
              <DataTable.Cell>
                <Text style={styles.tableCellValue}>{item.weight} kg</Text>
              </DataTable.Cell>
            </DataTable.Row>
          )}
        </DataTable>
      </View>
    </View>
  );
};

export default DetailedSearchResult;
