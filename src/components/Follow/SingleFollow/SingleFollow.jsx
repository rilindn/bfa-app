import { Text, View, TouchableOpacity } from 'react-native';

import { unFollow } from '../../../api/ApiMethods';
import getFullName from '../../../helpers/extractFullname';
import Avatar from '../../Avatar/Avatar';
import styles from './SingleFollow.styles';

export default function SingleFollow({ type, loggedUser, user, refetchFollows }) {
  const fullName = getFullName(user);

  const handleUnfollow = async () => {
    const followerId = type === 'followers' ? user.id : loggedUser.id;
    const followedId = type === 'followers' ? loggedUser.id : user.id;
    await unFollow({ followerId, followedId });
    await refetchFollows();
  };

  return (
    <View style={styles.wrapper}>
      <Avatar name={fullName} size={50} image={user?.profilePic} />
      <View style={styles.content}>
        <View style={styles.dataContent}>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.role}>{user.role}</Text>
        </View>

        <TouchableOpacity style={styles.removeBtn} onPress={() => handleUnfollow()}>
          <Text style={styles.removeLabel}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
