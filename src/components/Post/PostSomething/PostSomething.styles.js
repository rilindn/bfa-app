import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  postSomethingWrapper: {
    width: '94%',
    marginVertical: 10,
    backgroundColor: Colors.headerBg,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  postSomething: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  postSomethingText: {
    color: Colors.light,
    fontSize: fontSizes.large,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray3 + '50',
    paddingVertical: 10,
    fontFamily: 'poppins-semibold',
  },
  postContainer: {
    backgroundColor: Colors.gray4,
    borderColor: Colors.gray3 + 50,
    width: '83%',
    borderWidth: 1,
    borderRadius: 6,
    height: 45,
    justifyContent: 'center',
  },
  postPlaceholder: {
    paddingLeft: 10,
    color: Colors.placeholder,
    fontFamily: 'poppins-regular',
    includeFontPadding: false,
    textAlignVertical: 'center',
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
  },
});

export default styles;
