import { AntDesign } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

import { deleteComment, getPostComments } from '../../api/ApiMethods';
import BottomMenu from '../../components/BottomMenu/BottomMenu';
import Comment from '../../components/Comment/Comment';
import WriteComment from '../../components/WriteComment/WriteComment';
import Colors from '../../constants/Colors';
import useAuth from './../../hooks/useAuth';
import styles from './AllComments.styles';

const Comments = ({ route }) => {
  const postId = route.params.id;
  const [comments, setComments] = useState([]);
  const [deleteOptionData, setDeleteOptionData] = useState({ state: false });
  const { authData } = useAuth();

  const fetchPostComments = async () => {
    const result = await getPostComments(postId);
    setComments(result);
  };

  const handleDeleteComment = async (commentId) => {
    await deleteComment(commentId);
    setDeleteOptionData({ state: false });
    setComments(comments.filter(({ id }) => id !== commentId));
  };

  useEffect(() => {
    fetchPostComments();
  }, [postId]);

  return (
    <View style={styles.container} contentContainerStyle={{}}>
      <FlatList
        style={styles.commentsContainer}
        data={comments}
        renderItem={({ item }) => _renderitem({ item, authData, setDeleteOptionData })}
        keyExtractor={(item, index) => index.toString()}
      />
      <WriteComment PostId={postId} setComments={setComments} />
      <BottomMenu
        visible={deleteOptionData?.state}
        dissmis={() => setDeleteOptionData({ state: false })}>
        <TouchableOpacity
          style={styles.deleteOption}
          onPress={() => handleDeleteComment(deleteOptionData?.id)}>
          <AntDesign name="delete" size={34} color={Colors.red + 90} />
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </BottomMenu>
    </View>
  );
};

const _renderitem = ({ item, authData, ...rest }) => {
  return <Comment item={item} {...rest} editable={item.UserId === authData.id} />;
};
export default Comments;
