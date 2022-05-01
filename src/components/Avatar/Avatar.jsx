import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './Avatar.styles';

export default function Avatar({
  image,
  firstName,
  lastName,
  avatarContainer,
  imageStyle,
  initialStyle,
}) {
  const [initials, setInitials] = useState('');

  const extractInitials = () => {
    const result = firstName.charAt(0) + lastName.charAt(0);
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
