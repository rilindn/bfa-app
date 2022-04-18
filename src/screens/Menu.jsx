import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../constants/Colors';

export default function Menu() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Text style={styles.text}>This is menu screen</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: Colors.text,
    fontWeight: 'bold',
  },
  text: {
    color: Colors.text,
  },
});
