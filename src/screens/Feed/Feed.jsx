import { useEffect, useState } from 'react';
import { RefreshControl, FlatList, Text, View } from 'react-native';

import { getMyPosts } from '../../api/ApiMethods';
import Post from '../../components/Post/Post';
import PostSomething from '../../components/Post/PostSomething/PostSomething';
import Colors from '../../constants/Colors';
import useAuthContext from './../../hooks/useAuth';
import styles from './Feed.styles';

export default function Feed({ navigation }) {
  const { authData } = useAuthContext();
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setRefreshing(true);
    try {
      const posts = await getMyPosts(authData.id);
      if (posts?.status === 200) {
        setPosts(posts.data);
        setRefreshing(false);
      }
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View style={styles.container}>
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
      {!refreshing && posts.length === 0 && (
        <View style={styles.noPostContainer}>
          <Text style={styles.noPostText}>No posts found</Text>
        </View>
      )}
    </View>
  );
}
