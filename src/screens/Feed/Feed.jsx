import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState, useRef } from 'react';
import { RefreshControl, FlatList, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';

import {
  getActiveAds,
  getMyFollowingsPosts,
  getMyFollowingsVacancies,
  getSuggestions,
} from '../../api/ApiMethods';
import Post from '../../components/Post/Post';
import PostSomething from '../../components/Post/PostSomething/PostSomething';
import Suggestions from '../../components/Suggestions/Suggestions';
import Vacancy from '../../components/Vacancy/Vacancy';
import Colors from '../../constants/Colors';
import Ad from './../../components/Ad/Ad';
import useAuth from './../../hooks/useAuth';
import styles from './Feed.styles';

export default function Feed({ navigation }) {
  const [refreshing, setRefreshing] = useState(true);
  const [content, setContent] = useState([]);
  const [suggestionUsers, setSuggestions] = useState([]);
  const flatListRef = useRef();
  const { authData } = useAuth();
  const isFocused = useIsFocused();

  const userId = authData.id;

  const scrollToTop = () => {
    navigation.addListener('tabPress', () => {
      flatListRef?.current?.scrollToOffset({ animated: true, offset: 0 });
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    composeFeedContent();
  }, [isFocused]);

  const composeFeedContent = async () => {
    let [suggestions, posts, clubVacancies, ads] = await Promise.all([
      fetchSuggestions(),
      fetchPosts(),
      fetchVacancies(),
      fetchAds(),
    ]);
    setSuggestions(suggestions);

    if (authData.role === 'Player' && clubVacancies?.length) {
      if (!posts?.length) return (posts = clubVacancies);
      for (let i = 4, k = 0; i < posts.length && k < clubVacancies?.length; i += 4, k++) {
        posts?.splice(i, 0, { type: 'vacancy', data: clubVacancies[k] });
      }
    }

    if (ads?.length) {
      for (let i = 15, k = 0; i < posts.length && k < ads?.length; i += 15, k++) {
        posts?.splice(i, 0, { type: 'ad', data: ads[k] });
      }
    }

    if (posts.length > 10 && suggestions?.length >= 2) {
      const limit = Math.floor((posts.length / 10) * 2);
      for (let i = 0, k = 1; i < limit; i += 2, k++) {
        const firstSugg = suggestions[i];
        const secondSugg = suggestions[i + 1];
        const insertIndex = 10 * k;
        posts?.splice(insertIndex, 0, { type: 'suggestions', data: [firstSugg, secondSugg] });
      }
    }
    setContent(posts);
  };

  const fetchSuggestions = async () => {
    const suggestions = await getSuggestions({ userId });
    return suggestions;
  };

  const fetchVacancies = async () => {
    const vacanciesRes = await getMyFollowingsVacancies(authData.id);
    return vacanciesRes?.data;
  };

  const fetchAds = async () => {
    const adsRes = await getActiveAds();
    return adsRes?.data;
  };

  const fetchPosts = async () => {
    setRefreshing(true);
    try {
      const postsResult = await getMyFollowingsPosts(authData.id);
      if (postsResult?.status === 200) {
        setRefreshing(false);
        return postsResult?.data;
      }
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        ListHeaderComponent={<ListHeaderComponent />}
        data={content}
        renderItem={({ item, index }) => _renderitem({ item, index, navigation, suggestionUsers })}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            colors={[Colors.mainGreen]}
            onRefresh={composeFeedContent}
          />
        }
        keyExtractor={(item, index) => index.toString()}
      />
      {!refreshing && content?.length === 0 && (
        <View style={styles.noPostContainer}>
          <Text style={styles.noPostText}>No posts found</Text>
        </View>
      )}
    </View>
  );
}
const _renderitem = ({ item, index, navigation, suggestionUsers }) => {
  if (item?.type === 'vacancy') {
    return <Vacancy vacancy={item.data} showUser applicable />;
  }
  if (item?.type === 'ad') {
    return <Ad ad={item.data} />;
  }
  if (item?.type === 'suggestions') {
    return <Suggestions users={item.data} navigation={navigation} />;
  }
  return <Post post={item} navigation={navigation} isOnFeed />;
};

const ListHeaderComponent = () => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <PostSomething />
    <Divider style={{ width: '80%' }} />
  </View>
);
