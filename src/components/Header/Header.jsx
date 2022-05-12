import React from 'react';
import { View, Text } from 'react-native-ui-lib';

import Colors from '../../constants/Colors';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import styles from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={{ width: '20%', color: Colors.white }}>ICON</Text>
      <HeaderSearch />
    </View>
  );
};
export default Header;
