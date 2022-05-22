import { StyleSheet, StatusBar } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: Colors.background,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray3 + '50',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 7,
  },
});
export default styles;
