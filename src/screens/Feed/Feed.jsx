import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { loggedUser } from '../../api/ApiMethods';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import PostSomething from '../../components/PostSomething/PostSomething';
import useAuthContext from './../../hooks/useAuth';
import styles from './Feed.styles';

export default function Feed() {
  const [user, setUser] = useState({});
  const { authData } = useAuthContext();

  useEffect(async () => {
    const result = await loggedUser();
    setUser(result.data);
  }, []);
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <PostSomething name={`${authData.Player.firstName} ${authData.Player.lastName}`} />
        <Post />
      </ScrollView>
    </>
  );
}
