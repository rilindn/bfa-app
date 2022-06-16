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
  saveBtn: {
    marginTop: 10,
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
