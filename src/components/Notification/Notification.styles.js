import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 70,
    backgroundColor: Colors.gray6,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.gray3 + '50',
    borderRadius: 15,
    marginTop: 10,
    padding: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  content: {
    marginLeft: 10,
    justifyContent: 'space-around',
    height: '100%',
  },
  notificationText: {
    fontSize: fontSizes.medium,
    color: Colors.white,
  },
  datetime: {
    color: Colors.gray3,
    fontSize: fontSizes.extraSmall,
  },
});

export default styles;
