import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '90%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 15,
  },
  loginText: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
    marginTop: 15,
    marginBottom: -30,
  },
  forgotPassword: {
    fontSize: fontSizes.medium,
    fontFamily: 'poppins-regular',
    color: Colors.gray3,
    marginBottom: 15,
  },
  bottomContainer: {
    backgroundColor: Colors.light + '70',
    borderTopColor: Colors.green1,
    borderTopWidth: 1,
    width: '100%',
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  register: {
    color: Colors.mainGreen,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.default,
  },
  bottomText: {
    fontSize: fontSizes.default,
    fontFamily: 'poppins-semibold',
  },
  middleContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 30,
  },
});

export default styles;
