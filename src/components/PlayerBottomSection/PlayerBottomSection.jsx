import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import Colors from '../../constants/Colors';
import useAuth from '../../hooks/useAuth';
import CustomButton from '../Button/Button';
import styles from './PlayerBottomSection.styles';

export default function PlayerBottomSection() {
  const [selectedTab, setSelectedTab] = useState('about');
  const { authData } = useAuth();

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
          onPress={() => setSelectedTab('characteristics')}
          style={[
            styles.rightTab,
            selectedTab === 'characteristics' && {
              borderBottomColor: Colors.orange,
              borderBottomWidth: 1,
            },
          ]}>
          <Text
            style={[styles.tabText, selectedTab === 'characteristics' && { color: Colors.orange }]}>
            Characteristics
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomTabContainer}>
        {selectedTab === 'about' ? (
          <Text style={styles.aboutText}>{authData.Player.about}</Text>
        ) : (
          <>
            <View style={styles.playerCharacteristicContainer}>
              <Text style={styles.playerCharacteristicText}>Player characteristics</Text>
              <CustomButton label="Edit" style={styles.editBtn} labelStyle={styles.editLabel} />
            </View>
            <View style={styles.listContainer}>
              <View>
                <Text style={styles.leftListItem}>Nationality</Text>
                <Text style={styles.leftListItem}>Place of birth</Text>
                <Text style={styles.leftListItem}>Date of birth (age)</Text>
                <Text style={styles.leftListItem}>Height</Text>
                <Text style={styles.leftListItem}>Weight</Text>
                <Text style={styles.leftListItem}>Foot</Text>
                <Text style={styles.leftListItem}>Back number</Text>
              </View>
              <View>
                <Text style={styles.rightListItem}>{authData.Player.nationality}</Text>
                <Text style={styles.rightListItem}>{authData.Player.city}</Text>
                <Text style={styles.rightListItem}>{authData.Player.birthDate}</Text>
                <Text style={styles.rightListItem}>{authData.Player.height}</Text>
                <Text style={styles.rightListItem}>{authData.Player.weight} kg</Text>
                <Text style={styles.rightListItem}>{authData.Player.foot}</Text>
                <Text style={styles.rightListItem}>{authData.Player.backNumber}</Text>
              </View>
            </View>
          </>
        )}
      </View>
    </>
  );
}
