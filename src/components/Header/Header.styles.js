import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: Colors.background,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray3 + '50',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
