import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  genInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  searchRes: {
    color: Colors.light,
    fontSize: fontSizes.extraLarge,
    fontFamily: 'poppins-bold',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  backBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.orange + 90,
    padding: 7,
    borderRadius: 10,
  },
  backBtnText: {
    fontFamily: 'poppins-regular',
    color: Colors.white,
    textAlign: 'center',
    fontSize: fontSizes.medium,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  noMatchesText: {
    fontFamily: 'poppins-regular',
    color: Colors.gray3,
    textAlign: 'center',
    fontSize: fontSizes.default,
    marginTop: 20,
  },
  results: {
    flex: 1,
  },
  characteristics: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  result: {
    justifyContent: 'center',
    backgroundColor: Colors.gray5 + 40,
    borderWidth: 1,
    borderColor: Colors.gray5,
    padding: 8,
    borderRadius: 5,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  divider: {
    width: 10,
    backgroundColor: Colors.gray3,
    transform: [{ rotate: '90deg' }],
  },
  userInfos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: Colors.white,
    paddingLeft: 10,
  },
  name: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-bold',
    includeFontPadding: false,
    textAlign: 'center',
    color: Colors.light,
    marginLeft: 10,
  },
  role: {
    color: Colors.gray3,
  },
});

export default styles;
