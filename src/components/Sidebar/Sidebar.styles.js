import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  drawerStyle: {
    flex: 1,
    justifyContent: 'space-between',
  },
  custom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    color: Colors.light,
  },
  logoutText: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
    textAlignVertical: 'center',
    includeFontPadding: false,
    color: Colors.light,
  },
  logoutContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    marginBottom: 5,
    backgroundColor: Colors.gray3 + '10',
    borderRadius: 10,
    padding: 15,
  },
  iconWrapper: {
    backgroundColor: Colors.light + '30',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 50,
    marginRight: 15,
    paddingLeft: 10,
  },
  footer: {
    padding: 15,
    flexDirection: 'row',
  },
  footerText: {
    color: Colors.light + '90',
    fontSize: fontSizes.default,
    fontFamily: 'poppins-medium',
  },
});
export default styles;
