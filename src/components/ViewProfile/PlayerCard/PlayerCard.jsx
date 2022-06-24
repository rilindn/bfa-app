import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from 'react-native-ui-lib';

import { bookmark, isBookmarked, unBookmark } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import getMyS from '../../../helpers/getMyS';
import useAuth from '../../../hooks/useAuth';
import Avatar from '../../Avatar/Avatar';
import CustomButton from '../../Button/Button';
import styles from './PlayerCard.styles';

export default function PlayerCard({
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
  const { authData } = useAuth();
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = async () => {
    const bookmarkerId = authData.id;
    const referencedPlayer = user.Player.playerId;
    const response = await bookmark({ bookmarkerId, referencedPlayer, referenceType: 'Player' });
    if (response.status === 200) {
      setBookmarked(response.data);
    }
  };

  const handleUnBookmark = async () => {
    const result = await unBookmark(bookmarked.id);
    if (result.status === 200) {
      setBookmarked(false);
    }
  };

  const checkBookmark = async () => {
    const params = {
      userId: authData.id,
      refId: user.Player.playerId,
      refType: 'Player',
    };
    const bookmarkRes = await isBookmarked(params);
    console.log('first', bookmarkRes);
    setBookmarked(bookmarkRes);
  };

  useEffect(() => {
    checkBookmark();
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.button}>
        <View style={styles.basicAccountBtn}>
          <Text style={styles.basicAccountLabel}>Basic account</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        onPress={() => {
          user.profilePic && navigation.navigate('PhotoView', { photo: user.profilePic });
        }}>
        <Avatar
          name={`${user.Player?.firstName} ${user.Player?.lastName}`}
          avatarContainer={{ marginHorizontal: 15, marginTop: 5 }}
          image={user.profilePic}
          size={80}
        />
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.name}>
            {user.Player?.firstName} {user.Player?.lastName}
          </Text>
          <Text style={styles.personalInfo}>
            Gender: <Text style={{ color: Colors.white }}>{user.Player?.gender}</Text>
          </Text>
          <Text style={styles.personalInfo}>
            Back number: <Text style={{ color: Colors.white }}>{user.Player?.backNumber}</Text>
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.teamStatus}>
        <Text style={{ color: Colors.white }}>CURRENTLY WITHOUT A TEAM</Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          label="Message"
          style={styles.sendMessageBtn}
          labelStyle={styles.btnLabel}
          onPress={newChatMessage}
        />

        {authData.role === 'Club' &&
          (!bookmarked ? (
            <CustomButton
              label="Bookmark"
              style={styles.bookmarkBtn}
              labelStyle={styles.btnLabel}
              onPress={handleBookmark}
            />
          ) : (
            <CustomButton
              label="Unbookmark"
              style={styles.bookmarkBtn}
              labelStyle={styles.btnLabel}
              onPress={handleUnBookmark}
            />
          ))}
        {!isFollow ? (
          <CustomButton
            label="Follow"
            style={[styles.followBtn]}
            labelStyle={styles.btnLabel}
            onPress={handleFollow}
          />
        ) : (
          <CustomButton
            label="Unfollow"
            style={[styles.followBtn]}
            labelStyle={styles.btnLabel}
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
