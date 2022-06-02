import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
  },
  commentContainer: {
    width: '85%',
    borderRadius: 6,
    justifyContent: 'center',
    marginLeft: 10,
  },
  commentText: {
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.small,
    color: Colors.gray3,
    paddingLeft: 10,
  },
  commentName: {
    color: Colors.white,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.default,
  },
});
export default styles;
