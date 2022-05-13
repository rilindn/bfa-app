import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import ClubBottomSection from '../../components/ClubBottomSection/ClubBottomSection';
import PlayerBottomSection from '../../components/PlayerBottomSection/PlayerBottomSection';
import ClubCard from '../../components/ViewProfile/ClubCard/ClubCard';
import PlayerCard from '../../components/ViewProfile/PlayerCard/PlayerCard';
import useAuth from '../../hooks/useAuth';
import styles from './ViewProfile.styles';

export default function Profile({ navigation }) {
  const { authData } = useAuth();

  return (
    <ScrollView style={styles.container}>
      {authData.role === 'Player' ? (
        <>
          <PlayerCard navigation={navigation} />
          <PlayerBottomSection />
        </>
      ) : (
        <>
          <ClubCard navigation={navigation} />
          <ClubBottomSection />
        </>
      )}
    </ScrollView>
  );
}
