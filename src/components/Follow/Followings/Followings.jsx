import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';

import { getMyFollowings } from '../../../api/ApiMethods';
import SingleFollow from '../SingleFollow/SingleFollow';
import styles from './Followings.styles';

export default function Followers({ user }) {
  const [loading, setLoading] = useState(false);
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    fetchFollowings();
  }, []);

  const fetchFollowings = async (query) => {
    setLoading(true);
    try {
      const posts = await getMyFollowings(user.id, query);
      if (posts?.status === 200) {
        setFollowings(posts.data);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Searchbar placeholder="Search" onChangeText={(val) => fetchFollowings(val)} />
      <View>
        <>
          {followings?.map((follow) => (
            <SingleFollow
              type="followings"
              loggedUser={user}
              user={follow}
              key={follow?.id}
              refetchFollows={fetchFollowings}
            />
          ))}
          {!loading && followings.length === 0 && (
            <View style={styles.noFollowContainer}>
              <Text style={styles.noFollowText}>No followings found</Text>
            </View>
          )}
        </>
      </View>
    </ScrollView>
  );
}
