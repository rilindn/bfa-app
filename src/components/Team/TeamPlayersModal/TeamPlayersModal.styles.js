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
  modalView: {
    borderRadius: 20,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  search: {
    borderRadius: 6,
    borderWidth: 1,
    position: 'relative',
    backgroundColor: Colors.gray4,
    borderColor: Colors.gray3 + 80,
  },
  searchInput: {
    color: Colors.light,
    fontSize: fontSizes.medium,
    marginLeft: 10,
    height: 45,
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
    top: 9,
  },
  form: {
    paddingTop: 10,
  },
  singleRow: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  userDataContainer: {
    marginLeft: 10,
  },
  name: {
    color: Colors.light,
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
    includeFontPadding: false,
  },
  position: {
    color: Colors.placeholder,
    fontSize: fontSizes.medium,
    fontFamily: 'poppins-regular',
  },
});

export default styles;
