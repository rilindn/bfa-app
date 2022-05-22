import React from 'react';
import { View, Text } from 'react-native-ui-lib';

import SuggestionCard from './SuggestionCard/SuggestionCard';
import styles from './Suggestions.styles';

const Suggestions = ({ items, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.suggestedPlayers}>Suggested Players</Text>
      <Text style={styles.people}>People you might be interested in</Text>
      {items?.map((user) => (
        <SuggestionCard key={user.id} user={user} navigation={navigation} />
      ))}
    </View>
  );
};
export default Suggestions;
