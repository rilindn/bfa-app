import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './Avatar.styles';

export default function Avatar({ image, name, avatarContainer, imageStyle, initialStyle }) {
  const [initials, setInitials] = useState('');

  const fullName = name.split(' ');

  const extractInitials = () => {
    const result = fullName[0].charAt(0) + (fullName?.[1]?.charAt(0) || '');
    console.log(result);
    setInitials(result);
  };
  useEffect(() => {
    extractInitials();
  }, []);

  if (!image) {
    return (
      <View style={[styles.avatarContainer, avatarContainer]}>
        <Text style={[styles.initials, initialStyle]}>{initials}</Text>
      </View>
    );
  }
  return (
    <View style={avatarContainer}>
      <Image
        style={[styles.imageStyle, imageStyle]}
        source={{
          uri: image,
        }}
      />
    </View>
  );
}
