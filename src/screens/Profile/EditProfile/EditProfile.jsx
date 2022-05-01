import React, { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';

import CustomButton from '../../../components/Button/Button';
import Header from '../../../components/Header/Header';
import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';
import styles from './EditProfile.styles';

export default function EditProfile() {
  const [selectedTab, setSelectedTab] = useState('about');

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Edit Profile</Text>
          <View style={styles.topTabContainer}>
            <TouchableOpacity
              onPress={() => setSelectedTab('about')}
              style={[
                styles.leftTab,
                selectedTab === 'about' && {
                  borderBottomColor: Colors.orange,
                  borderBottomWidth: 1,
                },
              ]}>
              <Text style={[styles.tabText, selectedTab === 'about' && { color: Colors.orange }]}>
                General
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
              <>
                <View style={styles.mainContent}>
                  <Avatar.Image
                    source={{
                      uri: 'https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png',
                    }}
                    size={60}
                    style={{ marginHorizontal: 15 }}
                  />
                  <Text style={styles.changePhoto}>Change Photo</Text>
                </View>
                <View style={styles.genInfo}>
                  <Text style={styles.changeInfo}>Change general info</Text>
                </View>
                <View style={styles.inputText}>
                  <TextInput style={styles.input} name="dateofbirth" placeholder="Date of birth" />
                  <TextInput
                    style={styles.input}
                    name="placeofbirth"
                    placeholder="Place of birth"
                  />
                  <TextInput style={styles.input} name="nationality" placeholder="Nationality" />
                  <TextInput style={styles.input} name="zipcode" placeholder="Zip Code" />
                </View>
                <Text style={styles.accSettings}>
                  <Text>You can change your name, email, position and gender at</Text>
                  <TouchableOpacity>
                    <Text
                      style={[
                        {
                          color: Colors.white,
                          fontFamily: 'poppins-regular',
                          fontSize: fontSizes.small,
                        },
                      ]}>
                      Account Settings
                    </Text>
                  </TouchableOpacity>
                </Text>
              </>
            ) : (
              <>
                <View style={styles.genInfo}>
                  <Text style={styles.changeInfo}>Fill in your characteristics</Text>
                </View>
                <View style={styles.inputText}>
                  <TextInput style={styles.input} name="height" placeholder="Height" />
                  <TextInput style={styles.input} name="weight" placeholder="Weight" />
                  <TextInput
                    style={styles.input}
                    name="secposition"
                    placeholder="Second position"
                  />
                  <TextInput
                    style={styles.input}
                    name="yourbacknum"
                    placeholder="Your back number"
                  />
                  <TextInput style={styles.input} name="foot" placeholder="foot" />
                </View>
                <View style={styles.button}>
                  <CustomButton
                    label="Save Changes"
                    style={styles.saveBtn}
                    labelStyle={styles.saveLabel}
                  />
                  <CustomButton
                    label="Cancel"
                    style={styles.cancelBtn}
                    labelStyle={styles.cancelLabel}
                  />
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
