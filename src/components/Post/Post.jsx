import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Image } from 'react-native-ui-lib';

import { getUserById } from '../../api/ApiMethods';
import SvgIcon from '../../components/SvgIcon/SvgIcon';
import { fontSizes } from '../../constants/Typography';
import useAuthContext from '../../hooks/useAuth';
import Avatar from '../Avatar/Avatar';
import styles from './Post.styles';

export default function Post({ post, navigation }) {
  const { authData } = useAuthContext();
  const [user, setUser] = useState();
  const [userFullName, setUserFullName] = useState();
  const [loading, setLoading] = useState(true);
  const media = post?.media;

  const formatedDate = () => {
    const date = post?.updatedAt;
    const today = moment().startOf('day');
    const createdDate = moment(date, 'YYYY-MM-DD').startOf('day');
    const diff = today.diff(createdDate, 'days');

    if (diff < 5) {
      return moment(date).fromNow();
    } else {
      return moment(date).format('DD MMM YYYY [at] HH:mm');
    }
  };

  const fetchUser = async () => {
    try {
      const user = await getUserById(post.UserId);
      if (user) {
        setUser(user);
        getUserFullName(user);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const getUserFullName = (user) => {
    console.log('first', user);
    if (user?.role === 'Player')
      setUserFullName(`${user.Player.firstName} ${user.Player.lastName}`);
    else setUserFullName(user?.Club?.clubName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {!loading && (
          <Avatar
            name={userFullName}
            size={50}
            initialStyle={{ fontSize: fontSizes.large }}
            image={user?.profilePic}
          />
        )}
        <View style={styles.dateContainer}>
          <Text style={styles.name}>{userFullName}</Text>
          <Text style={styles.date}>{formatedDate()}</Text>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.description}>{post?.content}</Text>
        {media && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('PhotoView', {
                photo: media,
              })
            }>
            <Image
              source={{
                uri: media,
              }}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.reactionContainer}>
        <View style={styles.halfContainer}>
          <SvgIcon name="like" width={20} height={20} />
          <Text style={styles.reactText}>2 Likes</Text>
        </View>
        <View style={styles.halfContainer}>
          <SvgIcon name="comment" width={20} height={20} />
          <Text style={styles.reactText}>1 Post</Text>
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
}
