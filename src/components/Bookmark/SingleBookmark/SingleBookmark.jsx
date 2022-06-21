import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';

import Avatar from '../../Avatar/Avatar';
import styles from './SingleBookmark.styles';
export default function SingleBookmark({ data, handleUnBookmark }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => navigation.navigate('ViewProfile', { id: data.Player.User.id })}>
      <Avatar
        size={50}
        name={`${data.Player?.firstName} ${data.Player?.lastName}`}
        image={data?.profilePic}
      />
      <View style={styles.content}>
        <View style={styles.dataContent}>
          <Text style={styles.name}>{`${data.Player?.firstName} ${data.Player?.lastName}`}</Text>
          <Text style={styles.role}>{data.Player.User?.role}</Text>
        </View>
        <TouchableOpacity style={styles.removeBtn} onPress={handleUnBookmark}>
          <Text style={styles.removeLabel}>Remove</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
