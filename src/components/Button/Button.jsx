import React from 'react';
import { Button } from 'react-native-ui-lib';

import styles from './Button.styles';

const CustomButton = ({ label, onPress, style, labelStyle, disabled }) => {
  return (
    <Button
      label={label}
      onPress={onPress}
      labelStyle={[styles.label, labelStyle]}
      style={[styles.button, style]}
      disabled={disabled}
    />
  );
};
export default CustomButton;
