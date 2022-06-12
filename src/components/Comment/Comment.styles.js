import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    width: '100%',
  },
  commentContainer: {
    width: '80%',
    borderRadius: 6,
    justifyContent: 'center',
    marginLeft: 10,
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    fontSize: fontSizes.medium,
    paddingLeft: 10,
  },
  commentDate: {
    color: Colors.light,
    fontSize: fontSizes.extraSmall,
    textAlign: 'right',
  },
  deleteContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  delete: {
    color: Colors.red + '30',
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.small,
  },
});
export default styles;
