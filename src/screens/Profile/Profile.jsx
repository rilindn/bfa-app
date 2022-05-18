import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { getMyFollowers, getMyFollowings, getMyPosts } from '../../api/ApiMethods';
import ClubBottomSection from '../../components/ClubBottomSection/ClubBottomSection';
import ClubProfileCard from '../../components/ClubProfileCard/ClubProfileCard';
import PlayerBottomSection from '../../components/PlayerBottomSection/PlayerBottomSection';
import PlayerProfileCard from '../../components/PlayerProfileCard/PlayerProfileCard';
import Post from '../../components/Post/Post';
import PostSomething from '../../components/Post/PostSomething/PostSomething';
import useAuth from '../../hooks/useAuth';
import styles from './Profile.styles';

export default function Profile({ navigation }) {
  const { authData } = useAuth();
  const [followers, setFollowers] = useState([]);
  const [followings, setFollowings] = useState([]);
  const [posts, setPosts] = useState([]);
  const isFocused = useIsFocused();

  useEffect(async () => {
    const id = authData.id;
    const [followers, followings, posts] = await Promise.all([
      getMyFollowers(id),
      getMyFollowings(id),
      getMyPosts(id),
    ]);
    setFollowers(followers.data);
    setFollowings(followings.data);
    setPosts(posts.data);
  }, [isFocused]);

  const refetchPosts = async () => {
    const posts = await getMyPosts(authData.id);
    setPosts(posts.data);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <ListHeaderComponent
            navigation={navigation}
            followers={followers}
            followings={followings}
            posts={posts}
          />
        }
        data={posts}
        renderItem={({ item }) => _renderitem({ refetchPosts, item, navigation })}
      />
    </View>
  );
}

const ListHeaderComponent = ({ navigation, followers, followings, posts }) => {
  const { authData } = useAuth();
  return (
    <View>
      {authData.role === 'Player' ? (
        <>
          <PlayerProfileCard
            navigation={navigation}
            followers={followers}
            followings={followings}
            posts={posts}
          />
          <PlayerBottomSection user={authData} />
        </>
      ) : (
        <>
          <ClubProfileCard
            navigation={navigation}
            followers={followers}
            followings={followings}
            posts={posts}
          />
          <ClubBottomSection user={authData} />
        </>
      )}
      <PostSomething />
    </View>
  );
};

const _renderitem = ({ refetchPosts, item, navigation }) => {
  return (
    <Post refetchPosts={refetchPosts} key={item.id} post={item} navigation={navigation} isOwnPost />
  );
};
