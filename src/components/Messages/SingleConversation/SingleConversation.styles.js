import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  drawer: {
    width: '100%',
  },
  conversationRow: {
    height: 60,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.background,
    justifyContent: 'space-between',
    padding: 10,
  },
  userData: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    color: Colors.light,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.large,
    includeFontPadding: false,
  },
  messageText: {
    color: Colors.light + 90,
    fontSize: fontSizes.default,
  },
  dateTime: {
    color: Colors.light,
    fontSize: fontSizes.extraSmall,
  },
});

export default styles;
