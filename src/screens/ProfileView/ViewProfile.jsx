import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

import {
  createChat,
  follow,
  getMyFollowers,
  getMyFollowings,
  getMyPosts,
  getUserById,
  unFollow,
  verifyFollow,
} from '../../api/ApiMethods';
import ClubBottomSection from '../../components/ClubBottomSection/ClubBottomSection';
import Header from '../../components/Header/Header';
import PlayerBottomSection from '../../components/PlayerBottomSection/PlayerBottomSection';
import Post from '../../components/Post/Post';
import ClubCard from '../../components/ViewProfile/ClubCard/ClubCard';
import PlayerCard from '../../components/ViewProfile/PlayerCard/PlayerCard';
import Colors from '../../constants/Colors';
import useAuth from '../../hooks/useAuth';
import styles from './ViewProfile.styles';

export default function ViewProfile({ navigation, route }) {
  const [userData, setUserData] = useState();
  const [isFollow, setIsFollow] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [posts, setPosts] = useState([]);
  const { authData } = useAuth();
  const userId = route.params.id;
  const followerId = authData.id;

  const getUser = async () => {
    const user = await getUserById(userId);
    setUserData(user);
  };

  const handleFollow = async () => {
    await follow({ followerId, followedId: userId });
    await isFollowed();
  };

  const isFollowed = async () => {
    const checkIsFollow = await verifyFollow({ followerId, followedId: userId });
    setIsFollow(checkIsFollow);
  };

  const handleUnfollow = async () => {
    await unFollow({ followerId, followedId: userId });
    await isFollowed();
  };

  useEffect(async () => {
    fetchResources();
  }, [userId]);

  const fetchResources = async () => {
    const [followers, followings, posts] = await Promise.all([
      getMyFollowers(userId),
      getMyFollowings(userId),
      getMyPosts(userId),
      getUser(),
      isFollowed(),
    ]);
    setFollowers(followers.data);
    setFollowings(followings.data);
    setPosts(posts.data);
  };

  const newChatMessage = async () => {
    const payload = {
      firstUser: authData.id,
      secondUser: userData.id,
    };
    const result = await createChat(payload);
    result && navigation.navigate('Messages');
  };

  return (
    <View style={styles.container}>
      <Header />
      {!userData && !posts.length && (
        <ActivityIndicator
          size="large"
          color={Colors.green1}
          animating
          style={{ ...StyleSheet.absoluteFillObject }}
        />
      )}
      <FlatList
        ListHeaderComponent={
          <ListHeaderComponent
            navigation={navigation}
            user={userData}
            isFollow={isFollow}
            handleUnfollow={handleUnfollow}
            handleFollow={handleFollow}
            followers={followers}
            followings={followings}
            posts={posts}
            newChatMessage={newChatMessage}
          />
        }
        data={posts}
        renderItem={({ item }) => _renderitem({ item, navigation })}
      />
    </View>
  );
}

const ListHeaderComponent = ({ user, ...rest }) => {
  return (
    <View style={styles.listHeader}>
      {user &&
        (user.role === 'Player' ? (
          <>
            <PlayerCard user={user} {...rest} />
            <PlayerBottomSection user={user} />
          </>
        ) : (
          <>
            <ClubCard user={user} {...rest} />
            <ClubBottomSection user={user} />
          </>
        ))}
    </View>
  );
};

const _renderitem = ({ item, navigation }) => {
  return <Post key={item.id} post={item} navigation={navigation} />;
};
