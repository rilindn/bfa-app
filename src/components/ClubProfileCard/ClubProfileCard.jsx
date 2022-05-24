import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';

import getMyS from '../../helpers/getMyS';
import useAuth from '../../hooks/useAuth';
import Avatar from '../Avatar/Avatar';
import CustomButton from '../Button/Button';
import styles from './ClubProfileCard.styles';

export default function ClubProfileCard({ navigation, followers, followings, posts }) {
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
          onPress={() => navigation.navigate('EditClubProfile')}
        />
      </View>
      <Text style={styles.name}>
        {authData.Club.firstName} {authData.Club.lastName}
      </Text>
      <View row marginB-25>
        <TouchableOpacity
          onPress={() => {
            authData?.profilePic &&
              navigation.navigate('PhotoView', { photo: authData.profilePic });
          }}>
          <Avatar
            name={authData.Club.clubName}
            avatarContainer={{ marginHorizontal: 15, marginTop: 5 }}
            image={authData?.profilePic}
            size={80}
          />
        </TouchableOpacity>
        <View style={styles.listContainer}>
          <View>
            <Text style={styles.leftListItem}>Club name</Text>
            <Text style={styles.leftListItem}>League</Text>
            <Text style={styles.leftListItem}>League level</Text>
          </View>
          <View paddingL-20 center style={{ alignItems: 'flex-start' }}>
            <Text style={styles.rightListItem}>{authData.Club.clubName}</Text>
            <Text style={styles.rightListItem}>{authData.Club.league}</Text>
            <Text style={styles.rightListItem}>{authData.Club.leagueLevel}</Text>
          </View>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
          <Text style={styles.statisticsNumber}>{posts?.length}</Text>
          <Text style={styles.statisticsText}>{getMyS(posts?.length, 'POST', true, 'S')}</Text>
        </View>
        <View style={styles.infoBox}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Follows', { selectedTab: 'followers' })}>
            <Text style={styles.statisticsNumber}>{followers?.length}</Text>
            <Text style={styles.statisticsText}>
              {getMyS(followers?.length, 'FOLLOWERS', true, 'S')}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.infoBox, { borderRightWidth: 0 }]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Follows', { selectedTab: 'following' })}>
            <Text style={styles.statisticsNumber}>{followings?.length}</Text>
            <Text style={styles.statisticsText}>
              {getMyS(followers?.length, 'FOLLOWING', true, 'S')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
