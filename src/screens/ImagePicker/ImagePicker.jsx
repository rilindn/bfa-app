import { AntDesign, Entypo } from '@expo/vector-icons';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  Dimensions,
} from 'react-native';
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
      quality: 1,
      base64: true,
    });
    console.log(pickerResult.uri);
    setPreview(pickerResult.uri);
    // if (pickerResult.base64) {
    //   const base64Img = `data:image/jpg;base64,${pickerResult.base64}`;
    //   const apiUrl = 'https://api.cloudinary.com/v1_1/ball-for-all/image/upload';
    //   const data = {
    //     file: base64Img,
    //     upload_preset: 'rkahqfhc',
    //   };

    //   try {
    //     setLoading(true);
    //     const result = await axios.post(apiUrl, {
    //       ...data,
    //     });
    //     console.log('first', result.data);
    //     if (result.data.secure_url) {
    //       ToastAndroid.show('Photo has been uploaded', ToastAndroid.LONG);
    //     }
    //   } catch (err) {
    //     console.log(err.response.data);
    //     ToastAndroid.show('Please try again later!', ToastAndroid.LONG);
    //   } finally {
    //     setLoading(false);
    //     navigation.goBack();
    //   }
    // }
  };

  return (
    <View style={styles.container}>
      {!preview ? (
        <>
          <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
          <Text style={styles.instructions}>
            To share a photo from your phone with a friend, just press the button below!
          </Text>

          <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
            <Text style={styles.buttonText}>Pick a photo</Text>
          </TouchableOpacity>
          <Text>{preview}</Text>
        </>
      ) : (
        <View style={styles.container}>
          <Image
            source={{ uri: preview }}
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
            }}
          />
          <TouchableOpacity style={styles.closeButton} activeOpacity={0.7}>
            <AntDesign name="close" size={32} color={Colors.light} />
          </TouchableOpacity>
          <View style={styles.savePhotoContainer}>
            <TouchableOpacity
              // onPress={uploadPhoto}
              activeOpacity={0.7}
              style={styles.savePhotoButton}>
              {!loading ? (
                <Entypo name="check" size={37} color={Colors.gray3} />
              ) : (
                <ActivityIndicator size="large" color={Colors.white} animating />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={uploadPhoto}
              activeOpacity={0.7}
              style={styles.savePhotoButton}>
              <Text>Take another</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
