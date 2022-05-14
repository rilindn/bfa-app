import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text } from 'react-native-ui-lib';

import Colors from '../../../constants/Colors';
import Avatar from '../../Avatar/Avatar';
import CustomButton from '../../Button/Button';
import styles from './PlayerCard.styles';

export default function PlayerCard({ user }) {
  const navigation = useNavigation();

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
          user.profilePic && navigation.navigate('PhotoView', { photo: user.profilePic });
        }}>
        <Avatar
          name={`${user.Player?.firstName} ${user.Player?.lastName}`}
          avatarContainer={{ marginHorizontal: 15, marginTop: 5 }}
          image={user.profilePic}
          size={80}
        />
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.name}>
            {user.Player?.firstName} {user.Player?.lastName}
          </Text>
          <Text style={styles.personalInfo}>
            Gender: <Text style={{ color: Colors.white }}>{user.Player?.gender}</Text>
          </Text>
          <Text style={styles.personalInfo}>
            Back number: <Text style={{ color: Colors.white }}>{user.Player?.backNumber}</Text>
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
