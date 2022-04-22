import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 48,
    backgroundColor: Colors.green1 + '40',
    justifyContent: 'center',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: Colors.green1,
    marginBottom: 8,
  },
  error: {
    color: Colors.red,
    position: 'absolute',
    top: '100%',
    fontSize: fontSizes.extraSmall,
    marginLeft: 4,
  },
  item: {
    fontSize: fontSizes.medium,
  },
});
export default styles;
