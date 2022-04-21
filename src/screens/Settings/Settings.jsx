import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './Settings.styles';

export default function Settings({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.text}>This is Settings screen</Text>
    </SafeAreaView>
  );
}
