import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.headerBg,
    borderRadius: 15,
    alignSelf: 'center',
    padding: 10,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray4,
  },
  headerText: {
    color: Colors.light,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.title,
  },
  userDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  userName: {
    color: Colors.light,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.large,
    marginLeft: 10,
  },
  uploadText: {
    color: Colors.gray3,
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.small,
    textAlign: 'center',
    includeFontPadding: false,
    textAlignVertical: 'center',
    marginLeft: 10,
  },
  uploadMedia: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
    flexWrap: 'wrap',
  },
  input: {
    height: 100,
  },
  uploadMediaOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 170,
    borderColor: Colors.gray3,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 5,
    padding: 7,
    margin: 5,
  },
  media: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
  },
  mediaPreview: {
    position: 'relative',
  },
  removePreview: {
    position: 'absolute',
    zIndex: 10,
    left: 100,
    top: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  modalView: {
    borderRadius: 20,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
});

export default styles;
