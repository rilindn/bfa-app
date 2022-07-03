import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, Alert, ToastAndroid } from 'react-native';

import { changePassword } from '../../../api/ApiMethods';
import CustomButton from '../../../components/Button/Button';
import useAuth from '../../../hooks/useAuth';
import TextInput from './../../../components/TextInput/TextInput';
import styles from './PrivacySettings.styles';

const PrivacySettings = () => {
  const [loading, setLoading] = useState(false);
  const { authData } = useAuth();
  const {
    watch,
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await changePassword(authData.id, data);
      if (result?.status === 200) {
        reset();
        ToastAndroid.show('Your password was changed', ToastAndroid.LONG);
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
    <View>
      <Text style={styles.categoryLabel}>Privacy Settings</Text>
      <View style={styles.settings}>
        <TextInput
          inputStyle={[styles.input]}
          name="oldPassword"
          title="Old password"
          placeholder="********"
          control={control}
          rules={rules.password}
          errors={errors}
          darkMode
          secureTextEntry
        />

        <TextInput
          inputStyle={[styles.input]}
          name="newPassword"
          title="New password"
          placeholder="********"
          control={control}
          rules={rules.newPassword}
          errors={errors}
          darkMode
          secureTextEntry
        />
        <TextInput
          inputStyle={[styles.input]}
          name="confirmPassword"
          title="Confirm password"
          placeholder="********"
          control={control}
          rules={{
            ...rules.confirmPassword,
            validate: (value) => value === watch('newPassword') || 'The passwords do not match',
          }}
          errors={errors}
          darkMode
          secureTextEntry
        />
        <CustomButton
          label="Save"
          onPress={handleSubmit(onSubmit)}
          style={styles.saveBtn}
          labelStyle={styles.saveLabel}
          loading={loading}
        />
      </View>
    </View>
  );
};

export default PrivacySettings;

const rules = {
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
