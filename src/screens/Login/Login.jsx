import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native-ui-lib';

import Logo from '../../../assets/icons/logo-text-forte.png';
import Background from '../../../assets/images/background.png';
import CustomButton from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import Colors from '../../constants/Colors';
import styles from './Login.styles';

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = () => {
    reset();
    setIsLoading(true);
    setTimeout(() => {
      navigation.navigate('Root', {
        screen: 'Feed',
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        {!isLoading ? (
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
        ) : (
          <ActivityIndicator size="large" color={Colors.white} animating={isLoading} />
        )}
      </ImageBackground>
    </SafeAreaView>
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
