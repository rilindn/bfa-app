import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { getMyFollowers } from '../../../api/ApiMethods';
import SearchBar from '../../SearchBar/Searchbar';
import SingleFollow from '../SingleFollow/SingleFollow';
import styles from './Followers.styles';

export default function Followers({ user }) {
  const [loading, setLoading] = useState(false);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async () => {
    setLoading(true);
    try {
      const posts = await getMyFollowers(user.id);
      if (posts?.status === 200) {
        setFollowers(posts.data);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <SearchBar />
      <View>
        <>
          {followers?.map((follower) => (
            <SingleFollow
              type="followers"
              loggedUser={user}
              user={follower}
              key={follower.id}
              refetchFollows={fetchFollowers}
            />
          ))}
          {!loading && followers.length === 0 && (
            <View style={styles.noFollowContainer}>
              <Text style={styles.noFollowText}>No followers found</Text>
            </View>
          )}
        </>
      </View>
    </ScrollView>
  );
}
