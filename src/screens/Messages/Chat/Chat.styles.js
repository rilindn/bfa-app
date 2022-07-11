import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    flexDirection: 'column-reverse',
  },
  messageWrapper: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse',
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 2,
  },
  message: {
    backgroundColor: Colors.gray3,
    color: Colors.white,
    fontFamily: 'poppins-medium',
    fontSize: fontSizes.default,
    padding: 10,
    borderRadius: 17,
    overflow: 'hidden',
    includeFontPadding: false,
    marginHorizontal: 10,
    maxWidth: Dimensions.get('window').width - 100,
  },
  mediaMessage: {
    minWidth: 200,
    minHeight: 260,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  timeSend: {
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.extraSmall,
    includeFontPadding: false,
    textAlign: 'center',
    color: Colors.gray3,
    // marginHorizontal: 7,
  },
  deleteOption: {
    display: 'flex',
    alignItems: 'center',
  },
  deleteText: {
    color: Colors.red + 80,
    textAlign: 'center',
    fontFamily: 'poppins-regular',
  },
  unread: {
    width: 5,
    height: 5,
    borderRadius: 50,
    backgroundColor: Colors.red2,
  },
});

export default styles;
