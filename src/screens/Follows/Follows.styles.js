import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
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
    width: '50%',
    padding: 6,
    justifyContent: 'center',
  },
  rightTab: {
    width: '50%',
    padding: 6,
    justifyContent: 'center',
  },
  bottomTabContainer: {
    alignSelf: 'center',
  },
  aboutText: {
    color: Colors.white,
    padding: 10,
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.small,
  },
});

export default styles;
