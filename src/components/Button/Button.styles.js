import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    fontFamily: 'poppins-semibold',
    paddingVertical: 4,
  },
  button: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: Colors.mainGreen,
    borderRadius: 6,
    marginTop: 10,
  },
});
export default styles;
