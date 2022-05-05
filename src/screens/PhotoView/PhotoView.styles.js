import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.black,
  },
  previewContainer: {
    ...StyleSheet.absoluteFillObject,
    bottom: 0,
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
    zIndex: 10,
  },
  photo: {
    width: Dimensions.get('window').width,
    flex: 1,
    resizeMode: 'contain',
  },
});
export default styles;
