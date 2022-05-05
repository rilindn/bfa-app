import { Dimensions, StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  avatar: {
    width: '90%',
    paddingTop: 20,
    flexDirection: 'row',
  },
  changePhoto: {
    color: Colors.light,
    fontSize: fontSizes.medium,
    marginLeft: 10,
    marginTop: 15,
  },
  genInfo: {
    width: '90%',
  },
  changeInfo: {
    marginTop: 20,
    color: Colors.light,
    fontSize: fontSizes.large,
    fontFamily: 'poppins-bold',
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  cancelBtn: {
    width: '45%',
    height: 40,
    backgroundColor: Colors.gray5,
  },
  cancelLabel: {
    fontFamily: 'poppins-regular',
    color: Colors.white,
    textAlign: 'center',
    fontSize: fontSizes.small,
  },
  saveBtn: {
    width: '45%',
    height: 40,
  },
  saveLabel: {
    fontFamily: 'poppins-regular',
    color: Colors.white,
    textAlign: 'center',
    fontSize: fontSizes.small,
  },
  inputsContainer: {
    width: '90%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: Colors.gray3,
    color: Colors.light,
  },
  accSettings: {
    width: '90%',
    color: Colors.white,
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.small,
  },
  avatarMenu: {
    left: 85,
  },
});

export default styles;
