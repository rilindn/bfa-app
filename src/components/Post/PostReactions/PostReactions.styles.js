import { StyleSheet } from 'react-native';

import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';

const styles = StyleSheet.create({
  reactionContainer: {
    borderBottomColor: Colors.gray3 + '50',
    flexDirection: 'row',
    borderTopColor: Colors.gray3 + '50',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  likeNumbersSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 6,
  },
  likeNumbers: {
    color: Colors.gray3 + 70,
    fontFamily: 'poppins-regular',
    fontSize: fontSizes.default,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  roundLikeBtn: {
    backgroundColor: Colors.mainGreen,
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 5,
    marginRight: 4,
  },
  reactText: {
    color: Colors.gray3 + '80',
    fontFamily: 'poppins-regular',
    paddingLeft: 7,
    includeFontPadding: false,
    fontSize: fontSizes.medium,
    textAlignVertical: 'center',
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
    paddingVertical: 10,
    alignItems: 'center',
  },
  liked: {
    color: Colors.orange,
  },
  latestCommentContainer: {
    backgroundColor: Colors.gray3 + 20,
    borderRadius: 10,
    marginBottom: 10,
    padding: 8,
  },
});

export default styles;
