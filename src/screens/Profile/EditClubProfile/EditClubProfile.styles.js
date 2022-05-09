import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { customFontSizes, fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.background,
  },
  main: {
    alignItems: 'center',
    borderWidth: 0.5,
    alignSelf: 'center',
    borderColor: Colors.gray3 + '50',
    marginVertical: 20,
    width: '95%',
    borderRadius: 10,
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
    fontSize: customFontSizes(16),
    fontFamily: 'poppins-semibold',
  },
  buttonsContainer: {
    marginVertical: 20,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  accSettings: {
    width: '100%',
    color: Colors.white,
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.small,
  },
  title: {
    color: Colors.light,
    fontSize: fontSizes.large,
    marginHorizontal: 15,
    fontFamily: 'poppins-semibold',
    alignSelf: 'center',
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray3 + '50',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    width: '100%',
  },
  avatar: {
    width: '100%',
    paddingTop: 20,
    flexDirection: 'row',
  },
  changePhoto: {
    color: Colors.light,
    fontSize: fontSizes.medium,
    textAlignVertical: 'center',
  },
  avatarMenu: {
    left: 90,
  },
});

export default styles;
