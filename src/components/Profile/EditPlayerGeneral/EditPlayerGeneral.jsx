import { pickBy, identity } from 'lodash';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, TouchableOpacity, ToastAndroid, Alert } from 'react-native';
import { Menu, Divider } from 'react-native-paper';

import { editPlayer } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import DatePicker from '../../DatePicker/DatePicker';
import TextInput from '../../TextInput/TextInput';
import useAuth from './../../../hooks/useAuth';
import Avatar from './../../Avatar/Avatar';
import CustomButton from './../../Button/Button';
import styles from './EditPlayerGeneral.styles';

const EditPlayerGeneral = ({ route, navigation }) => {
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const { authData, handleSignIn } = useAuth();
  const [birthDateVal, setBirthDateVal] = useState(authData.birthDate);
  const profilePic = route?.params?.photo;
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    data.profilePic = profilePic;
    data.birthDate = birthDateVal;
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
      <View style={styles.avatar}>
        <Menu
          visible={showAvatarMenu}
          onDismiss={() => {
            setShowAvatarMenu(false);
          }}
          contentStyle={styles.avatarMenu}
          anchor={
            <TouchableOpacity onPress={() => setShowAvatarMenu(true)}>
              <Avatar
                name="Ake Kenned"
                avatarContainer={{ marginHorizontal: 15, marginTop: 5 }}
                image={profilePic || authData.profilePic}
              />
            </TouchableOpacity>
          }>
          <Menu.Item
            onPress={() => {
              navigation.navigate('Camera');
              setShowAvatarMenu(false);
            }}
            title="Take a photo"
          />
          <Divider />
          <Menu.Item
            onPress={() => {
              navigation.navigate('ImagePicker');
              setShowAvatarMenu(false);
            }}
            title="Choose from gallery"
          />
        </Menu>
        <Text style={styles.changePhoto}>Change Photo</Text>
      </View>
      <View style={styles.genInfo}>
        <Text style={styles.changeInfo}>Change general info</Text>
      </View>
      <View style={styles.inputsContainer}>
        <DatePicker
          inputStyle={styles.input}
          darkMode
          name="birthDate"
          placeholder="Date of birth"
          control={control}
          rules={rules.birthDate}
          errors={errors}
          defaultValue={birthDateVal}
          setValue={(val) => setBirthDateVal(val)}
        />
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="placeOfBirth"
          placeholder="Place of birth"
          control={control}
          rules={rules.placeOfBirth}
          errors={errors}
          defaultValue={authData.Player.placeOfBirth}
        />
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="nationality"
          placeholder="Nationality"
          control={control}
          rules={rules.nationality}
          errors={errors}
          defaultValue={authData.Player.nationality}
        />
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="zipCode"
          placeholder="Zip Code"
          control={control}
          rules={rules.zipCode}
          errors={errors}
          defaultValue={authData.Player.zipCode}
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
          defaultValue={authData.Player.about}
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
  zipCode: {
    minLength: {
      value: 5,
      message: 'Zip code must not be more or less than 5 digits',
    },
    maxLength: {
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
