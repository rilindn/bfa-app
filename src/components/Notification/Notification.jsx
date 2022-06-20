import { Text, View, TouchableOpacity } from 'react-native';

import Avatar from '../../components/Avatar/Avatar';
import styles from './Notification.styles';

export default function Notification() {
  return (
    <TouchableOpacity style={styles.container}>
      <Avatar
        size={45}
        image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
      />
      <View style={styles.content}>
        <Text style={styles.notificationText}>We posted something new!</Text>
        <Text style={styles.datetime}>06/03/2022</Text>
      </View>
    </TouchableOpacity>
  );
}
