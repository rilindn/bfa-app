import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '90%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 15,
  },
  accountType: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
    marginTop: 15,
  },
  middleContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: Colors.green1 + '80',
    width: '90%',
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.green1,
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: Colors.green1 + '80',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerText: {
    fontSize: fontSizes.medium,
    fontFamily: 'poppins-semibold',
    paddingStart: 10,
  },
  selectCircle: {
    height: 20,
    width: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.mainGreen,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
  },
  clubCircle: {
    width: 50,
    height: 50,
    backgroundColor: Colors.orange + '15',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    width: '90%',
  },
});

export default styles;
