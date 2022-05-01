import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// import { Avatar } from 'react-native-paper';
import ImageProfile from '../../../assets/images/background1.png';
import Avatar from '../../components/Avatar/Avatar';
import CustomButton from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Colors from '../../constants/Colors';
import { fontSizes } from '../../constants/Typography';
import styles from './Profile.styles';

export default function Profile() {
  const [selectedTab, setSelectedTab] = useState('about');

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
          <Text style={styles.name}>Ake Kenned</Text>
          <Avatar
            firstName="Ake"
            lastName="Kenned"
            avatarContainer={{ marginHorizontal: 15, marginTop: 5 }}
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
            <Text style={styles.aboutText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </Text>
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
                  <Text style={styles.rightListItem}>Albanian</Text>
                  <Text style={styles.rightListItem}>Pristina</Text>
                  <Text style={styles.rightListItem}>15/03/2001</Text>
                  <Text style={styles.rightListItem}>1.82</Text>
                  <Text style={styles.rightListItem}>75 kg</Text>
                  <Text style={styles.rightListItem}>Left</Text>
                  <Text style={styles.rightListItem}>6</Text>
                </View>
              </View>
            </>
          )}
        </View>
        <View style={styles.postSomethingWrapper}>
          <Text style={styles.postSomethingText}>Post Something</Text>
          <View style={styles.postSomethingAvatar}>
            <Avatar
              firstName="Ake"
              lastName="Kenned"
              avatarContainer={{ width: 45, height: 45, borderRadius: 40 }}
              initialStyle={{ fontSize: fontSizes.large }}
              // image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
