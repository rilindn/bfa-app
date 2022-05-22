import React from 'react';
import { View, Text } from 'react-native-ui-lib';

import SuggestionCard from './SuggestionCard/SuggestionCard';
import styles from './Suggestions.styles';

const Suggestions = ({ users, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.suggestedPlayers}>Suggested Players</Text>
      <Text style={styles.people}>People you might be interested in</Text>
      {users?.map((user) => (
        <SuggestionCard key={user.id} user={user} navigation={navigation} />
      ))}
    </View>
  );
};
export default Suggestions;
