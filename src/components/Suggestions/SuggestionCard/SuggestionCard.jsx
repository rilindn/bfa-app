import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';

import { follow, verifyFollow, unFollow } from '../../../api/ApiMethods';
import getFullName from '../../../helpers/extractFullname';
import useAuth from '../../../hooks/useAuth';
import Avatar from '../../Avatar/Avatar';
import CustomButton from '../../Button/Button';
import styles from './SuggestionCard.styles';

const SuggestionCard = ({ loading, user, navigation }) => {
  const { authData } = useAuth();
  const [isFollow, setIsFollow] = useState();
  const followerId = authData.id;

  const handleFollow = async () => {
    await Promise.all([follow({ followerId, followedId: user.id }), isFollowed()]);
  };

  const isFollowed = async () => {
    const checkIsFollow = await verifyFollow({ followerId, followedId: user.id });
    setIsFollow(checkIsFollow);
  };

  const handleUnfollow = async () => {
    await Promise.all([unFollow({ followerId, followedId: user.id }), isFollowed()]);
  };

  const fullName = getFullName(user);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ViewProfile', {
          id: user.id,
        });
      }}
      style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar size={50} name={fullName} />
      </View>
      <Text style={styles.fullname}>{fullName}</Text>
      {!isFollow ? (
        <CustomButton
          label="Follow"
          style={styles.followBtn}
          loading={loading}
          onPress={handleFollow}
        />
      ) : (
        <CustomButton
          label="Unfollow"
          style={styles.followBtn}
          loading={loading}
          onPress={handleUnfollow}
        />
      )}
    </TouchableOpacity>
  );
};
export default SuggestionCard;
