import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import { getPostComments } from '../../api/ApiMethods';
import Comment from '../../components/Comment/Comment';
import WriteComment from '../../components/WriteComment/WriteComment';
import styles from './AllComments.styles';

const Comments = ({ route }) => {
  const postId = route.params.id;
  const [comments, setComments] = useState([]);

  const fetchPostComments = async () => {
    const result = await getPostComments(postId);
    setComments(result);
  };

  useEffect(() => {
    fetchPostComments();
  }, [postId]);

  return (
    <View style={styles.container} contentContainerStyle={{}}>
      <FlatList
        style={styles.commentsContainer}
        data={comments}
        renderItem={({ item }) => _renderitem({ item })}
        keyExtractor={(item, index) => index.toString()}
      />
      <WriteComment PostId={postId} fetchPostComments={fetchPostComments} />
    </View>
  );
};

const _renderitem = ({ item }) => {
  return <Comment item={item} />;
};
export default Comments;
