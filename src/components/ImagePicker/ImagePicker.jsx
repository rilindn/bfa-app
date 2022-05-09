import { AntDesign, Entypo } from '@expo/vector-icons';
import * as ImagePickerRN from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, ToastAndroid, Dimensions, Modal } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import Colors from '../../constants/Colors';
import styles from './ImagePicker.styles';

export default function ImagePicker({ visible, setPhoto, closePicker, allowsEditing, aspect }) {
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

    const pickerResult = await ImagePickerRN.launchImageLibraryAsync({
      mediaTypes: ImagePickerRN.MediaTypeOptions.Images,
      allowsEditing,
      aspect,
      quality: 1,
      base64: true,
    });
    if (!pickerResult?.cancelled) setPreview(pickerResult);
    else {
      setPhoto();
    }
  };

  const uploadPhoto = async () => {
    try {
      setLoading(true);
      if (preview.base64) {
        const image = `data:image/jpg;base64,${preview.base64}`;
        setPhoto(image);
        setPreview('');
      } else {
        closePicker();
      }
    } catch (err) {
      console.log(err.response.data);
      ToastAndroid.show('Please try again later!', ToastAndroid.LONG);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={closePicker}>
      <View style={styles.container}>
        {!preview ? (
          <>
            <Text style={styles.instructions}>
              To share a photo from your phone, just press the button below!
            </Text>
          </>
        ) : (
          <View style={styles.container}>
            <Image
              source={{ uri: preview.uri }}
              style={{
                width: Dimensions.get('window').width,
                flex: 1,
                resizeMode: 'contain',
              }}
            />
            <TouchableOpacity onPress={closePicker} style={styles.closeButton} activeOpacity={0.7}>
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
                {!loading ? (
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
