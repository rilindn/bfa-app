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
  chat: {
    marginTop: 20,
  },
});

export default styles;
