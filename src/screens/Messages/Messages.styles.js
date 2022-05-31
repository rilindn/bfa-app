import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    padding: 15,
    backgroundColor: Colors.background,
  },
  content: {
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataContent: {
    marginLeft: 10,
    flexDirection: 'column',
    marginRight: 80,
    alignContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  name: {
    fontSize: fontSizes.small,
    color: Colors.white,
  },
  message: {
    fontSize: fontSizes.extraSmall,
    color: Colors.white,
  },
  datetimeWrapper: {
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  datetime: {
    color: Colors.gray3,
    fontSize: fontSizes.extraSmall,
  },
});

export default styles;
