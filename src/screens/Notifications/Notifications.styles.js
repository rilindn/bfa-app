import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: fontSizes.title,
    color: Colors.light,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.gray3 + '50',
    width: '100%',
    paddingVertical: 10,
  },
  notificationsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
