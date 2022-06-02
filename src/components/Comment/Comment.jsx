import React, { useState } from 'react';
import { Divider } from 'react-native-paper';
import { View, Text } from 'react-native-ui-lib';
import { TouchableOpacity } from 'react-native';
import getFullName from '../../helpers/extractFullname';
import Avatar from '../Avatar/Avatar';
import styles from './Comment.styles';
import useAuth from '../../hooks/useAuth';
const Comment = ({ containerStyle, item, handleDeleteComment }) => {
  const fullName = getFullName(item?.User);
  const { authData } = useAuth();
  const [modalvisible, setModalVisible] = useState(false);

  const deleteSubmit = async () => {
    await handleDeleteComment(item.id);
    setModalVisible(false);
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(!modalvisible)}
        style={[styles.container, containerStyle]}>
        <Avatar name={fullName} size={45} />
        <View style={styles.commentContainer}>
          <Text style={[styles.commentName, { paddingLeft: 10 }]}>{fullName}</Text>
          <Text style={styles.commentText}>{item?.content}</Text>
        </View>
      </TouchableOpacity>

      <Divider />
      {modalvisible && authData.id === item.UserId && (
        <TouchableOpacity onPress={() => deleteSubmit()} style={styles.deleteContainer}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      )}
    </>
  );
};
export default Comment;
