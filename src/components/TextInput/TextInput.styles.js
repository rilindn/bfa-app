import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: 10,
    position: 'relative',
  },
  inputCtn: {
    borderWidth: 1,
    borderColor: Colors.green1,
    borderRadius: 6,
    backgroundColor: Colors.green1 + '40',
  },
  textInputStyle: {
    fontSize: 14,
    marginLeft: 10,
    height: 45,
    color: Colors.gray4,
  },
  title: {
    fontFamily: 'poppins-regular',
    marginBottom: -3,
    marginTop: 3,
    marginLeft: 4,
    fontSize: fontSizes.default,
    color: Colors.gray5,
  },
  error: {
    color: Colors.red,
    position: 'absolute',
    top: '100%',
    fontSize: 11,
    marginLeft: 4,
  },
});
export default styles;
