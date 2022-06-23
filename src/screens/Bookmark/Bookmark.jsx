import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity } from 'react-native-ui-lib';

import { bookmark, getMyBookmarks, unBookmark } from '../../api/ApiMethods';
import SingleBookmark from '../../components/Bookmark/SingleBookmark/SingleBookmark';
import Post from '../../components/Post/Post';
import Colors from '../../constants/Colors';
import useAuth from '../../hooks/useAuth';
import styles from './Bookmark.styles';

export default function Bookmark({ navigation }) {
  const [playerBookmarks, setPlayerBookmarks] = useState([]);
  const [bookmarkedPost, setBookmarkedPost] = useState([]);
  const { authData } = useAuth();
  const isFocused = useIsFocused();
  const [selectedTab, setSelectedTab] = useState('players');

  const getPlayerBookmarks = async () => {
    const playerBookmarks = await getMyBookmarks(authData.id, { referenceType: 'Player' });
    setPlayerBookmarks(playerBookmarks.data);
  };

  const getPostBookmarks = async () => {
    const bookmarkedPost = await getMyBookmarks(authData.id, { referenceType: 'Post' });
    setBookmarkedPost(bookmarkedPost.data);
  };

  const handleUnBookmark = async (bookmarkId, type) => {
    const result = await unBookmark(bookmarkId);
    if (result.status === 200) {
      if (type === 'Post') setBookmarkedPost(bookmarkedPost.filter(({ id }) => id !== bookmarkId));
      else setPlayerBookmarks(playerBookmarks.filter(({ id }) => id !== bookmarkId));
    }
  };

  useEffect(() => {
    if (authData.role === 'Club') {
      getPlayerBookmarks();
    }
    getPostBookmarks();
  }, [isFocused]);

  return (
    <ScrollView style={styles.container}>
      {authData.role === 'Club' ? (
        <View style={styles.subContainer}>
          <TouchableOpacity onPress={() => setSelectedTab('players')} style={styles.tabContainer}>
            <Text
              style={[
                styles.tab,
                selectedTab === 'players' && {
                  borderBottomColor: Colors.orange,
                  color: Colors.orange,
                },
              ]}>
              Players
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedTab('posts')} style={styles.tabContainer}>
            <Text
              style={[
                styles.tab,
                selectedTab === 'posts' && {
                  borderBottomColor: Colors.orange,
                  color: Colors.orange,
                },
              ]}>
              Posts
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        bookmarkedPost?.map((bookmark) => (
          <Post
            key={bookmark.id}
            handleUnBookmark={() => handleUnBookmark(bookmark.id, 'Post')}
            post={bookmark.Post}
            navigation={navigation}
            isBookmark
          />
        ))
      )}
      {selectedTab === 'players' &&
        playerBookmarks?.map((bookmark) => (
          <SingleBookmark
            key={bookmark.id}
            data={bookmark}
            handleUnBookmark={() => handleUnBookmark(bookmark.id)}
          />
        ))}
      {selectedTab === 'posts' &&
        bookmarkedPost?.map((bookmark) => (
          <Post
            key={bookmark.id}
            handleUnBookmark={() => handleUnBookmark(bookmark.id, 'Post')}
            post={bookmark.Post}
            navigation={navigation}
            isBookmark
          />
        ))}
    </ScrollView>
  );
}
