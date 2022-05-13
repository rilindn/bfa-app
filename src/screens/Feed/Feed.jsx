import { useEffect, useState, useRef } from 'react';
import { RefreshControl, FlatList, Text, View } from 'react-native';

import { getAllPosts } from '../../api/ApiMethods';
import Post from '../../components/Post/Post';
import PostSomething from '../../components/Post/PostSomething/PostSomething';
import Colors from '../../constants/Colors';
import styles from './Feed.styles';

export default function Feed({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  const flatListRef = useRef();

  const scrollToTop = () => {
    navigation.addListener('tabPress', () => {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    });
  };

  useEffect(() => {
    fetchPosts();
    scrollToTop();
  }, []);

  const fetchPosts = async () => {
    setRefreshing(true);
    try {
      const posts = await getAllPosts();
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
        ref={flatListRef}
        ListHeaderComponent={<PostSomething />}
        data={posts}
        renderItem={({ item }) => _renderitem({ item, navigation })}
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
const _renderitem = ({ item, navigation }) => {
  return <Post key={item.id} post={item} navigation={navigation} />;
};
