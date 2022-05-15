import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    marginTop: 10,
    padding: 15,
  },
  noFollowContainer: {
    alignItems: 'center',
  },
  noFollowText: {
    fontSize: fontSizes.medium,
    color: Colors.gray3 + '70',
    marginTop: 50,
  },
});
export default styles;
