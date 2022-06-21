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
  const [bookmarks, setBookmarks] = useState([]);
  const [bookmarkedPost, setBookmarkedPost] = useState([]);
  const { authData } = useAuth();
  const isFocused = useIsFocused();
  const [selectedTab, setSelectedTab] = useState('players');

  const getBookmarks = async () => {
    const bookmarks = await getMyBookmarks(authData.id, { referenceType: 'Player' });
    setBookmarks(bookmarks.data);
    console.log('bookmarkedPost', bookmarks.data);
    console.log('authData', authData);
  };

  const getPostBookmarks = async () => {
    const bookmarkedPost = await getMyBookmarks(authData.id, { referenceType: 'Post' });
    setBookmarkedPost(bookmarkedPost.data);
    console.log('bookmarkedPost', bookmarkedPost.data);
  };

  const handleUnBookmark = async (bookmarkId, type) => {
    const result = await unBookmark(bookmarkId);
    if (result.status === 200) {
      if (type === 'Post') setBookmarkedPost(bookmarkedPost.filter(({ id }) => id !== bookmarkId));
      else setBookmarks(bookmarks.filter(({ id }) => id !== bookmarkId));
    }
  };

  useEffect(() => {
    getBookmarks();
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
        bookmarks?.map((bookmark) => (
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
