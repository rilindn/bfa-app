import { AntDesign, Entypo } from '@expo/vector-icons';
import { Video } from 'expo-av';
import * as FileSystem from 'expo-file-system';
import * as ImagePickerRN from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, ToastAndroid, Modal } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import Colors from '../../constants/Colors';
import styles from './ImagePicker.styles';

export default function ImagePicker({
  visible,
  setSelectedMedia,
  closeModal,
  allowsEditing,
  aspect,
  allowVideos,
  uploading,
}) {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    visible && openImagePickerAsync();
  }, [visible]);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePickerRN.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }
    const mediaTypes = !allowVideos
      ? ImagePickerRN.MediaTypeOptions.Images
      : ImagePickerRN.MediaTypeOptions.All;

    const pickerResult = await ImagePickerRN.launchImageLibraryAsync({
      mediaTypes,
      allowsEditing,
      aspect,
      quality: 1,
      base64: true,
    });

    if (!pickerResult?.cancelled) setPreview(pickerResult);
    else {
      setSelectedMedia();
    }
  };

  const uploadPhoto = async () => {
    try {
      setLoading(true);
      if (preview?.type === 'video') {
        try {
          const base64video = await FileSystem.readAsStringAsync(preview?.uri, {
            encoding: 'base64',
          });
          const image = `data:video/mp4;base64,${base64video}`;
          setSelectedMedia(image, preview?.uri);
        } catch (err) {
          console.log('error', err);
        }
      }
      if (preview?.type === 'image' && preview.base64) {
        const image = `data:image/jpg;base64,${preview.base64}`;
        setSelectedMedia(image);
        // setPreview('');
      } else {
        closeModal();
      }
    } catch (err) {
      console.log(err);
      ToastAndroid.show('Please try again later!', ToastAndroid.LONG);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={closeModal}>
      <View style={styles.container}>
        {!preview && !uploading ? (
          <>
            <Text style={styles.instructions}>
              To share a photo from your phone, just press the button below!
            </Text>
          </>
        ) : (
          <View style={styles.container}>
            {preview?.type === 'image' ? (
              <Image source={{ uri: preview?.uri }} style={styles.image} />
            ) : (
              <Video
                style={styles.video}
                source={{
                  uri: preview?.uri,
                }}
                shouldPlay
                useNativeControls
                resizeMode="cover"
                isLooping={false}
                volume={0.5}
              />
            )}
            <TouchableOpacity onPress={closeModal} style={styles.closeButton} activeOpacity={0.7}>
              <AntDesign name="close" size={32} color={Colors.light} />
            </TouchableOpacity>
            <View style={styles.savePhotoContainer}>
              <TouchableOpacity
                onPress={openImagePickerAsync}
                activeOpacity={0.7}
                style={styles.anotherPhotoButton}>
                <Text style={styles.takeAnotherText}>Select another</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={uploadPhoto}
                activeOpacity={0.7}
                style={styles.savePhotoButton}>
                {!loading && !uploading ? (
                  <Entypo name="check" size={37} color={Colors.gray3} />
                ) : (
                  <ActivityIndicator size="small" color={Colors.white} animating />
                )}
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </Modal>
  );
}
