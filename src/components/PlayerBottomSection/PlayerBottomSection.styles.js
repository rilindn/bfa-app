import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
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
  tabText: {
    color: Colors.light,
    alignSelf: 'center',
    padding: 10,
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
    justifyContent: 'center',
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
  aboutText: {
    color: Colors.white,
    padding: 10,
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.small,
  },
});

export default styles;
