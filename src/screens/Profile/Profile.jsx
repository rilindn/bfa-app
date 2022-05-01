import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Avatar from '../../components/Avatar/Avatar';
import CustomButton from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';
import useAuth from '../../hooks/useAuth';
import styles from './Profile.styles';

export default function Profile() {
  const [selectedTab, setSelectedTab] = useState('about');
  const { authData } = useAuth();

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.main}>
          <View style={styles.button}>
            <View style={styles.basicAccountBtn}>
              <Text style={styles.basicAccountLabel}>Basic account</Text>
            </View>
            <CustomButton
              label="Edit profile"
              style={styles.editProfileBtn}
              labelStyle={styles.editProfileLabel}
            />
          </View>
          <Text style={styles.name}>
            {authData.Player.firstName} {authData.Player.lastName}
          </Text>
          <Avatar
            firstName={authData.Player.firstName}
            lastName={authData.Player.lastName}
            avatarContainer={{ marginHorizontal: 15, marginTop: 5 }}
          />
          <View style={styles.teamStatus}>
            <Text style={{ color: Colors.white }}>CURRENTLY WITHOUT A TEAM</Text>
          </View>
          <View style={styles.infoBoxWrapper}>
            <View style={styles.infoBox}>
              <Text style={styles.statisticsNumber}>1</Text>
              <Text style={styles.statisticsText}>POST</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.statisticsNumber}>10</Text>
              <Text style={styles.statisticsText}>FOLLOWERS</Text>
            </View>
            <View style={[styles.infoBox, { borderRightWidth: 0 }]}>
              <Text style={styles.statisticsNumber}>12</Text>
              <Text style={styles.statisticsText}>FOLLOWING</Text>
            </View>
          </View>
        </View>
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
              style={[
                styles.tabText,
                selectedTab === 'characteristics' && { color: Colors.orange },
              ]}>
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
        <View style={styles.postSomethingWrapper}>
          <Text style={styles.postSomethingText}>Post Something</Text>
          <View style={styles.postSomethingAvatar}>
            <Avatar
              firstName={authData.Player.firstName}
              lastName={authData.Player.lastName}
              avatarContainer={{ width: 45, height: 45, borderRadius: 40 }}
              initialStyle={{ fontSize: fontSizes.large }}
            />
            <View style={styles.postContainer}>
              <Text style={styles.postPlaceholder}>What's on your mind?</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
