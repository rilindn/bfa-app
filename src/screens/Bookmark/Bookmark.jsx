import { useIsFocused } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { getMyBookmarks } from '../../api/ApiMethods';
import SingleBookmark from '../../components/Bookmark/SingleBookmark/SingleBookmark';
import useAuth from '../../hooks/useAuth';
import styles from './Bookmark.styles';

export default function Bookmark() {
  const [bookmarks, setBookmarks] = useState([]);
  const { authData } = useAuth();
  const isFocused = useIsFocused();

  const getBookmarks = async () => {
    const bookmarks = await getMyBookmarks(authData.id);
    setBookmarks(bookmarks.data);
  };

  useEffect(() => {
    getBookmarks();
  }, [isFocused]);

  return (
    <ScrollView style={styles.container}>
      {bookmarks?.map((bookmark) => (
        <SingleBookmark
          key={bookmark.id}
          data={bookmark}
          bookmarks={bookmarks}
          setBookmarks={setBookmarks}
        />
      ))}
    </ScrollView>
  );
}
