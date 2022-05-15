import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.gray3 + '50',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
  dataContent: {
    flexDirection: 'column',
  },
  name: {
    fontSize: fontSizes.medium,
    color: Colors.white,
    fontFamily: 'poppins-semibold',
    includeFontPadding: false,
    textAlign: 'center',
  },
  role: {
    fontSize: fontSizes.small,
    color: Colors.light,
  },
  label: {
    alignSelf: 'center',
  },
  removeBtn: {
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: Colors.white,
    borderRadius: 5,
    padding: 6,
    width: 85,
    height: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeLabel: {
    color: Colors.white,
    fontSize: fontSizes.small,
  },
});
export default styles;
