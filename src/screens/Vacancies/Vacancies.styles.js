import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: fontSizes.extraLarge,
    color: Colors.light,
    fontWeight: 'bold',
  },
  addVacancyBtn: {
    width: 'auto',
    padding: 10,
  },
  addVacancyBtnLabel: {
    fontSize: fontSizes.default,
  },
  text: {
    color: Colors.text,
  },
});

export default styles;
