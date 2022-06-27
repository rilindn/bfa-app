import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    width: '94%',
    marginVertical: 8,
    backgroundColor: Colors.headerBg,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  userDataContainer: {
    flexDirection: 'row',
  },
  postSomethingText: {
    color: Colors.light,
    fontSize: fontSizes.large,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray3 + '50',
    paddingVertical: 10,
    fontFamily: 'poppins-semibold',
  },
  dateContainer: {
    // width: '70%',
    height: 45,
    justifyContent: 'center',
    marginLeft: 10,
  },
  name: {
    color: Colors.white,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.large,
  },
  date: {
    color: Colors.gray3 + '80',
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.extraSmall,
  },
  dotsIcon: {
    marginBottom: 5,
    marginRight: 10,
  },
  menuContent: {
    backgroundColor: Colors.gray4,
    right: 0,
  },
  menuItems: {
    width: 150,
  },
  menuItemsTitle: {
    marginLeft: -25,
  },
  middleContainer: {
    width: '100%',
    marginVertical: 15,
  },
  description: {
    color: Colors.placeholder,
    fontFamily: 'poppins-regular',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 300,
    alignSelf: 'center',
  },
});

export default styles;
