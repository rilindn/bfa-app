import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/Colors';

export default function Messages() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <View style={styles.separator} />
      <Text style={styles.text}>This is messages screen</Text>
    </View>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: '#222222',
  },
  text: {
    color: Colors.text,
  },
});
