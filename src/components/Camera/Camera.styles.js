import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';

const WINDOW_HEIGHT = Dimensions.get('window').height;
const CAPTURE_SIZE = Math.floor(WINDOW_HEIGHT * 0.08);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  cameraContainer: {
    height: '65%',
  },
  previewContainer: {
    ...StyleSheet.absoluteFillObject,
    bottom: 0,
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
    bottom: 30,
    left: 0,
    right: 0,
    margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  savePhotoButton: {
    borderRadius: Math.floor(CAPTURE_SIZE / 2),
    height: CAPTURE_SIZE,
    width: CAPTURE_SIZE,
    backgroundColor: Colors.light,
    justifyContent: 'center',
    alignItems: 'center',
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
