import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.headerBg,
    padding: 5,
    marginVertical: 10,
  },
  suggestedPlayers: {
    color: Colors.white,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.large,
    marginTop: 10,
  },
  people: {
    fontFamily: 'poppins-regular',
    color: Colors.gray3 + '60',
  },
});
export default styles;
