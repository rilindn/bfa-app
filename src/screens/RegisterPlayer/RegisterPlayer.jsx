import _ from 'lodash';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
  ToastAndroid,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native-ui-lib';

import Logo from '../../../assets/icons/logo-text-forte.png';
import Background from '../../../assets/images/background.png';
import { registerPlayer } from '../../api/ApiMethods';
import CustomButton from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import styles from './RegisterPlayer.styles';

export default function RegisterPlayer({ navigation }) {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    const formData = _.omit(data, ['confirmPassword']);
    const payload = {
      ...formData,
      role: 'Player',
    };
    try {
      const result = await registerPlayer(payload);
      if (result?.status === 200) {
        navigation.navigate('Login');
        setLoading(false);
        reset();
        ToastAndroid.show('You have been registered successfully!', ToastAndroid.LONG);
      } else {
        setLoading(false);
        const errorMsg = result.response.data.errors?.[0]?.message || result.response.data;
        Alert.alert('Error occurred!', errorMsg);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error occurred!', 'Please try again!');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Image source={Logo} style={{ width: 240, height: 64 }} />
              <Text style={styles.registerAccount}>Register your account</Text>
            </View>
            <View style={styles.middleContainer}>
              <TextInput
                name="firstName"
                placeholder="Firstname"
                control={control}
                rules={rules.firstName}
                errors={errors}
              />
              <TextInput
                name="lastName"
                placeholder="Lastname"
                control={control}
                rules={rules.lastName}
                errors={errors}
              />
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
              <TextInput
                name="confirmPassword"
                placeholder="Confirm Password"
                control={control}
                secureTextEntry
                errors={errors}
                rules={{
                  ...rules.confirmPassword,
                  validate: (value) => value === watch('password') || 'The passwords do not match',
                }}
              />
              <CustomButton
                loading={loading}
                label="Register"
                onPress={handleSubmit(onSubmit)}
                style={{ marginTop: 15 }}
              />
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.bottomText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.register}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const rules = {
  firstName: {
    required: {
      value: true,
      message: 'Firstname is required',
    },
    minLength: {
      value: 2,
      message: 'Firstname must be at least 2 characters',
    },
    maxLength: {
      value: 50,
      message: 'Firstname can`t be longer than 50 characters',
    },
  },
  lastName: {
    required: {
      value: true,
      message: 'Lastname is required',
    },
    minLength: {
      value: 2,
      message: 'FirstLastname must be at least 2 characters',
    },
    maxLength: {
      value: 50,
      message: 'Lastname can`t be longer than 50 characters',
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
