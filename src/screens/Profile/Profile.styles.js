import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  name: {
    color: Colors.light,
    fontSize: fontSizes.medium,
    marginHorizontal: 15,
    fontFamily: 'poppins-semibold',
  },
  main: {
    marginTop: 20,
    width: '94%',
    borderWidth: 1,
    borderColor: Colors.gray3 + '50',
    borderRadius: 15,
    alignSelf: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'flex-start',
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
    fontSize: fontSizes.small,
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
  editProfileBtn: {
    width: 120,
    height: 40,
    backgroundColor: Colors.orange,
  },
  editProfileLabel: {
    fontSize: fontSizes.small,
    fontFamily: 'poppins-regular',
    color: Colors.white,
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
  editBtn: {
    width: 20,
    height: 40,
    backgroundColor: Colors.orange,
  },
  editLabel: {
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
  playerCharacteristicContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 10,
  },
  playerCharacteristicText: {
    fontFamily: 'poppins-semibold',
    color: Colors.white,
  },
  postContainer: {
    backgroundColor: Colors.gray4,
    borderColor: Colors.gray3 + 50,
    width: '85%',
    borderWidth: 1,
    borderRadius: 6,
    height: 45,
    justifyContent: 'center',
  },
  postPlaceholder: {
    paddingLeft: 10,
    color: Colors.placeholder,
    fontFamily: 'poppins-regular',
  },
});

export default styles;
