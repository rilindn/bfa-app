import { AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity, Image, View, Text, ToastAndroid, Alert } from 'react-native';

import { createPost } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import uploadToCloudinary from '../../../utils/uploadToCloudinary';
import CustomButton from '../../Button/Button';
import Camera from '../../Camera/Camera';
import ImagePicker from '../../ImagePicker/ImagePicker';
import useAuth from './../../../hooks/useAuth';
import Avatar from './../../Avatar/Avatar';
import TextInput from './../../TextInput/TextInput';
import styles from './CreatePost.styles';

export default function CreatePost({ name, closeModal }) {
  const [cameraVisible, setCameraVisible] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { authData } = useAuth();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const image = await uploadToCloudinary(media);
      data.media = image;
      const result = await createPost({ ...data, UserId: authData.id });
      if (result?.status === 200) {
        closeModal();
        ToastAndroid.show('New post created!', ToastAndroid.LONG);
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
      <View style={styles.postHeader}>
        <Text style={styles.headerText}>Post Something</Text>
        <TouchableOpacity onPress={() => closeModal()}>
          <AntDesign name="closecircle" size={30} color={Colors.gray4} />
        </TouchableOpacity>
      </View>
      <View style={styles.userDataContainer}>
        <Avatar size={40} name="Rilind Nuha" />
        <Text style={styles.userName}>Rilind Nuha</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          inputStyle={[styles.input]}
          name="content"
          placeholder="Write something"
          title=" "
          control={control}
          rules={rules.content}
          errors={errors}
          multiline
          numberOfLines={6}
          darkMode
        />
        {media && (
          <View style={styles.mediaPreview}>
            <TouchableOpacity onPress={() => setMedia()} style={styles.removePreview}>
              <AntDesign name="closecircle" size={18} color={Colors.gray3} />
            </TouchableOpacity>
            <Image
              style={styles.media}
              source={{
                uri: media,
              }}
            />
          </View>
        )}
        <View style={styles.uploadMedia}>
          <TouchableOpacity
            style={styles.uploadMediaOptions}
            onPress={() => setCameraVisible(true)}>
            <MaterialIcons name="add-a-photo" size={16} color={Colors.orange} />
            <Text style={styles.uploadText}>Take a photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.uploadMediaOptions}
            onPress={() => setShowImagePicker(true)}>
            <FontAwesome5 name="images" size={16} color={Colors.orange} />
            <Text style={styles.uploadText}>Choose from gallery</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          label="Post"
          onPress={handleSubmit(onSubmit)}
          style={styles.saveBtn}
          labelStyle={styles.saveLabel}
          loading={loading}
        />
      </View>
      <Camera
        visible={cameraVisible}
        setPhoto={(photo) => {
          console.log('first', media);
          setMedia(photo);
          setCameraVisible(false);
        }}
        closeModal={() => setCameraVisible(false)}
      />
      <ImagePicker
        visible={showImagePicker}
        allowsEditing={false}
        // aspect: [4, 3],
        setPhoto={(photo) => {
          console.log('first', photo);
          photo && setMedia(photo);
          setShowImagePicker(false);
        }}
        closeModal={() => setShowImagePicker(false)}
      />
    </View>
  );
}

const rules = {
  content: {
    required: {
      value: true,
      message: 'Content is required',
    },
  },
};
