import { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import { getMyPosts } from '../../api/ApiMethods';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import PostSomething from '../../components/Post/PostSomething/PostSomething';
import Colors from '../../constants/Colors';
import useAuthContext from './../../hooks/useAuth';
import styles from './Feed.styles';

export default function Feed({ navigation }) {
  const { authData, loading } = useAuthContext();
  const [posts, setPosts] = useState();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setRefreshing(true);
    const posts = await getMyPosts(authData.id);
    posts && setRefreshing(false);
    setPosts(posts);
  };

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            enabled
            colors={[Colors.mainGreen]}
            onRefresh={fetchPosts}
          />
        }>
        {!loading && (
          <>
            <PostSomething />
            {posts?.length > 1 ? (
              posts?.map((post) => {
                return <Post key={post.id} post={post} navigation={navigation} />;
              })
            ) : (
              <View style={styles.noPostContainer}>
                <Text style={styles.noPostText}>No posts found</Text>
              </View>
            )}
          </>
        )}
      </ScrollView>
    </>
  );
}
