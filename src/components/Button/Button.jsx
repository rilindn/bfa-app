import React from 'react';
import { ActivityIndicator, TouchableOpacity, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import styles from './Button.styles';

const CustomButton = ({ label, onPress, style, labelStyle, disabled, loading, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]} disabled={disabled}>
      {!loading ? (
        <View style={styles.content}>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </View>
      ) : (
        <ActivityIndicator size={28} color={Colors.green1} animating />
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;
