import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: Colors.background,
  },
  genInfo: {
    width: '90%',
  },
  addresInfo: {
    width: '100%',
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
    width: '100%',
    color: Colors.white,
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.small,
  },
});

export default styles;
