import { useForm } from 'react-hook-form';
import { Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native-ui-lib';

import Logo from '../../../assets/icons/logo-text-forte.png';
import Background from '../../../assets/images/background.png';
import CustomButton from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import styles from './RegisterPlayer.styles';

export default function RegisterPlayer({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    navigation.navigate('Root', {
      screen: 'Profile',
    });
    reset();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        <View style={styles.form}>
          <View style={styles.header}>
            <Image source={Logo} style={{ width: 240, height: 64 }} />
            <Text style={styles.registerAccount}>Register your account</Text>
          </View>
          <View style={styles.middleContainer}>
            <TextInput
              name="name"
              placeholder="Name"
              control={control}
              rules={rules.name}
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
            <CustomButton label="Register" onPress={handleSubmit(onSubmit)} />
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
  );
}

const rules = {
  name: {
    required: {
      value: true,
      message: 'Name is required',
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
