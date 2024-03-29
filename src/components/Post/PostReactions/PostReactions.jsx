import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { getPostLikes, likePost, unlikePost, getPostComments } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import getMyS from '../../../helpers/getMyS';
import Comment from '../../Comment/Comment';
import useAuth from './../../../hooks/useAuth';
import SvgIcon from './../../SvgIcon/SvgIcon';
import PostLikesModal from './PostLikesModal/PostLikesModal';
import styles from './PostReactions.styles';

const PostReactions = ({ post }) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [likesModalVisible, setLikesModalVisible] = useState(false);
  const [comments, setComments] = useState([]);

  const { authData } = useAuth();
  const payload = {
    UserId: authData.id,
    PostId: post.id,
  };

  const fetchPostLikes = async () => {
    const likesRes = await getPostLikes(post.id);
    const isLiked = likesRes.find(({ UserId }) => UserId === authData.id);
    setLiked(!!isLiked);
    setLikes(likesRes);
  };

  const fetchPostComments = async () => {
    const result = await getPostComments(post.id);
    setComments(result);
  };

  const reactToPost = async () => {
    if (!liked) {
      const result = await likePost(payload);
      setLiked(true);
      setLikes(result);
    } else {
      const result = await unlikePost(payload);
      setLiked(false);
      setLikes(result);
    }
  };

  useEffect(() => {
    fetchPostLikes();
    fetchPostComments();
  }, [post]);

  const getLikesRepresentation = () => {
    return !liked
      ? likes.length
      : likes.length === 1
      ? `You`
      : `You and ${getMyS({ value: likes.length - 1, string: 'other' })}`;
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.likeNumbersSection}
        onPress={() => setLikesModalVisible(!likesModalVisible)}>
        <AntDesign name="like1" size={12} color={Colors.green1} style={styles.roundLikeBtn} />
        <Text style={styles.likeNumbers}>{getLikesRepresentation()}</Text>
      </TouchableOpacity>
      <View style={styles.reactionContainer}>
        <TouchableOpacity onPress={reactToPost} style={styles.halfContainer}>
          <SvgIcon name="like" width={20} height={20} color={liked && Colors.orange} />
          <Text style={[styles.reactText, liked && styles.liked]}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AllComments', { id: post.id })}
          style={styles.halfContainer}>
          <SvgIcon name="comment" width={20} height={20} />
          <Text style={styles.reactText}>
            {getMyS({ value: comments.length, string: 'Comment' })}
          </Text>
        </TouchableOpacity>
      </View>
      <PostLikesModal likes={likes} visible={likesModalVisible} setVisible={setLikesModalVisible} />
      {comments?.length >= 1 && (
        <TouchableOpacity onPress={() => navigation.navigate('AllComments', { id: post.id })}>
          <Comment item={comments?.[0]} containerStyle={styles.latestCommentContainer} viewOnly />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PostReactions;
