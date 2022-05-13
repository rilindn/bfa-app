import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';

import Colors from '../../../constants/Colors';
import useAuth from '../../../hooks/useAuth';
import Avatar from '../../Avatar/Avatar';
import CustomButton from '../../Button/Button';
import styles from './ClubCard.styles';

export default function ClubCard({ navigation }) {
  const { authData } = useAuth();

  return (
    <View style={styles.main}>
      <Text style={styles.basicAccountLabel}>{authData.Club.clubName}</Text>
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
      <View style={styles.btnContainer}>
        <CustomButton
          label="Message"
          style={styles.sendMessageBtn}
          labelStyle={styles.sendMessageLabel}
        />
        <CustomButton
          label="Bookmark"
          style={styles.bookmarkBtn}
          labelStyle={styles.sendMessageLabel}
        />
        <CustomButton
          label="Follow"
          style={[styles.sendMessageBtn, { backgroundColor: Colors.orange }]}
          labelStyle={styles.sendMessageLabel}
        />
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
