import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

import Colors from '../../constants/Colors';
import getFullName from '../../helpers/extractFullname';
import Avatar from '../Avatar/Avatar';
import formatDate from './../../helpers/formatDate';
import styles from './Comment.styles';
const Comment = ({ containerStyle, item, setDeleteOptionData, editable }) => {
  const fullName = getFullName(item?.User);

  return (
    <View>
      <TouchableOpacity
        onLongPress={() => editable && setDeleteOptionData({ state: true, id: item.id })}
        style={[styles.container, containerStyle]}>
        <Avatar name={fullName} size={45} />
        <View style={styles.commentContainer}>
          <View style={styles.dataContainer}>
            <Text style={styles.commentName}>{fullName}</Text>
            <Text style={styles.commentDate}>{formatDate(item?.createdAt)}</Text>
          </View>
          <Text style={styles.commentText}>{item?.content}</Text>
        </View>
      </TouchableOpacity>
      <Divider />
    </View>
  );
};
export default Comment;
