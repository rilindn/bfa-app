import React from 'react';
import { View, Text } from 'react-native-ui-lib';

import SuggestionCard from '../SuggestionCard/SuggestionCard';
import styles from './Suggestions.styles';

const Suggestions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.suggestedPlayers}>Suggested Players</Text>
      <Text style={styles.people}>People you might be interested in</Text>
      <SuggestionCard playerName="Rilind Nuha" />
    </View>
  );
};
export default Suggestions;
