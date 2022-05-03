import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

import Colors from '../../../constants/Colors';
import TextInput from '../../TextInput/TextInput';
import CustomButton from './../../Button/Button';
import styles from './EditPlayerGeneral.styles';
import Avatar from './../../Avatar/Avatar';

const EditPlayerGeneral = ({ navigation }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log('first', data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          image={
            'https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png'
          }
        />
        <Text style={styles.changePhoto}>Change Photo</Text>
      </View>
      <View style={styles.genInfo}>
        <Text style={styles.changeInfo}>Change general info</Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="birthDate"
          placeholder="Date of birth"
          control={control}
          rules={rules.birthDate}
          errors={errors}
        />
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="placeOfBirth"
          placeholder="Place of birth"
          control={control}
          rules={rules.placeOfBirth}
          errors={errors}
        />
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="nationality"
          placeholder="Nationality"
          control={control}
          rules={rules.nationality}
          errors={errors}
        />
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="zipcode"
          placeholder="Zip Code"
          control={control}
          rules={rules.zipcode}
          errors={errors}
        />
        <TextInput
          inputStyle={[styles.input, { height: 100 }]}
          name="about"
          placeholder="About"
          control={control}
          rules={rules.about}
          errors={errors}
          multiline
          numberOfLines={6}
          darkMode
        />
      </View>
      <Text style={styles.accSettings}>
        <Text>You can change your name, email, position and gender at </Text>
        <Text onPress={() => navigation.navigate('Profile')} style={{ color: Colors.orange }}>
          Account Settings
        </Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <CustomButton
          label="Save Changes"
          onPress={handleSubmit(onSubmit)}
          style={styles.saveBtn}
          labelStyle={styles.saveLabel}
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
  placeOfBirth: {
    minLength: {
      value: 2,
      message: 'Place of birth must be more than 2 characters',
    },
    maxLength: {
      value: 50,
      message: 'Zip code must not be more or less than 50 characters',
    },
  },
  nationality: {
    minLength: {
      value: 2,
      message: 'Nationality must be more than 2 characters',
    },
    maxLength: {
      value: 50,
      message: 'Nationality must not be more or less than 50 characters',
    },
  },
  zipcode: {
    length: {
      value: 5,
      message: 'Zip code must not be more or less than 5 digits',
    },
  },
  about: {
    maxLength: {
      value: 550,
      message: 'Zip code must not be more or less than 5 digits',
    },
  },
};

export default EditPlayerGeneral;
