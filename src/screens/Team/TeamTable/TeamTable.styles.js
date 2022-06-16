import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  tableCellValue: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: Colors.white,
  },
  player: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
