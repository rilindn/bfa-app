import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';
import { positions } from '../../data/positions';
import formatDate from '../../helpers/formatDate';
import Avatar from '../Avatar/Avatar';
import CustomButton from '../Button/Button';
import getMyS from './../../helpers/getMyS';
import useAuth from './../../hooks/useAuth';
import ApplyForm from './ApplyForm/ApplyForm';
import styles from './Vacancy.styles';
import VacancyContent from './VacancyContent/VacancyContent';

export default function Vacancy({ vacancy, showUser, isOwn, vacancies, setVacancies, applicable }) {
  const { authData } = useAuth();
  const navigation = useNavigation();
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [vacancyApplications, setVacancyApplications] = useState(
    vacancy.VacancyApplications?.length
  );
  const [hasPlayerApplied, setHasPlayerApplied] = useState(
    vacancy.VacancyApplications.find(({ UserId }) => authData.id === UserId)
  );

  return (
    <View style={styles.container}>
      {showUser && (
        <View style={styles.topContainer}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigation.navigate('ViewProfile', { id: vacancy.Club.UserId })}
            style={styles.userDataContainer}>
            <Avatar
              name={`${vacancy.Club?.firstName} ${vacancy.Club?.lastName}`}
              size={50}
              initialStyle={{ fontSize: fontSizes.large }}
              image={vacancy.Club.User?.profilePic}
            />
            <View style={styles.dateContainer}>
              <Text
                style={styles.name}>{`${vacancy.Club?.firstName} ${vacancy.Club?.lastName}`}</Text>
              <Text style={styles.date}>{formatDate(vacancy?.createdAt)}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <VacancyContent
        vacancy={vacancy}
        vacancies={vacancies}
        setVacancies={setVacancies}
        isOwn={isOwn}
        positions={positions}
      />
      <TouchableOpacity
        onPress={() =>
          isOwn &&
          navigation.navigate('Applications', { id: vacancy.id, position: vacancy.position })
        }
        style={styles.applicantsContainer}>
        <FontAwesome5 name="envelope-open-text" size={24} color={Colors.mainGreen} />
        <Text style={styles.applicantsText}>
          {getMyS({
            value: vacancyApplications,
            string: 'applicant',
            withNo: true,
          })}
        </Text>
      </TouchableOpacity>
      {applicable && (
        <>
          {!hasPlayerApplied ? (
            <CustomButton
              onPress={() => setShowApplyForm(true)}
              style={styles.applyBtn}
              label="Apply"
            />
          ) : (
            <CustomButton style={styles.appliedBtn} label="Applied" />
          )}
          <ApplyForm
            vacancy={vacancy}
            visible={showApplyForm}
            increaseVacancyApplications={() => {
              setVacancyApplications(vacancyApplications + 1);
            }}
            setHasPlayerApplied={setHasPlayerApplied}
            closeModal={() => setShowApplyForm(false)}
          />
        </>
      )}
    </View>
  );
}
