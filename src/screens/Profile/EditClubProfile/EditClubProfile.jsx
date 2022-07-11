import { pickBy, identity } from 'lodash';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, ToastAndroid, Alert, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Menu, Divider } from 'react-native-paper';

import { editClub } from '../../../api/ApiMethods';
import Avatar from '../../../components/Avatar/Avatar';
import CustomButton from '../../../components/Button/Button';
import Camera from '../../../components/Camera/Camera';
import Header from '../../../components/Header/Header';
import ImagePicker from '../../../components/ImagePicker/ImagePicker';
import SelectInput from '../../../components/SelectInput/SelectInput';
import TextInput from '../../../components/TextInput/TextInput';
import Colors from '../../../constants/Colors';
import useAuth from '../../../hooks/useAuth';
import uploadToCloudinary from '../../../utils/uploadToCloudinary';
import styles from './EditClubProfile.styles';

const EditClubProfile = ({ navigation }) => {
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [media, setMedia] = useState();
  const { authData, handleSignIn } = useAuth();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const avatarImage = await uploadToCloudinary(media);
      data.profilePic = avatarImage;
      const payload = pickBy(data, identity);
      const result = await editClub(authData.id, payload);

      if (result?.status === 200) {
        handleSignIn(result.data);
        navigation.navigate('Profile');
        ToastAndroid.show('Your data have been changed successfully!', ToastAndroid.LONG);
      } else {
        const errorMsg = result.response.data.errors?.[0]?.message || result.response.data;
        Alert.alert('Error occurred!', JSON.stringify(errorMsg));
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error occurred!', 'Please try again!');
    } finally {
      setLoading(false);
    }
  };

  const setSelectedMedia = (photo) => {
    photo && setMedia(photo);
    setCameraVisible(false);
    setShowImagePicker(false);
  };
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.main}>
          <View style={styles.divider}>
            <Text style={styles.title}>Edit Profile</Text>
          </View>
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
                    name={authData.Club.clubName}
                    avatarContainer={{ marginHorizontal: 15, marginTop: 5 }}
                    size={75}
                    image={media || authData?.profilePic}
                  />
                </TouchableOpacity>
              }>
              <Menu.Item
                onPress={() => {
                  setCameraVisible(true);
                  setShowAvatarMenu(false);
                }}
                title="Take a photo"
              />
              <Divider />
              <Menu.Item
                onPress={() => {
                  setShowImagePicker(true);
                  setShowAvatarMenu(false);
                }}
                title="Choose from gallery"
              />
            </Menu>
            <Camera
              visible={cameraVisible}
              setPhoto={setSelectedMedia}
              closeModal={() => setCameraVisible(false)}
            />
            <ImagePicker
              visible={showImagePicker}
              allowsEditing
              aspect={[4, 3]}
              setSelectedMedia={setSelectedMedia}
              closeModal={() => setShowImagePicker(false)}
            />
            <Text style={styles.changePhoto}>Change Photo</Text>
          </View>
          <View style={styles.genInfo}>
            <Text style={styles.changeInfo}>Change general information about your team</Text>
          </View>
          <View style={styles.inputsContainer}>
            <TextInput
              inputStyle={styles.input}
              darkMode
              name="stadiumName"
              placeholder="Stadium name"
              control={control}
              rules={rules.stadiumName}
              errors={errors}
              defaultValue={authData.Club.stadiumName}
            />
            <TextInput
              textInputStyle={{ height: 100 }}
              name="about"
              placeholder="About"
              title="Short info about team"
              control={control}
              rules={rules.about}
              errors={errors}
              multiline
              numberOfLines={6}
              darkMode
              defaultValue={authData.Club.about}
            />
            <Text style={styles.accSettings}>
              <Text>You can change your name, email, and gender at </Text>
              <Text onPress={() => navigation.navigate('Profile')} style={{ color: Colors.orange }}>
                Account Settings
              </Text>
            </Text>
            <View style={styles.addresInfo}>
              <Text style={styles.changeInfo}>Addres info</Text>
            </View>
            <SelectInput
              name="country"
              control={control}
              errors={errors}
              label="Country"
              darkMode
              placeholder="Country"
              options={[
                { label: 'Kosovo', value: 'Kosovo' },
                { label: 'Albania', value: 'Albania' },
                { label: 'Macedonia', value: 'Macedonia' },
                { label: 'Germany', value: 'Germany' },
                { label: 'France', value: 'France' },
                { label: 'Montenegro', value: 'Montenegro' },
              ]}
              defaultValue={authData.Club.country}
            />
            <TextInput
              inputStyle={styles.input}
              darkMode
              name="city"
              placeholder="City"
              control={control}
              rules={rules.city}
              errors={errors}
              defaultValue={authData.Club.city}
            />
            <TextInput
              inputStyle={styles.input}
              darkMode
              name="zipCode"
              placeholder="Zip Code"
              control={control}
              rules={rules.zipCode}
              errors={errors}
              defaultValue={authData.Club.zipCode}
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
      </ScrollView>
    </>
  );
};

const rules = {
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
      message: 'About can`t be longer than 550 characters',
    },
  },
  city: {
    minLength: {
      value: 2,
      message: 'City must be at least 2 characters',
    },
    maxLength: {
      value: 50,
      message: 'City can`t be longer than 30 characters',
    },
  },
  stadiumName: {
    minLength: {
      value: 2,
      message: 'Stadium name must be at least 5 characters',
    },
    maxLength: {
      value: 50,
      message: 'Stadium name can`t be longer than 50 characters',
    },
  },
};

export default EditClubProfile;
