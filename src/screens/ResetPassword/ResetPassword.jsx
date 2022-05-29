import _ from 'lodash';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native-ui-lib';

import Logo from '../../../assets/icons/logo-text-forte.png';
import Background from '../../../assets/images/background.png';
import {
  requestResetPassword,
  resetPassword,
  validateResetPasswordCode,
} from '../../api/ApiMethods';
import CustomButton from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import styles from './ResetPassword.styles';

export default function Login({ navigation }) {
  const [phase, setPhase] = useState('email');
  const [email, setEmail] = useState('');
  const [resetCodeData, setResetCodeData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: 'onBlur' });

  const requestReset = async (data) => {
    try {
      setIsLoading(true);
      const result = await requestResetPassword(data);
      if (result?.status === 200) {
        ToastAndroid.show('We sent you a password reset code in your email!', ToastAndroid.LONG);
        setEmail(data?.email);
        setPhase('code');
        reset();
      } else {
        const errorMsg = result.response.data.errors?.[0]?.message || result.response.data;
        Alert.alert('Error occurred!', errorMsg);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error occurred!', 'Please try again!');
    } finally {
      setIsLoading(false);
    }
  };

  const validateResetCode = async (data) => {
    try {
      setIsLoading(true);
      const result = await validateResetPasswordCode({ ...data, email });
      if (result?.status === 200) {
        ToastAndroid.show('Reset code was verified successfully!', ToastAndroid.LONG);
        setResetCodeData(result?.data);
        setPhase('password');
        reset();
      } else {
        const errorMsg = result.response.data.errors?.[0]?.message || result.response.data;
        Alert.alert('Error occurred!', errorMsg);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error occurred!', 'Please try again!');
    } finally {
      setIsLoading(false);
    }
  };

  const setNewPassword = async (data) => {
    data = _.omit(data, ['confirmPassword']);
    const { userId, email, code } = resetCodeData;
    try {
      setIsLoading(true);
      const result = await resetPassword(userId, { ...data, email, code });
      if (result?.status === 200) {
        ToastAndroid.show('Your account password has been reset!', ToastAndroid.SHORT);
        ToastAndroid.show('You can login now!', ToastAndroid.SHORT);
        navigation.navigate('Login');
      } else {
        const errorMsg = result.response.data.errors?.[0]?.message || result.response.data;
        Alert.alert('Error occurred!', errorMsg);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error occurred!', 'Please try again!');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Image source={Logo} style={{ width: 240, height: 64 }} />
              <Text style={styles.loginText}>Reset your password</Text>
            </View>
            <View style={styles.middleContainer}>
              {phase === 'password' ? (
                <>
                  <TextInput
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    control={control}
                    rules={rules.password}
                    errors={errors}
                  />
                  <TextInput
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry
                    control={control}
                    rules={{
                      ...rules.confirmPassword,
                      validate: (value) =>
                        value === watch('password') || 'The passwords do not match',
                    }}
                    errors={errors}
                  />
                  <CustomButton
                    label="Save"
                    onPress={handleSubmit(setNewPassword)}
                    loading={isLoading}
                  />
                </>
              ) : phase === 'code' ? (
                <>
                  <Text style={styles.verificationCodeNote}>
                    We sent you a reset code in your email...
                  </Text>
                  <TextInput
                    name="code"
                    placeholder="Code"
                    control={control}
                    errors={errors}
                    rules={rules.code}
                  />
                  <CustomButton
                    label="Verify"
                    onPress={handleSubmit(validateResetCode)}
                    loading={isLoading}
                  />
                </>
              ) : (
                <>
                  <TextInput
                    name="email"
                    placeholder="Email"
                    control={control}
                    rules={rules.email}
                    errors={errors}
                  />
                  <CustomButton
                    label="Request"
                    onPress={handleSubmit(requestReset)}
                    loading={isLoading}
                    style={{ marginTop: 15 }}
                  />
                </>
              )}
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.forgotPassword}>Login instead?</Text>
            </TouchableOpacity>
            <View style={styles.bottomContainer}>
              <Text style={styles.bottomText}>Don't have an account yet?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('ChooseRole')}>
                <Text style={styles.register}> Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const rules = {
  email: {
    required: {
      value: true,
      message: 'Please enter your email',
    },
    pattern: {
      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
      message: 'Invalid email address',
    },
  },
  code: {
    required: {
      value: true,
      message: 'Please enter the code',
    },
  },
  password: {
    required: {
      value: true,
      message: 'Enter your new password',
    },
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters',
    },
  },
  confirmPassword: {
    required: {
      value: true,
      message: 'Confirm your password',
    },
    minLength: {
      value: 8,
      message: 'Confirm password must be at least 8 characters',
    },
  },
};
