import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  commentsContainer: {
    marginHorizontal: 10,
    marginTop: 5,
  },
  divider: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray3 + '50',
    padding: 15,
    marginBottom: 0,
  },
  deleteText: {
    color: Colors.red + 80,
    textAlign: 'center',
    fontFamily: 'poppins-regular',
  },
  deleteOption: {
    display: 'flex',
    alignItems: 'center',
  },
});
export default styles;
