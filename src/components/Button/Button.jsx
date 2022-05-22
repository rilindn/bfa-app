import React from 'react';
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';

import Colors from '../../constants/Colors';
import styles from './Button.styles';

const CustomButton = ({ label, onPress, style, labelStyle, disabled, loading }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]} disabled={disabled}>
      {!loading ? (
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      ) : (
        <ActivityIndicator size={28} color={Colors.green1} animating />
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;
