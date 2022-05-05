import { identity, pickBy } from 'lodash';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, ToastAndroid, Alert } from 'react-native';

import { editPlayer } from '../../../api/ApiMethods';
import SelectInput from '../../SelectInput/SelectInput';
import TextInput from '../../TextInput/TextInput';
import useAuth from './../../../hooks/useAuth';
import CustomButton from './../../Button/Button';
import styles from './EditPlayerCharacteristics.styles';

const EditPlayerCharacteristics = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const { authData, handleSignIn } = useAuth();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    const payload = pickBy(data, identity);
    setLoading(true);
    try {
      const result = await editPlayer(authData.id, payload);
      if (result?.status === 200) {
        handleSignIn(result.data);
        navigation.navigate('Profile');
        ToastAndroid.show('Your data have been changed successfully!', ToastAndroid.LONG);
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
    <View style={styles.container}>
      <View style={styles.genInfo}>
        <Text style={styles.changeInfo}>Fill in your characteristics</Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          name="height"
          placeholder="Height (cm)"
          control={control}
          rules={rules.height}
          errors={errors}
          darkMode
          defaultValue={authData.Player.height.toString()}
          keyboardType="decimal-pad"
        />
        <TextInput
          style={styles.input}
          name="weight"
          placeholder="Weight  (kg)"
          control={control}
          rules={rules.weight}
          errors={errors}
          darkMode
          defaultValue={authData.Player.weight?.toString()}
          keyboardType="decimal-pad"
        />
        <TextInput
          style={styles.input}
          name="position"
          placeholder="Position"
          control={control}
          rules={rules.position}
          errors={errors}
          darkMode
          defaultValue={authData.Player.position}
        />
        <TextInput
          style={styles.input}
          name="secondPosition"
          placeholder="Second position"
          control={control}
          rules={rules.position}
          errors={errors}
          darkMode
          defaultValue={authData.Player.secondPosition}
        />
        <TextInput
          style={styles.input}
          name="backNumber"
          placeholder="Your back number"
          control={control}
          rules={rules.backNumber}
          errors={errors}
          darkMode
          defaultValue={authData.Player.backNumber?.toString()}
        />
        <SelectInput
          style={styles.input}
          name="foot"
          label="Foot"
          placeholder="Choose your foot"
          control={control}
          rules={rules.foot}
          errors={errors}
          options={[
            { label: 'Left', value: 'Left' },
            { label: 'Right', value: 'Right' },
            { label: 'Both', value: 'Both' },
          ]}
          darkMode
          defaultValue={authData.Player.foot}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton
          label="Save Changes"
          onPress={handleSubmit(onSubmit)}
          style={styles.saveBtn}
          labelStyle={styles.saveLabel}
          loading={loading}
        />
        <CustomButton
          label="Cancel"
          onPress={() => navigation.navigate('Profile')}
          style={styles.cancelBtn}
          labelStyle={styles.cancelLabel}
        />
      </View>
    </View>
  );
};

const rules = {
  height: {
    min: {
      value: 50,
      message: 'Height must be more than 50 cm',
    },
    max: {
      value: 250,
      message: 'Height must not be more or less than 250 cm',
    },
  },
  weight: {
    min: {
      value: 50,
      message: 'Weight must be more than 30 kg',
    },
    max: {
      value: 250,
      message: 'Weight must not be more or less than 150 kg',
    },
  },
  position: {
    minLength: {
      value: 2,
      message: 'Position must be more than 2 characters',
    },
    maxLength: {
      value: 50,
      message: 'Position must not be more or less than 50 characters',
    },
  },
  backNumber: {
    minLength: {
      value: 1,
      message: 'Your back number must be more than 1',
    },
    maxLength: {
      value: 99,
      message: 'Your back number must not be more or less than 99',
    },
  },
};

export default EditPlayerCharacteristics;
