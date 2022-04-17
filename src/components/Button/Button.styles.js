import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  label: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
  },
  button: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: Colors.mainGreen,
    borderRadius: 6,
    marginTop: 15,
    height: 45,
  },
});
export default styles;
