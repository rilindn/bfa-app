import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Messages.styles';

export default function Messages() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <Text style={styles.text}>This is messages screen</Text>
    </SafeAreaView>
  );
}
