import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, Alert, ToastAndroid } from 'react-native';

import { editUser } from '../../../api/ApiMethods';
import CustomButton from '../../../components/Button/Button';
import useAuth from '../../../hooks/useAuth';
import TextInput from './../../../components/TextInput/TextInput';
import styles from './AccountSettings.styles';

const AccountSettings = () => {
  const [loading, setLoading] = useState(false);
  const { authData, handleSignIn } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: authData?.[authData.role].firstName || '',
      lastName: authData?.[authData.role].lastName || '',
      email: authData?.email || '',
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await editUser(authData.id, data);
      if (result?.status === 200) {
        handleSignIn(result.data);
        ToastAndroid.show('Your datas have been updated', ToastAndroid.LONG);
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
      <Text style={styles.categoryLabel}>Account Settings</Text>
      <View style={styles.settings}>
        <TextInput
          inputStyle={[styles.input]}
          name="firstName"
          placeholder="Firstname"
          control={control}
          rules={rules.firstName}
          errors={errors}
          darkMode
        />
        <TextInput
          inputStyle={[styles.input]}
          name="lastName"
          placeholder="Lastname"
          control={control}
          rules={rules.lastName}
          errors={errors}
          darkMode
        />
        <TextInput
          inputStyle={[styles.input]}
          name="email"
          placeholder="Email"
          control={control}
          rules={rules.email}
          errors={errors}
          darkMode
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

export default AccountSettings;

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
};
