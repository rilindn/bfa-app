import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';

import { searchUsers } from '../../api/ApiMethods';
import Colors from '../../constants/Colors';
import Avatar from './../Avatar/Avatar';
import styles from './HeaderSearch.styles';

export default function HeaderSearch({}) {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (value) => {
    setLoading(true);
    setShowResults(true);
    if (value?.length > 1) {
      try {
        const users = await searchUsers(value);
        if (users?.status === 200) {
          setLoading(false);
          setResults(users.data);
        }
      } finally {
        setLoading(false);
      }
    } else setShowResults(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={Colors.gray3 + 60}
          selectionColor={Colors.green1}
          onChangeText={(val) => fetchUsers(val)}
        />
      </View>
      {showResults && (
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsText}>Results</Text>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : results.length === 0 ? (
            <Text style={styles.role}>No users found!</Text>
          ) : (
            results.map((result) => {
              return <Result user={result} key={result.id} />;
            })
          )}
        </View>
      )}
    </View>
  );
}

const Result = ({ user }) => {
  const fullName =
    user.role === 'Player'
      ? `${user.Player?.firstName} ${user.Player?.lastName}`
      : user.Club?.clubName;
  return (
    <TouchableOpacity style={styles.result} onPress={() => console.log('This is printed never')}>
      <Avatar size={40} name={fullName} image={user?.profilePic} />
      <View style={styles.userInfos}>
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.role}>{user.role}</Text>
      </View>
    </TouchableOpacity>
  );
};
