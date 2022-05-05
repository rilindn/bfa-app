import { MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons';
import axios from 'axios';
import { Camera } from 'expo-camera';
import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, ActivityIndicator, ToastAndroid, Text } from 'react-native';

import Colors from '../../constants/Colors';
import useAuth from './../../hooks/useAuth';
import styles from './Camera.styles';

export default function CameraRN({ navigation }) {
  const cameraRef = useRef();
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [source, setSource] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const { authData } = useAuth();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const onSnap = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.1, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      setSource(data.base64);

      if (data) {
        setIsPreview(true);
        await cameraRef.current.pausePreview();
      }
    }
  };

  const uploadPhoto = async () => {
    const base64Img = `data:image/jpg;base64,${source}`;
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
      console.log('first', authData.id);
      if (result.data.secure_url) {
        ToastAndroid.show('Photo has been uploaded', ToastAndroid.LONG);
        navigation.navigate('EditProfile', {
          photo: result.data.secure_url,
        });
      }
    } catch (err) {
      console.log(err.response.data);
      ToastAndroid.show('Please try again later!', ToastAndroid.LONG);
    } finally {
      setLoading(false);
    }
  };

  const cancel = async () => {
    if (!isPreview) return navigation.goBack();
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.cameraContainer}
        type={cameraType}
        onCameraReady={onCameraReady}
        ratio="4:3"
        pictureSize="4:3"
      />
      <View style={styles.previewContainer}>
        <TouchableOpacity onPress={cancel} style={styles.closeButton} activeOpacity={0.7}>
          <AntDesign name="close" size={32} color={Colors.light} />
        </TouchableOpacity>
        {isPreview && (
          <>
            <View style={styles.savePhotoContainer}>
              <TouchableOpacity
                onPress={uploadPhoto}
                activeOpacity={0.7}
                style={styles.savePhotoButton}>
                {!loading ? (
                  <Entypo name="check" size={37} color={Colors.gray3} />
                ) : (
                  <ActivityIndicator size="large" color={Colors.white} animating />
                )}
              </TouchableOpacity>
            </View>
          </>
        )}
        {!isPreview && (
          <View style={styles.bottomButtonsContainer}>
            <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
              <MaterialIcons name="flip-camera-ios" size={28} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              disabled={!isCameraReady}
              onPress={onSnap}
              style={styles.capture}
            />
          </View>
        )}
      </View>
    </View>
  );
}
