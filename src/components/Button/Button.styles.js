import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    fontFamily: 'poppins-semibold',
    paddingVertical: 8,
  },
  button: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: Colors.mainGreen,
    borderRadius: 6,
  },
});
export default styles;
