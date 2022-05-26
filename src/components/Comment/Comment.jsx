import React from 'react';
import { View, Text } from 'react-native-ui-lib';

import Avatar from '../Avatar/Avatar';
import styles from './Comment.styles';

const Comment = ({ bottomContainer, comment }) => {
  return (
    <View style={[styles.bottomContainer, bottomContainer]}>
      <Avatar name="Filan Fisteku" size={45} />
      <View style={styles.commentContainer}>
        <Text style={[styles.commentName, { paddingLeft: 10 }]}>Filan Fisteku</Text>
        <Text style={styles.commentText}>{comment}</Text>
      </View>
    </View>
  );
};
export default Comment;
