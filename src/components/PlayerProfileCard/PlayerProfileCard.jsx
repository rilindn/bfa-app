import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Colors from '../../constants/Colors';
import useAuth from '../../hooks/useAuth';
import Avatar from '../Avatar/Avatar';
import CustomButton from '../Button/Button';
import styles from './PlayerProfileCard.styles';

export default function PlayerProfileCard({ navigation }) {
  const { authData } = useAuth();

  return (
    <View style={styles.main}>
      <View style={styles.button}>
        <View style={styles.basicAccountBtn}>
          <Text style={styles.basicAccountLabel}>Basic account</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <CustomButton
            label="Edit profile"
            style={styles.editProfileBtn}
            labelStyle={styles.editProfileLabel}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>
        {authData.Player.firstName} {authData.Player.lastName}
      </Text>
      <Avatar
        name={`${authData.Player.firstName} ${authData.Player.lastName}`}
        avatarContainer={{ marginHorizontal: 15, marginTop: 5 }}
      />
      <View style={styles.teamStatus}>
        <Text style={{ color: Colors.white }}>CURRENTLY WITHOUT A TEAM</Text>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
          <Text style={styles.statisticsNumber}>1</Text>
          <Text style={styles.statisticsText}>POST</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.statisticsNumber}>10</Text>
          <Text style={styles.statisticsText}>FOLLOWERS</Text>
        </View>
        <View style={[styles.infoBox, { borderRightWidth: 0 }]}>
          <Text style={styles.statisticsNumber}>12</Text>
          <Text style={styles.statisticsText}>FOLLOWING</Text>
        </View>
      </View>
    </View>
  );
}