import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  continer: {
    width: '100%',
  },
  containerHead: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  position: {
    color: Colors.light,
    fontFamily: 'poppins-bold',
    includeFontPadding: false,
    textAlignVertical: 'center',
    fontSize: fontSizes.extraLarge,
    marginVertical: 8,
  },
  dotsIcon: {
    marginBottom: 5,
    marginRight: 10,
  },
  menuContent: {
    backgroundColor: Colors.gray4,
    right: 0,
  },
  menuItems: {
    width: 100,
  },
  menuItemsTitle: {
    marginLeft: -25,
  },
  tableCellKey: {
    marginRight: 25,
  },
  tableCellKeyText: {
    color: Colors.placeholder,
    fontFamily: 'poppins-light',
  },
  tableCellValue: {
    color: Colors.light,
    fontFamily: 'poppins-semibold',
  },
  about: {
    color: Colors.light,
    fontFamily: 'poppins-regular',
    marginTop: 10,
  },
});

export default styles;
