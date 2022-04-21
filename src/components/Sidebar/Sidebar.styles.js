import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  custom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  title: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
    color: Colors.light,
  },
});
export default styles;
