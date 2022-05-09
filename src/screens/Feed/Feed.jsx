import { useEffect, useState } from 'react';
import { RefreshControl, FlatList, ScrollView, Text, View } from 'react-native';

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
      <View style={styles.container}>
        {posts ? (
          <FlatList
            ListHeaderComponent={<PostSomething />}
            data={posts}
            renderItem={({ item }) => {
              return <Post key={item.id} post={item} navigation={navigation} />;
            }}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                colors={[Colors.mainGreen]}
                onRefresh={fetchPosts}
              />
            }
          />
        ) : (
          <View style={styles.noPostContainer}>
            <Text style={styles.noPostText}>No posts found</Text>
          </View>
        )}
      </View>
    </>
  );
}
