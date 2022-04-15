import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: '90%',
  },
  inputCtn: {
    borderWidth: 1,
    borderColor: Colors.green1,
    borderRadius: 6,
    backgroundColor: Colors.green1 + '80',
  },
  textInputStyle: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    marginLeft: 10,
    paddingVertical: 12,
    color: Colors.gray4,
  },
  title: {
    fontFamily: 'poppins-regular',
    fontSize: 16,
    color: Colors.gray3,
    marginBottom: 5,
  },
});
export default styles;
