import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);

const styles = StyleSheet.create({
  label: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
    textAlignVertical: 'center',
    includeFontPadding: false,
  },
  button: {
    alignSelf: 'center',
    width: '90%',
    backgroundColor: Colors.mainGreen,
    borderRadius: 6,
    marginTop: 15,
    height: 45,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  image: {
    width: Dimensions.get('window').width,
    flex: 1,
    resizeMode: 'contain',
  },
  video: {
    width: Dimensions.get('window').width,
    height: '75%',
  },
  text: {
    color: Colors.white,
  },
  bottomButtonsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 28,
    right: 30,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  savePhotoContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 30,
    left: 0,
    right: 0,
    margin: 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  savePhotoButton: {
    borderRadius: Math.floor(CAPTURE_SIZE / 2),
    height: 50,
    width: '40%',
    backgroundColor: Colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  anotherPhotoButton: {
    borderRadius: Math.floor(CAPTURE_SIZE / 2),
    height: 50,
    width: '40%',
    backgroundColor: Colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  takeAnotherText: {
    fontSize: fontSizes.large,
  },
  capture: {
    backgroundColor: Colors.light,
    height: CAPTURE_SIZE,
    width: CAPTURE_SIZE,
    borderRadius: Math.floor(CAPTURE_SIZE / 2),
    marginLeft: 40,
  },
  closeButton: {
    position: 'absolute',
    top: 35,
    right: 20,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray4 + 80,
    opacity: 1,
  },
});
export default styles;
