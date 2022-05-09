import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './Avatar.styles';

export default function Avatar({
  image,
  size = 50,
  name,
  avatarContainer,
  imageStyle,
  initialStyle,
}) {
  const [initials, setInitials] = useState('');

  const extractInitials = () => {
    const fullName = name?.split(' ');
    const result = (fullName?.[0]?.charAt(0) || '') + (fullName?.[1]?.charAt(0) || '');
    setInitials(result);
  };
  useEffect(() => {
    extractInitials();
  }, [name]);

  return (
    <View
      style={[
        styles.avatarContainer,
        avatarContainer,
        size && { width: size, height: size, borderRadius: size },
      ]}>
      {!image ? (
        <Text style={[styles.initials, initialStyle, { fontSize: size / 2.5 }]}>{initials}</Text>
      ) : (
        <Image
          style={[
            styles.imageStyle,
            imageStyle,
            size && { width: size, height: size, borderRadius: size },
          ]}
          source={{
            uri: image,
          }}
        />
      )}
    </View>
  );
}
