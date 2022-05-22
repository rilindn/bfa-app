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
  const id = authData.id;

  useEffect(() => {
    fetchResources();
  }, [isFocused]);

  const fetchResources = async () => {
    const [followers, followings, posts] = await Promise.all([
      getMyFollowers(id),
      getMyFollowings(id),
      getMyPosts(id),
    ]);
    setFollowers(followers.data);
    setFollowings(followings.data);
    setPosts(posts.data);
  };

  const refetchPosts = async () => {
    const posts = await getMyPosts(id);
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
        initialNumToRender={10}
        data={posts}
        renderItem={({ item }) => _renderitem({ refetchPosts, item, navigation })}
      />
    </View>
  );
}

const ListHeaderComponent = ({ ...rest }) => {
  const { authData } = useAuth();
  return (
    <View>
      {authData.role === 'Player' ? (
        <>
          <PlayerProfileCard {...rest} />
          <PlayerBottomSection user={authData} />
        </>
      ) : (
        <>
          <ClubProfileCard {...rest} />
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
