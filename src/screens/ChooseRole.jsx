import React, { useState } from 'react';
import { StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { View } from 'react-native-ui-lib';

import Background from '../../assets/images/background.png';
import CustomButton from '../components/Button/Button';
import SvgIcon from '../components/SvgIcon';
import Colors from '../constants/Colors';
import { fontSizes } from '../constants/Typography';

export default function Login() {
  const [selected, setSelected] = useState('player');

  return (
    <View style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        <View style={styles.form}>
          <View row center>
            <Text style={styles.title}>BALL</Text>
            <View padding-8 row center>
              <Text style={styles.title}>F</Text>
              <SvgIcon name="ball" width={18} height={18} style={{ marginBottom: 5 }} />
              <Text style={styles.title}>R</Text>
            </View>
            <Text style={styles.title}>ALL</Text>
          </View>
          <Text style={styles.loginText}>Select type of account</Text>
          <View style={styles.middleContainer}>
            <TouchableOpacity
              onPress={() => setSelected('player')}
              style={[
                styles.subContainer,
                selected === 'player' && { borderColor: Colors.mainGreen },
              ]}>
              <View row center>
                <View style={styles.circle}>
                  <SvgIcon name="player" />
                </View>
                <Text style={styles.playerText}>PLAYER</Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.selectCircle,
                  selected === 'player' && { backgroundColor: Colors.mainGreen },
                ]}>
                {selected === 'player' && <SvgIcon name="selected" width={10} height={10} />}
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setSelected('club')}
              style={[
                styles.subContainer,
                selected === 'club' && { borderColor: Colors.mainGreen },
              ]}>
              <View row center>
                <View style={styles.clubCircle}>
                  <SvgIcon name="club" width={20} height={30} />
                </View>
                <Text style={styles.playerText}>CLUB</Text>
              </View>
              <TouchableOpacity
                onPress={() => setSelected('club')}
                style={[
                  styles.selectCircle,
                  selected === 'club' && { backgroundColor: Colors.mainGreen },
                ]}>
                {selected === 'club' && <SvgIcon name="selected" width={10} height={10} />}
              </TouchableOpacity>
            </TouchableOpacity>
            <CustomButton label="Continue" />
          </View>
        </View>
      </ImageBackground>
    </View>
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
    height: '50%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBottom: 20,
  },
  title: {
    fontSize: fontSizes.extraLarge,
    fontFamily: 'poppins-bold',
    letterSpacing: 5,
  },
  loginText: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
  },
  middleContainer: {
    width: '90%',
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
