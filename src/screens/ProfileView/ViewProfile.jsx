import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { follow, getUserById, unFollow, verifyFollow } from '../../api/ApiMethods';
import ClubBottomSection from '../../components/ClubBottomSection/ClubBottomSection';
import Header from '../../components/Header/Header';
import PlayerBottomSection from '../../components/PlayerBottomSection/PlayerBottomSection';
import ClubCard from '../../components/ViewProfile/ClubCard/ClubCard';
import PlayerCard from '../../components/ViewProfile/PlayerCard/PlayerCard';
import useAuth from '../../hooks/useAuth';
import styles from './ViewProfile.styles';

export default function ViewProfile({ navigation, route }) {
  const [userData, setUserData] = useState();
  const userId = route.params.id;
  const { authData } = useAuth();
  const [isFollow, setIsFollow] = useState();
  const followerId = authData.id;

  const getUser = async () => {
    const user = await getUserById(userId);
    setUserData(user);
  };

  const handleFollow = async () => {
    await follow({ followerId, followedId: userId });
    await isFollowed();
  };

  const isFollowed = async () => {
    const checkIsFollow = await verifyFollow({ followerId, followedId: userId });
    setIsFollow(checkIsFollow);
  };

  const handleUnfollow = async () => {
    await unFollow({ followerId, followedId: userId });
    await isFollowed();
  };

  useEffect(() => {
    getUser();
    isFollowed();
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
              <PlayerCard
                navigation={navigation}
                user={userData}
                isFollow={isFollow}
                handleUnfollow={handleUnfollow}
                handleFollow={handleFollow}
              />
              <PlayerBottomSection user={userData} />
            </>
          ) : (
            <>
              <ClubCard
                navigation={navigation}
                user={userData}
                isFollow={isFollow}
                handleUnfollow={handleUnfollow}
                handleFollow={handleFollow}
              />
              <ClubBottomSection user={userData} />
            </>
          ))}
      </ScrollView>
    </>
  );
}
