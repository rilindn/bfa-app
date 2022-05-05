import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';

const styles = StyleSheet.create({
  container: {
    width: '94%',
    marginVertical: 20,
    backgroundColor: Colors.headerBg,
    borderRadius: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  postSomethingText: {
    color: Colors.light,
    fontSize: fontSizes.large,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray3 + '50',
    paddingVertical: 10,
    fontFamily: 'poppins-semibold',
  },
  dateContainer: {
    width: '85%',
    height: 45,
    justifyContent: 'center',
    marginLeft: 5,
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
  middleContainer: {
    width: '100%',
    marginVertical: 15,
  },
  description: {
    color: Colors.placeholder,
    fontFamily: 'poppins-regular',
    marginBottom: 10,
  },
  reactionContainer: {
    borderBottomColor: Colors.gray3 + '50',
    flexDirection: 'row',
    paddingVertical: 10,
    borderTopColor: Colors.gray3 + '50',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  reactText: {
    color: Colors.gray3 + '80',
    fontFamily: 'poppins-regular',
    paddingLeft: 7,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  commentContainer: {
    backgroundColor: Colors.gray4,
    width: '85%',
    borderRadius: 6,
    height: 45,
    justifyContent: 'center',
    marginLeft: 5,
  },
  commentText: {
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.extraSmall,
    color: Colors.gray3 + '80',
    paddingLeft: 10,
  },
  commentName: {
    color: Colors.white,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.default,
  },
  halfContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
