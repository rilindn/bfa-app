import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import Colors from '../../constants/Colors';
import styles from './PhotoView.styles';

export default function CameraRN({ route, navigation }) {
  const photo = route.params?.photo;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.closeButton}
        activeOpacity={0.7}>
        <AntDesign name="close" size={32} color={Colors.light} />
      </TouchableOpacity>
      <View style={styles.previewContainer}>
        <Image
          source={{
            uri: photo,
          }}
          style={styles.photo}
        />
      </View>
    </View>
  );
}
