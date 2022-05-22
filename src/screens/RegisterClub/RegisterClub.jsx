import _ from 'lodash';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, View } from 'react-native-ui-lib';

import Logo from '../../../assets/icons/logo-text-forte.png';
import Background from '../../../assets/images/background.png';
import { registerClub } from '../../api/ApiMethods';
import CustomButton from '../../components/Button/Button';
import SelectInput from '../../components/SelectInput/SelectInput';
import TextInput from '../../components/TextInput/TextInput';
import styles from './RegisterClub.styles';

export default function RegisterClub({ navigation }) {
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
      role: 'Club',
    };
    try {
      const result = await registerClub(payload);
      if (result?.status === 200) {
        navigation.navigate('Login');
        reset();
        ToastAndroid.show('You have been registered successfully!', ToastAndroid.LONG);
      } else {
        const errorMsg = result.response.data.errors?.[0]?.message || result.response.data;
        Alert.alert('Error occurred!', errorMsg);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error occurred!', 'Please try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Image source={Logo} style={{ width: 240, height: 64 }} />
                <Text style={styles.registerAccount}>Register your account</Text>
              </View>
              <View style={styles.middleContainer}>
                <TextInput
                  name="firstName"
                  placeholder="Your name"
                  control={control}
                  errors={errors}
                  rules={rules.firstName}
                />
                <TextInput
                  name="lastName"
                  placeholder="Your lastname"
                  control={control}
                  errors={errors}
                  rules={rules.lastName}
                />
                <SelectInput
                  name="role"
                  control={control}
                  errors={errors}
                  rules={rules.role}
                  label="Recipient role in the club"
                  placeholder="Choose a role"
                  options={[
                    { label: 'Coach', value: 'co' },
                    { label: 'Finance', value: 'fin' },
                  ]}
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
                    validate: (value) =>
                      value === watch('password') || 'The passwords do not match',
                  }}
                />
                <CustomButton
                  label="Register"
                  onPress={handleSubmit(onSubmit)}
                  loading={loading}
                  style={{ marginTop: 15 }}
                />
              </View>
              <View style={styles.bottomContainer}>
                <Text style={styles.bottomText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.login}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
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
  },
  lastName: {
    required: {
      value: true,
      message: 'Lastname is required',
    },
  },
  clubName: {
    required: {
      value: true,
      message: 'Club name is required',
    },
  },
  role: {
    required: {
      value: true,
      message: 'Role is required',
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
