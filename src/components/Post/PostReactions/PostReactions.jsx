import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { checkIfLiked, getPostLikes, likePost, unlikePost } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import getMyS from '../../../helpers/getMyS';
import Avatar from '../../Avatar/Avatar';
import useAuth from './../../../hooks/useAuth';
import SvgIcon from './../../SvgIcon/SvgIcon';
import styles from './PostReactions.styles';

const PostReactions = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState([]);
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
    console.info('firssdft', result);
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
      <View style={styles.likeNumbersSection}>
        <AntDesign name="like1" size={12} color={Colors.green1} style={styles.roundLikeBtn} />
        <Text style={styles.likeNumbers}>{getLikesRepresentation()}</Text>
      </View>
      <View style={styles.reactionContainer}>
        <TouchableOpacity onPress={reactToPost} style={styles.halfContainer}>
          <SvgIcon name="like" width={20} height={20} color={liked && Colors.orange} />
          <Text style={[styles.reactText, liked && styles.liked]}>Like</Text>
        </TouchableOpacity>
        <View style={styles.halfContainer}>
          <SvgIcon name="comment" width={20} height={20} />
          <Text style={styles.reactText}>{getMyS(1, 'Comment')}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Avatar name="Filan Fisteku" size={45} />
        <View style={styles.commentContainer}>
          <Text style={[styles.commentName, { paddingLeft: 10 }]}>Filan Fisteku</Text>
          <Text style={styles.commentText}>Awesome!</Text>
        </View>
      </View>
    </View>
  );
};

export default PostReactions;
