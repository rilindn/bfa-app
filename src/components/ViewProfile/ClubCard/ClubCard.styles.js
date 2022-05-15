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
    fontSize: fontSizes.medium,
    marginHorizontal: 15,
    fontFamily: 'poppins-semibold',
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
  basicAccountLabel: {
    fontSize: fontSizes.large,
    color: Colors.white,
    fontFamily: 'poppins-semibold',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftListItem: {
    color: Colors.gray3 + '50',
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.extraSmall,
  },
  rightListItem: {
    color: Colors.white,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.extraSmall,
  },
  sendMessageBtn: {
    width: '45%',
    height: 40,
    backgroundColor: Colors.mainGreen,
  },
  sendMessageLabel: {
    fontSize: fontSizes.larges,
    fontFamily: 'poppins-regular',
    color: Colors.white,
  },
  bookmarkBtn: {
    width: 110,
    height: 40,
    backgroundColor: Colors.background,
    borderWidth: 1,
    borderColor: Colors.orange,
  },
  btnContainer: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
