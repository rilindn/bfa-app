import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  main: {
    marginTop: 20,
    paddingTop: 10,
    width: '100%',
    alignSelf: 'center',
    height: '100%',
  },
  title: {
    color: Colors.light,
    fontSize: fontSizes.medium,
    marginHorizontal: 15,
    fontFamily: 'poppins-semibold',
    alignSelf: 'center',
  },
  editProfileBtn: {
    width: 160,
    height: 40,
    backgroundColor: Colors.orange,
  },
  editProfileLabel: {
    fontSize: fontSizes.small,
    fontFamily: 'poppins-regular',
    color: Colors.white,
  },
  mainContent: {
    paddingTop: 30,
    borderTopWidth: 1,
    borderColor: Colors.gray3 + '50',
    flexDirection: 'row',
  },
  changePhoto: {
    color: Colors.light,
    fontSize: fontSizes.medium,
  },
  genInfo: {},
  changeInfo: {
    marginTop: 50,
    color: Colors.light,
    fontSize: fontSizes.medium,
    alignSelf: 'center',
  },
  infoBoxWrapper: {
    borderTopColor: Colors.gray3 + '50',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 90,
  },
  infoBox: {
    width: '33.33%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: Colors.gray3,
    borderRightWidth: 0.5,
  },
  tabText: {
    color: Colors.light,
    alignSelf: 'center',
    padding: 10,
  },
  postSomethingWrapper: {
    width: '94%',
    marginVertical: 20,
    borderWidth: 1,
    borderColor: Colors.gray3 + '50',
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  postSomethingAvatar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  postSomethingText: {
    color: Colors.light,
    fontSize: fontSizes.large,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray3 + '50',
    paddingVertical: 10,
    fontFamily: 'poppins-semibold',
  },
  teamStatus: {
    width: '93%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 0.5,
    borderColor: Colors.white,
    borderRadius: 6,
    padding: 10,
    marginVertical: 20,
  },
  statisticsNumber: {
    color: Colors.white,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.medium,
  },
  statisticsText: {
    color: Colors.gray3,
  },
  aboutText: {
    color: Colors.white,
    padding: 10,
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.extraSmall,
  },
  basicAccountBtn: {
    width: 120,
    height: 25,
    backgroundColor: Colors.gray4 + '50',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  basicAccountLabel: {
    fontSize: fontSizes.small,
    color: Colors.white + '70',
    fontFamily: 'poppins-regular',
  },
  topTabContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  leftTab: {
    width: '47%',
    padding: 6,
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderTopWidth: 1,
    borderColor: Colors.gray3 + '50',
    borderLeftWidth: 1,
  },
  rightTab: {
    width: '47%',
    padding: 6,
    justifyContent: 'center',
    borderTopRightRadius: 15,
    borderTopWidth: 1,
    borderColor: Colors.gray3 + '50',
    borderRightWidth: 1,
  },
  bottomTabContainer: {
    width: '94%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderWidth: 1,
    borderColor: Colors.gray3 + '50',
    alignSelf: 'center',
  },
  button: {
    marginTop: 50,
    flexDirection: 'row',
    padding: 15,
    //alignSelf: 'center',
    justifyContent: 'space-between',
  },
  cancelBtn: {
    width: 100,
    height: 40,
    backgroundColor: Colors.orange,
  },
  cancelLabel: {
    fontFamily: 'poppins-regular',
    color: Colors.white,
    textAlign: 'center',
    fontSize: fontSizes.small,
  },
  saveBtn: {
    width: 200,
    height: 40,
    //backgroundColor: Colors.orange,
  },
  saveLabel: {
    fontFamily: 'poppins-regular',
    color: Colors.white,
    textAlign: 'center',
    fontSize: fontSizes.small,
  },
  leftListItem: {
    color: Colors.gray3 + '50',
    fontFamily: 'poppins-regular',
  },
  rightListItem: {
    color: Colors.white,
    fontFamily: 'poppins-semibold',
  },
  playerCharacteristicText: {
    fontFamily: 'poppins-semibold',
    color: Colors.white,
  },
  inputText: {
    marginTop: 20,
  },
  input: {
    backgroundColor: Colors.gray3,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.placeholder,
    marginVertical: 10,
    marginHorizontal: 8,
  },
  accSettings: {
    marginTop: 50,
    color: Colors.white,
    padding: 10,
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.small,
  },
});

export default styles;
