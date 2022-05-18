import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

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
  statisticsNumber: {
    alignSelf: 'center',
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
});

export default styles;
