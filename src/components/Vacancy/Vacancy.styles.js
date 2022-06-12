import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    width: '94%',
    marginVertical: 8,
    backgroundColor: Colors.headerBg,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  userDataContainer: {
    flexDirection: 'row',
  },
  dateContainer: {
    height: 45,
    justifyContent: 'center',
    marginLeft: 10,
  },
  postSomethingText: {
    color: Colors.light,
    fontSize: fontSizes.large,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray3 + '50',
    paddingVertical: 10,
    fontFamily: 'poppins-semibold',
  },
  name: {
    color: Colors.white,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.large,
  },
  date: {
    color: Colors.gray3 + '80',
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.extraSmall,
  },
  applyBtn: {
    marginTop: 20,
  },
  appliedBtn: {
    marginTop: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.gray3,
  },
  applicantsContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
  },
  applicantsText: {
    color: Colors.light,
    fontFamily: 'poppins-semibold',
    includeFontPadding: false,
    textAlignVertical: 'center',
    paddingLeft: 10,
  },
});

export default styles;
