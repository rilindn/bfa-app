import { useForm } from 'react-hook-form';
import { StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native-ui-lib';

import Background from '../../assets/images/background.png';
import CustomButton from '../components/Button/Button';
import SvgIcon from '../components/SvgIcon';
import TextInput from '../components/TextInput/TextInput';
import Colors from '../constants/Colors';
import { fontSizes } from '../constants/Typography';

export default function RegisterClub({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    navigation.navigate('Root', {
      screen: 'Feed',
    });
    reset();
  };

  return (
    <SafeAreaView>
      <ScrollView>
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
                <Text style={styles.registerAccount}>Register your account</Text>
              </View>
              <View style={styles.middleContainer}>
                <TextInput
                  name="name"
                  placeholder="Your name"
                  control={control}
                  errors={errors}
                  rules={rules.name}
                />
                <TextInput
                  name="recipient"
                  placeholder="Recipient role in the club"
                  control={control}
                  errors={errors}
                  rules={rules.name}
                />
                <TextInput
                  name="clubName"
                  placeholder="Club Name"
                  control={control}
                  errors={errors}
                  rules={rules.clubName}
                />
                <TextInput
                  name="email"
                  placeholder="Email"
                  control={control}
                  rules={rules.name}
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
                <TextInput
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  control={control}
                  secureTextEntry
                  errors={errors}
                  rules={{
                    ...rules.confirmPassword,
                    validate: (value) =>
                      value === watch('password') || 'The passwords do not match',
                  }}
                />
                <CustomButton label="Register" onPress={handleSubmit(onSubmit)} />
              </View>
              <View style={styles.bottomContainer}>
                <Text style={styles.bottomText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
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
    marginVertical: 30,
  },
  title: {
    fontSize: fontSizes.extraLarge,
    fontFamily: 'poppins-bold',
    letterSpacing: 5,
  },
  registerAccount: {
    fontSize: fontSizes.large,
    fontFamily: 'poppins-semibold',
    marginBottom: 8,
  },
  forgotPassword: {
    fontSize: fontSizes.medium,
    fontFamily: 'poppins-regular',
    color: Colors.gray3,
    marginBottom: 25,
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
    marginTop: 20,
  },
  login: {
    color: Colors.mainGreen,
    paddingLeft: 5,
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
  },
});

const rules = {
  name: {
    required: {
      value: true,
      message: 'Name is required',
    },
  },
  clubName: {
    required: {
      value: true,
      message: 'Club name is required',
    },
  },
  recipient: {
    required: {
      value: true,
      message: 'Recipient is required',
    },
  },
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
  confirmPassword: {
    required: {
      value: true,
      message: 'Confirm password is required',
    },
    minLength: {
      value: 8,
      message: 'Confirm password must be at least 8 characters',
    },
  },
};
