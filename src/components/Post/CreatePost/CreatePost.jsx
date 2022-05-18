import { AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity, Image, View, Text, ToastAndroid, Alert, Modal } from 'react-native';

import { createPost, updatePost } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import getFullName from '../../../helpers/extractFullname';
import uploadToCloudinary from '../../../utils/uploadToCloudinary';
import CustomButton from '../../Button/Button';
import Camera from '../../Camera/Camera';
import ImagePicker from '../../ImagePicker/ImagePicker';
import useAuth from './../../../hooks/useAuth';
import Avatar from './../../Avatar/Avatar';
import TextInput from './../../TextInput/TextInput';
import styles from './CreatePost.styles';

export default function CreatePost({ name, closeModal, visible, editPost, refetchPosts }) {
  const { authData } = useAuth();
  const [cameraVisible, setCameraVisible] = useState(false);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState(editPost?.media);
  const [mediaChanged, setMediaChanged] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      content: editPost?.content,
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (media && mediaChanged) {
        const image = await uploadToCloudinary(media);
        data.media = image;
      } else if (!media) {
        data.media = null;
      }
      const result = !editPost
        ? await createPost({ ...data, UserId: authData.id })
        : await updatePost(data, editPost.id);
      if (result?.status === 200) {
        closeModal();
        await refetchPosts();
        const successMsg = !editPost ? 'Post created' : 'Post was edited';
        ToastAndroid.show(successMsg, ToastAndroid.LONG);
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
    <Modal animationType="slide" transparent visible={visible} onRequestClose={() => closeModal()}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.container}>
            <View style={styles.postHeader}>
              <Text style={styles.headerText}>Post Something</Text>
              <TouchableOpacity onPress={() => closeModal()}>
                <AntDesign name="closecircle" size={30} color={Colors.gray4} />
              </TouchableOpacity>
            </View>
            <View style={styles.userDataContainer}>
              <Avatar size={40} name={getFullName(authData)} />
              <Text style={styles.userName}>{getFullName(authData)}</Text>
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
                defaultValue={editPost?.content}
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
                setMedia(photo);
                setCameraVisible(false);
                setMediaChanged(true);
              }}
              closeModal={() => setCameraVisible(false)}
            />
            <ImagePicker
              visible={showImagePicker}
              allowsEditing={false}
              // aspect: [4, 3],
              setPhoto={(photo) => {
                photo && setMedia(photo);
                setShowImagePicker(false);
                setMediaChanged(true);
              }}
              closeModal={() => setShowImagePicker(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
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
