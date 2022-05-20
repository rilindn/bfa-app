import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';

import { getMyFollowers } from '../../../api/ApiMethods';
import SingleFollow from '../SingleFollow/SingleFollow';
import styles from './Followers.styles';

export default function Followers({ user }) {
  const [loading, setLoading] = useState(false);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchFollowers();
  }, []);

  const fetchFollowers = async (query) => {
    setLoading(true);
    try {
      const posts = await getMyFollowers(user.id, query);
      if (posts?.status === 200) {
        setFollowers(posts.data);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Searchbar placeholder="Search" onChangeText={(val) => fetchFollowers(val)} />
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
          {!loading && followers?.length === 0 && (
            <View style={styles.noFollowContainer}>
              <Text style={styles.noFollowText}>No followers found</Text>
            </View>
          )}
        </>
      </View>
    </ScrollView>
  );
}
