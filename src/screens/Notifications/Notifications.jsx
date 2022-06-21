import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

import Notification from '../../components/Notification/Notification';
import styles from './Notifications.styles';

export default function Notifications() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.notificationsContainer}>
        <Notification />
        <Notification />
        <Notification />
        <Notification />
        <Notification />
      </View>
    </View>
  );
}
