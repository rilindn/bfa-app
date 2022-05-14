import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Colors from '../../constants/Colors';
import styles from './ClubBottomSection.styles';

export default function BottomProfileClub({ user }) {
  const [selectedTab, setSelectedTab] = useState('about');

  return (
    <>
      <View style={styles.topTabContainer}>
        <TouchableOpacity
          onPress={() => setSelectedTab('about')}
          style={[
            styles.leftTab,
            selectedTab === 'about' && { borderBottomColor: Colors.orange, borderBottomWidth: 1 },
          ]}>
          <Text style={[styles.tabText, selectedTab === 'about' && { color: Colors.orange }]}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('team')}
          style={[
            styles.middleTab,
            selectedTab === 'team' && {
              borderBottomColor: Colors.orange,
              borderBottomWidth: 1,
            },
          ]}>
          <Text style={[styles.tabText, selectedTab === 'team' && { color: Colors.orange }]}>
            Team
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab('vacancies')}
          style={[
            styles.rightTab,
            selectedTab === 'vacancies' && {
              borderBottomColor: Colors.orange,
              borderBottomWidth: 1,
            },
          ]}>
          <Text style={[styles.tabText, selectedTab === 'vacancies' && { color: Colors.orange }]}>
            Vacancies
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomTabContainer}>
        {selectedTab === 'about' && <Text style={styles.aboutText}>{user.Club?.about}</Text>}
        {selectedTab === 'team' && <Text style={styles.aboutText}>Team</Text>}
        {selectedTab === 'vacancies' && <Text style={styles.aboutText}>Vacancies</Text>}
      </View>
    </>
  );
}
