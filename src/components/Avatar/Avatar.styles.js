import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { customFontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  avatarContainer: {
    width: 70,
    height: 70,
    backgroundColor: Colors.gray3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70,
    borderWidth: 1,
    borderColor: Colors.light,
  },
  initials: {
    fontSize: customFontSizes(32),
    fontFamily: 'poppins-semibold',
    color: Colors.white,
    includeFontPadding: false,
    textAlign: 'center',
    letterSpacing: 2,
  },
  imageStyle: {
    width: 45,
    height: 45,
    borderRadius: 30,
    padding: 5,
    borderWidth: 0.5,
    borderColor: Colors.gray3,
  },
});
export default styles;
