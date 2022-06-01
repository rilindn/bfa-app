import React from 'react';
import { View, Text } from 'react-native-ui-lib';

import getFullName from '../../helpers/extractFullname';
import Avatar from '../Avatar/Avatar';
import styles from './Comment.styles';

const Comment = ({ bottomContainer, item }) => {
  const fullName = getFullName(item?.User);
  return (
    <View style={[styles.bottomContainer, bottomContainer]}>
      <Avatar name={fullName} size={45} />
      <View style={styles.commentContainer}>
        <Text style={[styles.commentName, { paddingLeft: 10 }]}>{fullName}</Text>
        <Text style={styles.commentText}>{item?.content}</Text>
      </View>
    </View>
  );
};
export default Comment;
