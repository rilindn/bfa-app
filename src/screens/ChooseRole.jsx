import React, { useState } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native-ui-lib';

import Background from '../../assets/images/background.png';
import CustomButton from '../components/Button/Button';
import SvgIcon from '../components/SvgIcon';
import Colors from '../constants/Colors';
import { fontSizes } from '../constants/Typography';

export default function ChooseRole({ navigation }) {
  const [selectedRole, setSelectedRole] = useState('RegisterPlayer');

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        <View style={styles.form}>
          <View marginT-15>
            <View row center>
              <Text style={styles.title}>BALL</Text>
              <View padding-8 row center>
                <Text style={styles.title}>F</Text>
                <SvgIcon name="ball" width={18} height={18} style={{ marginBottom: 5 }} />
                <Text style={styles.title}>R</Text>
              </View>
              <Text style={styles.title}>ALL</Text>
            </View>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '90%',
    backgroundColor: Colors.white,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
  },
  title: {
    fontSize: fontSizes.extraLarge,
    fontFamily: 'poppins-bold',
    letterSpacing: 3,
  },
  accountType: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
  },
  middleContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: Colors.green1 + '80',
    width: '90%',
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.green1,
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    width: 50,
    height: 50,
    backgroundColor: Colors.green1 + '80',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerText: {
    fontSize: fontSizes.medium,
    fontFamily: 'poppins-semibold',
    paddingStart: 10,
  },
  selectCircle: {
    height: 20,
    width: 20,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.mainGreen,
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
  },
  clubCircle: {
    width: 50,
    height: 50,
    backgroundColor: Colors.orange + '15',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
