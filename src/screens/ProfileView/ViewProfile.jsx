import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { getUserById } from '../../api/ApiMethods';
import ClubBottomSection from '../../components/ClubBottomSection/ClubBottomSection';
import Header from '../../components/Header/Header';
import PlayerBottomSection from '../../components/PlayerBottomSection/PlayerBottomSection';
import ClubCard from '../../components/ViewProfile/ClubCard/ClubCard';
import PlayerCard from '../../components/ViewProfile/PlayerCard/PlayerCard';
import styles from './ViewProfile.styles';

export default function ViewProfile({ navigation, route }) {
  const [userData, setUserData] = useState();
  const userId = route.params.id;

  const getUser = async () => {
    const fetchUSer = await getUserById(userId);
    setUserData(fetchUSer);
  };

  useEffect(() => {
    getUser();
  }, [userId]);

  return (
    <>
      <Header />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        {userData &&
          (userData.role === 'Player' ? (
            <>
              <PlayerCard navigation={navigation} user={userData} />
              <PlayerBottomSection user={userData} />
            </>
          ) : (
            <>
              <ClubCard navigation={navigation} user={userData} />
              <ClubBottomSection user={userData} />
            </>
          ))}
      </ScrollView>
    </>
  );
}
