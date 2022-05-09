import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import FollowTopBar from '../../components/Follow/FollowTopBar/FollowTopBar';
import styles from './Follow.styles';

export default function Follow({ route, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FollowTopBar />
    </SafeAreaView>
  );
}
