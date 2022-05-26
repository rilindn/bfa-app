import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { customFontSizes, fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.headerBg,
    alignItems: 'center',
    padding: 25,
  },
  commentContainer: {
    backgroundColor: Colors.gray3 + '20',
    width: '70%',
    borderRadius: 6,
    height: 45,
    justifyContent: 'center',
  },
  subContainer: {
    flexDirection: 'row',
  },
  post: {
    fontSize: customFontSizes(18),
    color: Colors.lightBlue + '50',
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
  input: {
    width: '80%',
  },
});
export default styles;
