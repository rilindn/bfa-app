import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 20,
    color: Colors.text,
    fontWeight: 'bold',
  },
  text: {
    color: Colors.text,
  },
  noPostContainer: {
    alignItems: 'center',
  },
  noPostText: {
    fontSize: fontSizes.small,
    color: Colors.gray3 + '70',
    marginTop: '50%',
  },
});

export default styles;
