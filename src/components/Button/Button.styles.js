import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  label: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
    includeFontPadding: false,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: Colors.mainGreen,
    borderRadius: 6,
    height: 45,
  },
});
export default styles;
