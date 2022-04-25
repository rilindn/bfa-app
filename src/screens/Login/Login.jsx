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
import { login } from '../../api/ApiMethods';
import CustomButton from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import useAuth from './../../hooks/useAuth';
import styles from './Login.styles';

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSignIn } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const result = await login(data);
      if (result?.status === 200) {
        handleSignIn(result.data);
        ToastAndroid.show('You have been logged in successfully!', ToastAndroid.LONG);
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
              <CustomButton label="Login" onPress={handleSubmit(onSubmit)} loading={isLoading} />
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
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
