import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Menu.styles';

export default function Menu() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text style={styles.text}>This is menu screen</Text>
    </SafeAreaView>
  );
}
