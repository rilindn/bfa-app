import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { Button } from 'react-native-ui-lib';

import Colors from '../../constants/Colors';
import styles from './Button.styles';

const CustomButton = ({ label, onPress, style, labelStyle, disabled, loading }) => {
  return (
    <Button
      label={!loading ? label : <ActivityIndicator size="small" color={Colors.green1} animating />}
      onPress={onPress}
      labelStyle={[styles.label, labelStyle]}
      style={[styles.button, style]}
      disabled={disabled}
    />
  );
};
export default CustomButton;
