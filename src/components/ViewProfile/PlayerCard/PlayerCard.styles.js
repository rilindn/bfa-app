import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  main: {
    marginTop: 20,
    width: '94%',
    borderWidth: 1,
    borderColor: Colors.gray3 + '50',
    borderRadius: 15,
    alignSelf: 'center',
  },
  name: {
    color: Colors.light,
    fontSize: fontSizes.small,
    // marginHorizontal: 15,
    fontFamily: 'poppins-semibold',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  statisticsNumber: {
    color: Colors.white,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.medium,
  },
  statisticsText: {
    color: Colors.gray3,
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
  basicAccountBtn: {
    width: 120,
    height: 22,
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
  personalInfo: {
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.extraSmall,
    color: Colors.gray3 + '50',
  },
  btnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
  },
  sendMessageBtn: {
    marginHorizontal: 5,
    marginVertical: 10,
    maxWidth: '45%',
    minWidth: '28%',
    flex: 1,
    height: 40,
    backgroundColor: Colors.mainGreen,
  },
  followBtn: {
    marginHorizontal: 5,
    marginVertical: 10,
    maxWidth: '45%',
    minWidth: '28%',
    flex: 1,
    height: 40,
    backgroundColor: Colors.orange,
  },
  btnLabel: {
    fontSize: fontSizes.larges,
    fontFamily: 'poppins-regular',
    color: Colors.white,
  },
  bookmarkBtn: {
    marginHorizontal: 5,
    marginVertical: 10,
    maxWidth: '45%',
    minWidth: '28%',
    height: 40,
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.orange,
  },
});

export default styles;
