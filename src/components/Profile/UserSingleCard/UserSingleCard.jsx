import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Avatar from '../../Avatar/Avatar';
import styles from './UserSingleCard.styles';

export default function UserSingleCard({ user, dissmisResults, containerStyle }) {
  const navigation = useNavigation();
  const fullName =
    user.role === 'Player'
      ? `${user.Player?.firstName} ${user.Player?.lastName}`
      : user.Club?.clubName;

  return (
    <TouchableOpacity
      style={[styles.result, containerStyle]}
      onPress={() => {
        navigation.navigate('ViewProfile', {
          id: user.id,
        });
        dissmisResults && dissmisResults();
      }}>
      <Avatar size={40} name={fullName} image={user?.profilePic} />
      <View style={styles.userInfos}>
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.role}>{user.role}</Text>
      </View>
    </TouchableOpacity>
  );
}
