import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../constants/Colors';

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
