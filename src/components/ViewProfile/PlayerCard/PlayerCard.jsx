import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from 'react-native-ui-lib';

import Colors from '../../../constants/Colors';
import useAuth from '../../../hooks/useAuth';
import Avatar from '../../Avatar/Avatar';
import CustomButton from '../../Button/Button';
import styles from './PlayerCard.styles';

export default function PlayerCard({ navigation }) {
  const { authData } = useAuth();

  return (
    <View style={styles.main}>
      <View style={styles.button}>
        <View style={styles.basicAccountBtn}>
          <Text style={styles.basicAccountLabel}>Basic account</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        onPress={() => {
          authData.profilePic && navigation.navigate('PhotoView', { photo: authData.profilePic });
        }}>
        <Avatar
          name={`${authData.Player?.firstName} ${authData.Player?.lastName}`}
          avatarContainer={{ marginHorizontal: 15, marginTop: 5 }}
          image={authData.profilePic}
          size={80}
        />
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.name}>
            {authData.Player?.firstName} {authData.Player?.lastName}
          </Text>
          <Text style={styles.personalInfo}>
            Gender: <Text style={{ color: Colors.white }}>M</Text>
          </Text>
          <Text style={styles.personalInfo}>
            Back number: <Text style={{ color: Colors.white }}>18</Text>
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.teamStatus}>
        <Text style={{ color: Colors.white }}>CURRENTLY WITHOUT A TEAM</Text>
      </View>
      <View style={styles.btnContainer}>
        <CustomButton
          label="Message"
          style={styles.sendMessageBtn}
          labelStyle={styles.sendMessageLabel}
        />
        <CustomButton
          label="Bookmark"
          style={styles.bookmarkBtn}
          labelStyle={styles.sendMessageLabel}
        />
        <CustomButton
          label="Follow"
          style={[styles.sendMessageBtn, { backgroundColor: Colors.orange }]}
          labelStyle={styles.sendMessageLabel}
        />
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
  );
}
