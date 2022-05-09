import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Colors from '../../../constants/Colors';
import Followers from '../Followers/Followers';
import Following from '../Following/Following';
import styles from './FollowTopBar.styles';

export default function Follow({ route, navigation }) {
  const [selectedTab, setSelectedTab] = useState('followers');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topTabContainer}>
        <TouchableOpacity
          onPress={() => setSelectedTab('followers')}
          style={[
            styles.leftTab,
            selectedTab === 'followers' && {
              borderBottomColor: Colors.orange,
              borderBottomWidth: 1,
            },
          ]}>
          <Text style={[styles.tabText, selectedTab === 'followers' && { color: Colors.orange }]}>
            Followers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('following')}
          style={[
            styles.rightTab,
            selectedTab === 'following' && {
              borderBottomColor: Colors.orange,
              borderBottomWidth: 1,
            },
          ]}>
          <Text style={[styles.tabText, selectedTab === 'following' && { color: Colors.orange }]}>
            Following
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomTabContainer}>
        {selectedTab === 'followers' ? (
          <Followers route={route} navigation={navigation} />
        ) : (
          <Following navigation={navigation} />
        )}
      </View>
    </SafeAreaView>
  );
}
