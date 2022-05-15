import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Following from '../../components/Follow/Followings/Followings';
import Colors from '../../constants/Colors';
import Followers from './../../components/Follow/Followers/Followers';
import useAuth from './../../hooks/useAuth';
import styles from './Follows.styles';

export default function Follow({ route, navigation }) {
  const { authData } = useAuth();
  const defaultSelectedTab = route.params.selectedTab;
  const [selectedTab, setSelectedTab] = useState(defaultSelectedTab || 'followers');
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
          <Followers user={authData} navigation={navigation} />
        ) : (
          <Following user={authData} navigation={navigation} />
        )}
      </View>
    </SafeAreaView>
  );
}
