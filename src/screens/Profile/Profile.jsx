import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import ClubBottomSection from '../../components/ClubBottomSection/ClubBottomSection';
import ClubProfileCard from '../../components/ClubProfileCard/ClubProfileCard';
import PlayerBottomSection from '../../components/PlayerBottomSection/PlayerBottomSection';
import PlayerProfileCard from '../../components/PlayerProfileCard/PlayerProfileCard';
import PostSomething from '../../components/Post/PostSomething/PostSomething';
import useAuth from '../../hooks/useAuth';
import styles from './Profile.styles';

export default function Profile({ navigation }) {
  const { authData } = useAuth();

  return (
    <ScrollView style={styles.container}>
      {authData.role === 'Player' ? (
        <>
          <PlayerProfileCard navigation={navigation} />
          <PlayerBottomSection />
          <PostSomething
            name={`${authData.Player.firstName} ${authData.Player.lastName}`}
            image={authData.profilePic}
          />
        </>
      ) : (
        <>
          <ClubProfileCard navigation={navigation} />
          <ClubBottomSection />
          <PostSomething name={authData.Club.clubName} />
        </>
      )}
    </ScrollView>
  );
}
