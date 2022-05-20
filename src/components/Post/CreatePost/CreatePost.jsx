import { AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { Video } from 'expo-av';
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

export default function CreatePost({ closeModal, visible, editPost, refetchPosts }) {
  const { authData } = useAuth();
  const [cameraVisible, setCameraVisible] = useState(false);
  const [showImagePicker, setShowMediaPicker] = useState(false);
  const [loading, setLoading] = useState(false);
  const [media, setMedia] = useState(editPost?.media);
  const [mediaChanged, setMediaChanged] = useState(false);
  const [videoUri, setVideoUri] = useState();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      content: editPost?.content || '',
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (media && mediaChanged) {
        const uploadedMedia = await uploadToCloudinary(media);
        data.media = uploadedMedia;
      } else if (!media) {
        data.media = null;
      }
      const result = !editPost
        ? await createPost({ ...data, UserId: authData.id })
        : await updatePost(data, editPost.id);
      if (result?.status === 200) {
        handleClose();
        if (refetchPosts) await refetchPosts();

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

  const handleClose = () => {
    closeModal();
    reset();
    setVideoUri();
    setMedia();
  };

  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={() => handleClose()}>
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
              />
              {media && (
                <View style={styles.mediaPreview}>
                  <TouchableOpacity
                    onPress={() => {
                      setMedia();
                      setVideoUri();
                    }}
                    style={styles.removePreview}>
                    <AntDesign name="closecircle" size={18} color={Colors.gray3} />
                  </TouchableOpacity>
                  {!videoUri ? (
                    <Image
                      style={styles.media}
                      source={{
                        uri: media,
                      }}
                    />
                  ) : (
                    <Video
                      style={styles.media}
                      source={{
                        uri: videoUri,
                      }}
                      resizeMode="cover"
                    />
                  )}
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
                  onPress={() => setShowMediaPicker(true)}>
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
              allowVideos
              setSelectedMedia={(photo, uri) => {
                setMedia(photo);
                setVideoUri(uri);
                setShowMediaPicker(false);
                setMediaChanged(true);
              }}
              closeModal={() => setShowMediaPicker(false)}
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
