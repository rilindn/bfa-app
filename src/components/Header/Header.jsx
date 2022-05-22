import React from 'react';
import { View, Image } from 'react-native';

import ImageSource from '../../../assets/icons/HeaderLogo.png';
import HeaderSearch from '../HeaderSearch/HeaderSearch';
import styles from './Header.styles';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="cover" source={ImageSource} />
      <HeaderSearch />
    </View>
  );
};
export default Header;
