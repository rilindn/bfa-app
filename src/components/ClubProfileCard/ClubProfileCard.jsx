import React from 'react';
import { View, Text } from 'react-native-ui-lib';

import useAuth from '../../hooks/useAuth';
import Avatar from '../Avatar/Avatar';
import CustomButton from '../Button/Button';
import styles from './ClubProfileCard.styles';

export default function ClubProfileCard() {
  const { authData } = useAuth();

  return (
    <View style={styles.main}>
      <View style={styles.button}>
        <View style={styles.basicAccountBtn}>
          <Text style={styles.basicAccountLabel}>Basic account</Text>
        </View>
        <CustomButton
          label="Edit profile"
          style={styles.editProfileBtn}
          labelStyle={styles.editProfileLabel}
        />
      </View>
      <View row marginB-25>
        <Avatar
          name={authData.Club.clubName}
          avatarContainer={{ marginHorizontal: 15, marginTop: 5 }}
        />
        <View style={styles.listContainer}>
          <View>
            <Text style={styles.leftListItem}>Club name</Text>
            <Text style={styles.leftListItem}>League</Text>
            <Text style={styles.leftListItem}>League level</Text>
          </View>
          <View paddingL-20 center>
            <Text style={styles.rightListItem}>{authData.Club.clubName}</Text>
            <Text style={styles.rightListItem}>{authData.Club.league}</Text>
            <Text style={styles.rightListItem}>{authData.Club.leagueLevel}</Text>
          </View>
        </View>
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
