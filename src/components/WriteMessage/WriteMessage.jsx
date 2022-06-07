import { Feather } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, TouchableOpacity } from 'react-native';
import { Divider, Menu } from 'react-native-paper';
import { View } from 'react-native-ui-lib';

import Colors from '../../constants/Colors';
import uploadToCloudinary from '../../utils/uploadToCloudinary';
import Camera from '../Camera/Camera';
import ImagePicker from '../ImagePicker/ImagePicker';
import SvgIcon from '../SvgIcon/SvgIcon';
import TextInput from '../TextInput/TextInput';
import styles from './WriteMessage.styles';

const WriteMessage = ({ handleSendMessage }) => {
  const { control, handleSubmit, watch, reset } = useForm();
  const [cameraVisible, setCameraVisible] = useState(false);
  const [showImagePicker, setShowMediaPicker] = useState(false);
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    reset();
    handleSendMessage({ data });
  };

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const uploadMedia = async (photo) => {
    try {
      setLoading(true);
      const image = await uploadToCloudinary(photo);
      if (!image) return;
      const data = {
        message: image,
      };
      handleSendMessage({ data, isMedia: true });
    } finally {
      setLoading(false);
      setCameraVisible(false);
      setShowMediaPicker(false);
    }
  };

  return (
    <View style={styles.bottomContainer}>
      {!isKeyboardVisible && (
        <>
          {/* <Avatar name={userName} size={45} image={authData?.profilePic} /> */}
          <View style={styles.avatar}>
            <Menu
              visible={showAvatarMenu}
              onDismiss={() => {
                setShowAvatarMenu(false);
              }}
              contentStyle={styles.avatarMenu}
              anchor={
                <TouchableOpacity onPress={() => setShowAvatarMenu(true)}>
                  <Feather name="image" size={30} color={Colors.light} />
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
                  setShowMediaPicker(true);
                  setShowAvatarMenu(false);
                }}
                title="Choose from gallery"
              />
            </Menu>
            <Camera
              uploading={loading}
              visible={cameraVisible}
              setPhoto={uploadMedia}
              closeModal={() => setCameraVisible(false)}
            />
            <ImagePicker
              visible={showImagePicker}
              allowsEditing={false}
              uploading={loading}
              // aspect={[4, 3]}
              setSelectedMedia={uploadMedia}
              closeModal={() => setShowMediaPicker(false)}
            />
          </View>
        </>
      )}
      <TextInput
        containerStyle={[
          { marginBottom: 0 },
          !isKeyboardVisible ? { width: '70%' } : { width: '85%' },
        ]}
        inputStyle={styles.messageContainer}
        name="message"
        control={control}
        darkMode
        noTitle
        multiline
        numberOfLines={6}
        placeholder="Send a message"
      />
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={[styles.buttonContainer, watch('message') && { backgroundColor: Colors.mainGreen }]}
        disabled={!watch('message')}>
        <SvgIcon name="send" width={25} height={25} />
      </TouchableOpacity>
    </View>
  );
};
export default WriteMessage;
