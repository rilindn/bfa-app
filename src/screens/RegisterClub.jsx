import { useForm } from 'react-hook-form';
import { StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { View } from 'react-native-ui-lib';

import Background from '../../assets/images/background.png';
import CustomButton from '../components/Button/Button';
import SvgIcon from '../components/SvgIcon';
import TextInput from '../components/TextInput/TextInput';
import Colors from '../constants/Colors';

export default function RegisterClub() {
  const { control } = useForm();

  return (
    <View style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        <View style={styles.form}>
          <View row center>
            <Text style={styles.title}>B A L L </Text>
            <View padding-8 row center>
              <Text style={styles.title}>F</Text>
              <SvgIcon
                name="ball"
                width={18}
                height={18}
                style={{ marginHorizontal: 3, marginBottom: 2 }}
              />
              <Text style={styles.title}>R</Text>
            </View>
            <Text style={styles.title}> A L L</Text>
          </View>
          <Text style={styles.loginText}>Register your account</Text>
          <View style={styles.middleContainer}>
            <TextInput name="name" placeholder="Your name" control={control} />
            <TextInput
              name="recipient"
              placeholder="Recipient role in the club"
              control={control}
            />
            <TextInput name="club-name" placeholder="Club Name" control={control} />
            <TextInput name="email" placeholder="Email" control={control} />
            <TextInput name="password" placeholder="Password" control={control} secureTextEntry />
            <TextInput
              name="confirm-password"
              placeholder="Confirm Password"
              control={control}
              secureTextEntry
            />
            <CustomButton label="Register" />
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Already have an account? </Text>
            <TouchableOpacity>
              <Text style={styles.login}> Login</Text>
            </TouchableOpacity>
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
    flex: 1,
    width: '95%',
    backgroundColor: Colors.white,
    //height: '90%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    marginTop: 30,
    fontSize: 22,
    fontFamily: 'poppins-bold',
  },
  loginText: {
    fontSize: 20,
    fontFamily: 'poppins-bold',
  },
  forgotPassword: {
    fontSize: 16,
    fontFamily: 'poppins-regular',
    color: Colors.gray3,
    marginBottom: 25,
  },
  bottomContainer: {
    backgroundColor: Colors.light + '30',
    width: '100%',
    height: 50,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  login: {
    color: Colors.mainGreen,
    paddingLeft: 5,
    fontFamily: 'poppins-semibold',
    fontSize: 16,
  },
  bottomText: {
    fontSize: 16,
    fontFamily: 'poppins-semibold',
  },
  middleContainer: {
    width: '90%',
    height: '85%',
    alignItems: 'center',
  },
});
