import React, { useState } from 'react';
import { Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native-ui-lib';

import Logo from '../../../assets/icons/logo-text-forte.png';
import Background from '../../../assets/images/background.png';
import CustomButton from '../../components/Button/Button';
import SvgIcon from '../../components/SvgIcon/SvgIcon';
import Colors from '../../constants/Colors';
import styles from './ChooseRole.styles';

export default function ChooseRole({ navigation }) {
  const [selectedRole, setSelectedRole] = useState('RegisterPlayer');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        <View style={styles.form}>
          <View style={styles.header}>
            <Image source={Logo} style={{ width: 240, height: 64 }} />
            <Text style={styles.accountType}>Select type of account</Text>
          </View>
          <View style={styles.middleContainer}>
            <TouchableOpacity
              onPress={() => setSelectedRole('RegisterPlayer')}
              style={[
                styles.subContainer,
                selectedRole === 'RegisterPlayer' && { borderColor: Colors.mainGreen },
              ]}>
              <View row center>
                <View style={styles.circle}>
                  <SvgIcon name="player" />
                </View>
                <Text style={styles.playerText}>PLAYER</Text>
              </View>
              <View
                style={[
                  styles.selectCircle,
                  selectedRole === 'RegisterPlayer' && { backgroundColor: Colors.mainGreen },
                ]}>
                {selectedRole === 'RegisterPlayer' && (
                  <SvgIcon name="selected" width={10} height={10} />
                )}
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelectedRole('RegisterClub')}
              style={[
                styles.subContainer,
                selectedRole === 'RegisterClub' && { borderColor: Colors.mainGreen },
              ]}>
              <View row center>
                <View style={styles.clubCircle}>
                  <SvgIcon name="club" width={20} height={30} />
                </View>
                <Text style={styles.playerText}>CLUB</Text>
              </View>
              <View
                style={[
                  styles.selectCircle,
                  selectedRole === 'RegisterClub' && { backgroundColor: Colors.mainGreen },
                ]}>
                {selectedRole === 'RegisterClub' && (
                  <SvgIcon name="selected" width={10} height={10} />
                )}
              </View>
            </TouchableOpacity>
            <CustomButton label="Continue" onPress={() => navigation.navigate(selectedRole)} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
