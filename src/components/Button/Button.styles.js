import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  label: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
    includeFontPadding: false,
    textAlign: 'center',
    color: Colors.green1,
  },
  button: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: Colors.mainGreen,
    borderRadius: 6,
    height: 45,
    justifyContent: 'center',
  },
});
export default styles;
