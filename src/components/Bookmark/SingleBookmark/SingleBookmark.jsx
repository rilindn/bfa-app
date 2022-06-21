import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';

import { unBookmark } from '../../../api/ApiMethods';
import Avatar from '../../Avatar/Avatar';
import styles from './SingleBookmark.styles';
export default function SingleBookmark({ data, bookmarks, setBookmarks }) {
  const navigation = useNavigation();

  const handleUnBookmark = async () => {
    const result = await unBookmark(data.id);
    if (result.status === 200) {
      setBookmarks(bookmarks.filter(({ id }) => id !== data.id));
    }
  };
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
        <TouchableOpacity style={styles.removeBtn} onPress={() => handleUnBookmark()}>
          <Text style={styles.removeLabel}>Remove</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
