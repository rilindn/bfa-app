import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Notifications.styles';

export default function Notifications() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <Text style={styles.text}>This is notifications screen</Text>
    </SafeAreaView>
  );
}
