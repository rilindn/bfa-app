import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
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
});
export default styles;
