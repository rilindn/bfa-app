import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { customFontSizes, fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.headerBg,
    alignItems: 'center',
    padding: 25,
  },
  messageContainer: {
    backgroundColor: Colors.gray3 + '20',
    borderRadius: 6,
    justifyContent: 'center',
  },
  post: {
    fontSize: customFontSizes(18),
    color: Colors.green1 + '50',
  },
  commentText: {
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.extraSmall,
    color: Colors.gray3 + '80',
    paddingLeft: 10,
  },
  commentName: {
    color: Colors.white,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.default,
  },
  buttonContainer: {
    width: 45,
    height: 45,
    backgroundColor: Colors.gray3 + '60',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
