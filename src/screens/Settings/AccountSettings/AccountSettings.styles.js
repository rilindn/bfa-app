import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  categoryLabel: {
    fontSize: 20,
    color: Colors.light,
    fontWeight: 'bold',
    borderBottomColor: Colors.gray4,
    borderBottomWidth: 1,
    padding: 15,
  },
  settings: {
    padding: 15,
  },
  saveBtn: {
    marginTop: 15,
  },
});

export default styles;
