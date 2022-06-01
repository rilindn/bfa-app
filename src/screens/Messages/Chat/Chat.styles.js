import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'space-between',
    width: '100%',
  },
  message: {
    backgroundColor: Colors.gray3,
    color: Colors.white,
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.small,
    padding: 10,
    borderRadius: 20,
  },
  time: {
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.small,
    color: Colors.gray3,
    marginLeft: 20,
  },
  timeSend: {
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.small,
    color: Colors.gray3,
    marginRight: 20,
  },
  subContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});

export default styles;
