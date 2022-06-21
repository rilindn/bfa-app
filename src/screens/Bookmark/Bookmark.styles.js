import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  tabContainer: {
    width: '45%',
  },
  tab: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
    color: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    color: Colors.text,
    fontWeight: 'bold',
  },
  text: {
    color: Colors.text,
  },
});

export default styles;
