import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Feed.styles';

export default function Feed({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Feed</Text>
      <Text style={styles.text}>This is feed screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.title}>Return to login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
