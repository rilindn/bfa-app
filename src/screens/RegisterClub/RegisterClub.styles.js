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
    marginBottom: 30,
    marginTop: 80,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 15,
  },
  registerAccount: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
    marginTop: 10,
  },
  forgotPassword: {
    fontSize: fontSizes.medium,
    fontFamily: 'poppins-regular',
    color: Colors.gray3,
    marginBottom: 25,
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
    marginTop: 20,
  },
  login: {
    color: Colors.mainGreen,
    paddingLeft: 5,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.default,
  },
  bottomText: {
    fontSize: fontSizes.default,
    fontFamily: 'poppins-semibold',
  },
  middleContainer: {
    width: '90%',
    alignItems: 'center',
  },
  selectInputLabel: {
    alignSelf: 'flex-start',
    marginHorizontal: 22,
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.default,
    color: Colors.gray5,
    marginTop: 3,
  },
});

export default styles;
