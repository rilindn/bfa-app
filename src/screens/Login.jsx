import { useForm } from 'react-hook-form';
import { StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { View } from 'react-native-ui-lib';

import Background from '../../assets/images/background.png';
import CustomButton from '../components/Button/Button';
import SvgIcon from '../components/SvgIcon';
import TextInput from '../components/TextInput/TextInput';
import Colors from '../constants/Colors';

export default function Login() {
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
          <Text style={styles.loginText}>Login to your account</Text>
          <View style={styles.middleContainer}>
            <TextInput name="email" placeholder="Email" control={control} />
            <TextInput name="password" placeholder="Password" control={control} secureTextEntry />
            <CustomButton label="Login" />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Dont have an account yet? </Text>
            <TouchableOpacity>
              <Text style={styles.register}> Register</Text>
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
    width: '90%',
    backgroundColor: Colors.white,
    height: '70%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 22,
    fontFamily: 'poppins-bold',
  },
  loginText: {
    fontSize: 20,
    fontFamily: 'poppins-semibold',
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
    height: 60,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  register: {
    color: Colors.mainGreen,
    paddingLeft: 3,
    fontFamily: 'poppins-semibold',
    fontSize: 16,
  },
  bottomText: {
    fontSize: 16,
    fontFamily: 'poppins-semibold',
  },
  middleContainer: {
    width: '90%',
    alignItems: 'center',
  },
});
