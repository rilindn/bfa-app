import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { DataTable, Menu, Divider } from 'react-native-paper';

import { deleteVacancy } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import VacancyForm from './../VacancyForm/VacancyForm';
import styles from './VacancyContent.styles';

const VacancyContent = ({ vacancy, positions, isOwn, vacancies, setVacancies }) => {
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);

  const handleDeletePost = async () => {
    const result = await deleteVacancy(vacancy.id);
    if (result?.status === 200) {
      const updatedVacancies = vacancies.filter((item) => item.id !== vacancy.id);
      setVacancies(updatedVacancies);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHead}>
        <Text style={styles.position}>
          {positions.find(({ value }) => value === vacancy?.position)?.label}
        </Text>
        {isOwn && (
          <>
            <Menu
              visible={showEditMenu}
              onDismiss={() => setShowEditMenu(false)}
              contentStyle={styles.menuContent}
              anchor={
                <TouchableOpacity onPress={() => setShowEditMenu(true)}>
                  <Entypo
                    style={styles.dotsIcon}
                    name="dots-three-horizontal"
                    size={20}
                    color={Colors.gray3}
                  />
                </TouchableOpacity>
              }>
              <Menu.Item
                icon="pencil"
                title="Edit"
                style={styles.menuItems}
                titleStyle={styles.menuItemsTitle}
                onPress={() => {
                  setEditModalVisible(true);
                  setShowEditMenu(false);
                }}
              />
              <Divider />
              <Menu.Item
                icon="delete"
                title="Delete"
                style={styles.menuItems}
                titleStyle={styles.menuItemsTitle}
                onPress={() => handleDeletePost()}
              />
            </Menu>
            <VacancyForm
              editVacancy={vacancy}
              visible={editModalVisible}
              closeModal={() => setEditModalVisible(false)}
              vacancies={vacancies}
              setVacancies={setVacancies}
            />
          </>
        )}
      </View>
      <DataTable>
        <DataTable.Row style={styles.tableRow}>
          <DataTable.Cell style={styles.tableCellKey}>
            <Text style={styles.tableCellKeyText}>Age</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.tableCellValue}>
              {vacancy?.ageFrom} - {vacancy?.ageTo}
            </Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.tableRow}>
          <DataTable.Cell style={styles.tableCellKey}>
            <Text style={styles.tableCellKeyText}>Minimum height</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.tableCellValue}>{vacancy?.height}</Text>
          </DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.tableRow}>
          <DataTable.Cell style={styles.tableCellKey}>
            <Text style={styles.tableCellKeyText}>Foot</Text>
          </DataTable.Cell>
          <DataTable.Cell>
            <Text style={styles.tableCellValue}>{vacancy?.foot}</Text>
          </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
      <Text style={styles.about}>{vacancy?.about}</Text>
    </View>
  );
};

export default VacancyContent;
