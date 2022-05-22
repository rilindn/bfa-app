import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    width: '80%',
    position: 'relative',
  },
  search: {
    borderRadius: 6,
    borderWidth: 1,
    position: 'relative',
    backgroundColor: Colors.gray4,
    borderColor: Colors.gray3 + 80,
  },
  searchInput: {
    color: Colors.light,
    fontSize: fontSizes.medium,
    marginLeft: 10,
    height: 45,
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
    top: 9,
  },
  resultsContainer: {
    position: 'absolute',
    top: 60,
    width: '100%',
    borderRadius: 5,
    padding: 12,
    borderWidth: 1,
    borderColor: Colors.light + '90',
    backgroundColor: Colors.gray4,
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.gray5 + 40,
    padding: 7,
    borderRadius: 5,
    marginVertical: 3,
  },
  userInfos: {
    color: Colors.white,
    paddingLeft: 10,
  },
  name: {
    fontSize: fontSizes.medium,
    fontFamily: 'poppins-bold',
    includeFontPadding: false,
    textAlign: 'center',
    color: Colors.light,
  },
  role: {
    color: Colors.gray3,
  },
  resultsText: {
    fontSize: fontSizes.extraLarge,
    fontFamily: 'poppins-bold',
    includeFontPadding: false,
    color: Colors.light,
  },
});
export default styles;
