import { MaterialIcons, AntDesign, Entypo } from '@expo/vector-icons';
import { Camera as CameraRN } from 'expo-camera';
import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, ActivityIndicator, ToastAndroid, Text, Modal } from 'react-native';

import Colors from '../../constants/Colors';
import styles from './Camera.styles';

export default function Camera({ visible, setPhoto, closeModal, uploading }) {
  const cameraRef = useRef();
  const [cameraType, setCameraType] = useState(CameraRN.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [source, setSource] = useState(null);
  const [loading, setLoading] = useState(uploading);
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await CameraRN.requestCameraPermissionsAsync();
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
      prevCameraType === CameraRN.Constants.Type.back
        ? CameraRN.Constants.Type.front
        : CameraRN.Constants.Type.back
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
    const image = `data:image/jpg;base64,${source}`;
    try {
      setLoading(true);
      if (image) {
        setPhoto(image);
        // await cameraRef.current.resumePreview();
        setIsPreview(false);
      }
    } catch (err) {
      console.log(err.response.data);
      ToastAndroid.show('Please try again!', ToastAndroid.LONG);
    } finally {
      setLoading(false);
    }
  };

  const cancel = async () => {
    if (!isPreview) return closeModal();
    await cameraRef.current.resumePreview();
    setIsPreview(false);
  };

  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.container}>
        <CameraRN
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
          {(isPreview || uploading) && (
            <>
              <View style={styles.savePhotoContainer}>
                <TouchableOpacity
                  onPress={uploadPhoto}
                  activeOpacity={0.7}
                  style={styles.savePhotoButton}>
                  {loading || uploading ? (
                    <ActivityIndicator size="large" color={Colors.white} animating />
                  ) : (
                    <Entypo name="check" size={37} color={Colors.gray3} />
                  )}
                </TouchableOpacity>
              </View>
            </>
          )}
          {!isPreview && !uploading && (
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
    </Modal>
  );
}
