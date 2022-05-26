import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { checkIfLiked, getPostLikes, likePost, unlikePost } from '../../../api/ApiMethods';
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
  const { authData } = useAuth();
  const payload = {
    UserId: authData.id,
    PostId: post.id,
  };

  const fetchPostLikes = async () => {
    const likes = await getPostLikes(post.id);
    setLikes(likes);
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

  const checkIfLikedPost = async () => {
    const result = await checkIfLiked(payload);
    setLiked(!!result);
  };

  useEffect(() => {
    fetchPostLikes();
    checkIfLikedPost();
  }, [post]);

  const getLikesRepresentation = () => {
    return !liked
      ? likes.length
      : likes.length === 1
      ? `You`
      : `You and ${getMyS(likes.length - 1, 'other')}`;
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
          onPress={() => navigation.navigate('AllComments')}
          style={styles.halfContainer}>
          <SvgIcon name="comment" width={20} height={20} />
          <Text style={styles.reactText}>{getMyS(1, 'Comments')}</Text>
        </TouchableOpacity>
      </View>
      <PostLikesModal likes={likes} visible={likesModalVisible} setVisible={setLikesModalVisible} />
    </View>
  );
};

export default PostReactions;
