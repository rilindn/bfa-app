import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import CustomButton from '../../../components/Button/Button';
import Header from '../../../components/Header/Header';
import EditPlayerCharacteristics from '../../../components/Profile/EditPlayerCharacteristics/EditPlayerCharacteristics';
import Colors from '../../../constants/Colors';
import EditPlayerGeneral from './../../../components/Profile/EditPlayerGeneral/EditPlayerGeneral';
import styles from './EditProfile.styles';

export default function EditProfile({ navigation }) {
  const [selectedTab, setSelectedTab] = useState('general');

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>Edit Profile</Text>
          <View style={styles.topTabContainer}>
            <CustomButton
              label="General"
              onPress={() => setSelectedTab('general')}
              labelStyle={[
                styles.styleLabel,
                selectedTab === 'general' && { color: Colors.orange },
              ]}
              style={styles.tab}
            />
            <CustomButton
              label="Characteristics"
              onPress={() => setSelectedTab('characteristics')}
              labelStyle={[
                styles.styleLabel,
                selectedTab === 'characteristics' && { color: Colors.orange },
              ]}
              style={styles.tab}
            />
          </View>
          <View style={styles.bottomTabContainer}>
            {selectedTab === 'general' ? (
              <EditPlayerGeneral navigation={navigation} />
            ) : (
              <EditPlayerCharacteristics navigation={navigation} />
            )}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
