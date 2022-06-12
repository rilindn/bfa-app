import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Divider } from 'react-native-paper';

import { getMyVacancies } from '../../api/ApiMethods';
import CustomButton from '../../components/Button/Button';
import Colors from '../../constants/Colors';
import Vacancy from './../../components/Vacancy/Vacancy';
import VacancyForm from './../../components/Vacancy/VacancyForm/VacancyForm';
import useAuth from './../../hooks/useAuth';
import styles from './Vacancies.styles';

export default function Vacancies({ navigation }) {
  const [vacancies, setVacancies] = useState([]);
  const { authData } = useAuth();

  const fetchVacancies = async () => {
    const result = await getMyVacancies(authData.Club.clubId);
    setVacancies(result);
  };
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    fetchVacancies();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>My Vacancies</Text>
        <CustomButton
          label="Add vacancy"
          labelStyle={styles.addVacancyBtnLabel}
          style={styles.addVacancyBtn}
          onPress={() => setFormVisible(true)}
          icon={<AntDesign name="plus" size={14} color={Colors.light} />}
        />
      </View>
      <Divider style={{ marginBottom: 15 }} />
      <VacancyForm
        visible={formVisible}
        refetchVacancies={fetchVacancies}
        closeModal={() => setFormVisible(false)}
      />
      <FlatList
        data={vacancies}
        renderItem={({ item }) => _renderitem({ item, vacancies, setVacancies })}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const _renderitem = ({ item, ...rest }) => {
  return <Vacancy vacancy={item} isOwn {...rest} />;
};
