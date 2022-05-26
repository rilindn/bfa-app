import { StyleSheet } from 'react-native';

import Colors from '../../../../constants/Colors';
import { fontSizes } from '../../../../constants/Typography';

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.headerBg,
    borderRadius: 15,
    alignSelf: 'center',
    paddingHorizontal: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.gray3,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 14,
    marginBottom: 10,
  },
  arrowBack: {
    width: 40,
    fontSize: 15,
    display: 'flex',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.title,
    includeFontPadding: false,
    textAlignVertical: 'center',
    marginLeft: 10,
    color: Colors.light,
  },
  singlecard: {
    backgroundColor: Colors.gray4 + 90,
  },
});

export default styles;
