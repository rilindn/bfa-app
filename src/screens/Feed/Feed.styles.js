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
    fontSize: fontSizes.medium,
    color: Colors.gray3 + '70',
    marginBottom: '50%',
  },
});

export default styles;
