import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    position: 'relative',
  },
  inputCtn: {
    borderWidth: 1,
    borderColor: Colors.green1,
    borderRadius: 6,
    height: 48,
    backgroundColor: Colors.green1 + '40',
    justifyContent: 'center',
  },
  textInputStyle: {
    fontSize: fontSizes.medium,
    marginLeft: 10,
    color: Colors.light,
    paddingLeft: 4,
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
    fontSize: fontSizes.extraSmall,
    marginLeft: 4,
  },
});

const stylesDark = StyleSheet.create({
  inputCtn: {
    borderWidth: 0.5,
    borderColor: Colors.light + '90',
    backgroundColor: Colors.green1 + '20',
  },
  textInputStyle: {
    color: Colors.light,
  },
  title: {
    color: Colors.gray3 + 50,
  },
  error: {
    color: Colors.red,
  },
});

export { styles, stylesDark };
