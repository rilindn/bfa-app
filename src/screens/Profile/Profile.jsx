import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Profile.styles';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>This is profile screen</Text>
    </SafeAreaView>
  );
}
