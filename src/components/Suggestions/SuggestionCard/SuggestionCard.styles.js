import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    width: '90%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.gray3 + '50',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    marginVertical: 25,
  },
  button: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: Colors.mainGreen,
    borderRadius: 6,
    height: 45,
  },
  followBtn: {
    width: 200,
    backgroundColor: Colors.orange,
  },
  fullname: {
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.large,
    color: Colors.white,
    padding: 10,
  },
  avatarContainer: {
    marginTop: -40,
  },
});
export default styles;
