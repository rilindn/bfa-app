import { AntDesign, Entypo } from '@expo/vector-icons';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, ToastAndroid, Dimensions } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import Colors from '../../constants/Colors';
import styles from './ImagePicker.styles';

export default function App({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState('');

  useEffect(() => {
    !preview && openImagePickerAsync();
  }, []);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    console.log(pickerResult.width);
    console.log(pickerResult.height);
    setPreview(pickerResult);
  };

  const uploadPhoto = async () => {
    const base64Img = `data:image/jpg;base64,${preview.base64}`;
    const apiUrl = 'https://api.cloudinary.com/v1_1/ball-for-all/image/upload';
    const data = {
      file: base64Img,
      upload_preset: 'rkahqfhc',
    };

    try {
      setLoading(true);
      const result = await axios.post(apiUrl, {
        ...data,
      });
      console.log('first', result.data);
      if (result.data.secure_url) {
        navigation.navigate('Profile', {
          photo: result.data.secure_url,
        });
        ToastAndroid.show('Photo has been uploaded', ToastAndroid.LONG);
      }
    } catch (err) {
      console.log(err.response.data);
      ToastAndroid.show('Please try again later!', ToastAndroid.LONG);
      navigation.goBack();
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {!preview ? (
        <>
          <Text style={styles.instructions}>
            To share a photo from your phone with a friend, just press the button below!
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
          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.closeButton}
            activeOpacity={0.7}>
            <AntDesign name="close" size={32} color={Colors.light} />
          </TouchableOpacity>
          <View style={styles.savePhotoContainer}>
            <TouchableOpacity
              onPress={openImagePickerAsync}
              activeOpacity={0.7}
              style={styles.anotherPhotoButton}>
              <Text style={styles.takeAnotherText}>Take another</Text>
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
  );
}
