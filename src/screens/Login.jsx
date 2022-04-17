import { useForm } from 'react-hook-form';
import { StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { View } from 'react-native-ui-lib';

import Background from '../../assets/images/background.png';
import CustomButton from '../components/Button/Button';
import SvgIcon from '../components/SvgIcon';
import TextInput from '../components/TextInput/TextInput';
import Colors from '../constants/Colors';
import { fontSizes } from '../constants/Typography';

export default function Login({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = () => {
    reset();
    navigation.navigate('Root', {
      screen: 'Feed',
    });
  };

  return (
    <View style={styles.container}>
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
            <Text style={styles.loginText}>Login to your account</Text>
          </View>
          <View style={styles.middleContainer}>
            <TextInput
              name="email"
              placeholder="Email"
              control={control}
              rules={rules.email}
              errors={errors}
            />
            <TextInput
              name="password"
              placeholder="Password"
              control={control}
              secureTextEntry
              errors={errors}
              rules={rules.password}
            />
            <CustomButton label="Login" onPress={handleSubmit(onSubmit)} />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
          <View style={styles.bottomContainer}>
            <Text style={styles.bottomText}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ChooseRole')}>
              <Text style={styles.register}> Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const rules = {
  email: {
    required: {
      value: true,
      message: 'Email is required',
    },
    pattern: {
      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
      message: 'Invalid email address',
    },
  },
  password: {
    required: {
      value: true,
      message: 'Password is required',
    },
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters',
    },
  },
};

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
  header: {
    marginTop: 15,
  },
  forgotPassword: {
    fontSize: fontSizes.medium,
    fontFamily: 'poppins-regular',
    color: Colors.gray3,
    marginBottom: 15,
  },
  bottomContainer: {
    backgroundColor: Colors.light + '70',
    borderTopColor: Colors.green1,
    borderTopWidth: 1,
    width: '100%',
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  register: {
    color: Colors.mainGreen,
    fontFamily: 'poppins-semibold',
    fontSize: fontSizes.default,
  },
  bottomText: {
    fontSize: fontSizes.default,
    fontFamily: 'poppins-semibold',
  },
  middleContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 30,
  },
});
