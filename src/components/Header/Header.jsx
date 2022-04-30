import React from 'react';
import { View, Text } from 'react-native-ui-lib';

import Colors from '../../constants/Colors';
import styles from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: Colors.white }}>This is header</Text>
    </View>
  );
};
export default Header;
