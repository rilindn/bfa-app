import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { searchUsers } from '../../api/ApiMethods';
import Colors from '../../constants/Colors';
import UserSingleCard from '../Profile/UserSingleCard/UserSingleCard';
import useAuth from './../../hooks/useAuth';
import styles from './HeaderSearch.styles';

export default function HeaderSearch({}) {
  const { authData } = useAuth();
  const navigation = useNavigation();
  const searchInput = useRef();
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);

  const fetchUsers = async (searchQuery) => {
    setLoading(true);
    setShowResults(true);
    if (searchQuery?.length > 1) {
      try {
        const users = await searchUsers({ ids: [authData?.id], searchQuery, limit: 5 });
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
          ref={searchInput}
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={Colors.gray3 + 60}
          selectionColor={Colors.green1}
          onChangeText={(val) => fetchUsers(val)}
        />
        <FontAwesome style={styles.searchIcon} name="search" size={24} color={Colors.gray3 + 50} />
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
              return (
                <UserSingleCard
                  user={result}
                  key={result.id}
                  navigation={navigation}
                  dissmisResults={() => {
                    setShowResults(false);
                    searchInput.current.clear();
                  }}
                />
              );
            })
          )}
        </View>
      )}
    </View>
  );
}
