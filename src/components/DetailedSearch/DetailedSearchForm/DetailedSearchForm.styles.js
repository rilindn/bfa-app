import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: 'center',
  },
  genInfo: {
    width: '90%',
  },
  changeInfo: {
    marginTop: 20,
    color: Colors.light,
    fontSize: fontSizes.large,
    fontFamily: 'poppins-bold',
  },
  buttonsContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    paddingBottom: 25,
  },
  inputsContainer: {
    width: '90%',
    marginTop: 20,
  },
});

export default styles;
