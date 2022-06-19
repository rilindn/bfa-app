import React, { useState } from 'react';
import { View } from 'react-native';

import DetailedSearchForm from './../../components/DetailedSearch/DetailedSearchForm/DetailedSearchForm';
import DetailedSearchResult from './../../components/DetailedSearch/DetailedSearchResults/DetailedSearchResults';
import styles from './DetailedSearch.styles';

export default function DetailedSearch({ navigation }) {
  const [showResults, setShowResults] = useState(false);
  const [playersResult, setPlayerResults] = useState([]);

  return (
    <View style={styles.container}>
      {!showResults ? (
        <DetailedSearchForm
          playersResult={playersResult}
          setPlayerResults={setPlayerResults}
          setShowResults={setShowResults}
        />
      ) : (
        <DetailedSearchResult
          navigation={navigation}
          players={playersResult}
          getBack={() => setShowResults(false)}
        />
      )}
      <View />
    </View>
  );
}
