import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';

import Colors from '../../../constants/Colors';
import getMyS from '../../../helpers/getMyS';
import Avatar from '../../Avatar/Avatar';
import CustomButton from '../../Button/Button';
import styles from './ClubCard.styles';

export default function ClubCard({
  user,
  isFollow,
  handleFollow,
  handleUnfollow,
  followers,
  followings,
  posts,
  newChatMessage,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <Text style={styles.basicAccountLabel}>{user.Club?.clubName}</Text>
      <View row marginB-25>
        <TouchableOpacity
          onPress={() => {
            user?.profilePic && navigation.navigate('PhotoView', { photo: user.profilePic });
          }}>
          <Avatar
            name={user.Club.clubName}
            avatarContainer={{ marginHorizontal: 15, marginTop: 5 }}
            image={user?.profilePic}
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
            <Text style={styles.rightListItem}>{user.Club?.clubName}</Text>
            <Text style={styles.rightListItem}>{user.Club?.league}</Text>
            <Text style={styles.rightListItem}>{user.Club?.leagueLevel}</Text>
          </View>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          label="Message"
          style={styles.sendMessageBtn}
          labelStyle={styles.sendMessageLabel}
          onPress={newChatMessage}
        />
        {/* <CustomButton
          label="Bookmark"
          style={styles.bookmarkBtn}
          labelStyle={styles.sendMessageLabel}
        /> */}
        {!isFollow ? (
          <CustomButton
            label="Follow"
            style={[styles.sendMessageBtn, { backgroundColor: Colors.orange }]}
            labelStyle={styles.sendMessageLabel}
            onPress={handleFollow}
          />
        ) : (
          <CustomButton
            label="Unfollow"
            style={[styles.sendMessageBtn, { backgroundColor: Colors.orange }]}
            labelStyle={styles.sendMessageLabel}
            onPress={handleUnfollow}
          />
        )}
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
          <Text style={styles.statisticsNumber}>{posts?.length}</Text>
          <Text style={styles.statisticsText}>
            {getMyS({ value: posts?.length, string: 'POST', onlyString: true, suffix: 'S' })}
          </Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.statisticsNumber}>{followers?.length}</Text>
          <Text style={styles.statisticsText}>
            {getMyS({
              value: followers?.length,
              string: 'FOLLOWER',
              onlyString: true,
              suffix: 'S',
            })}
          </Text>
        </View>
        <View style={[styles.infoBox, { borderRightWidth: 0 }]}>
          <Text style={styles.statisticsNumber}>{followings?.length}</Text>
          <Text style={styles.statisticsText}>
            {getMyS({
              value: followings?.length,
              string: 'FOLLOWER',
              onlyString: true,
              suffix: 'S',
            })}
          </Text>
        </View>
      </View>
    </View>
  );
}
