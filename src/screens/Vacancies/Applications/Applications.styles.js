import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  modalView: {
    borderRadius: 20,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.large,
    color: Colors.light,
  },
  modalContainer: {
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
  msgText: {
    color: Colors.light,
    fontSize: fontSizes.medium,
    fontFamily: 'poppins-regular',
    padding: 5,
  },
  buttonsModal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageBtn: {
    width: '49%',
  },
  declineMsgBtn: {
    width: '49%',
    backgroundColor: 'transparent',
    borderColor: Colors.gray4,
    borderWidth: 1,
  },
  headerText: {
    color: Colors.light,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.title,
  },
  singleItemContainer: {
    padding: 15,
    borderColor: Colors.gray4,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 5,
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
    // width: '70%',
    height: 45,
    justifyContent: 'center',
    marginLeft: 10,
  },
  applicationUser: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
  },
  statusContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  status: {
    color: Colors.light,
    fontSize: fontSizes.large,
    marginRight: 4,
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
  content: {
    // paddingHorizontal: 10,
    marginBottom: 10,
  },
  description: {
    color: Colors.light,
    fontFamily: 'poppins-medium',
  },
  descriptionLabel: {
    fontFamily: 'poppins-regular',
    color: Colors.placeholder,
  },
  acceptBtn: {
    width: '49%',
    height: 40,
  },
  rejectBtn: {
    width: '49%',
    height: 40,
    backgroundColor: 'rgba(352, 102, 52, 0.9)',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
