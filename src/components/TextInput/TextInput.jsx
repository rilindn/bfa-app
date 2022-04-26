import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { TextInput, View, Text } from 'react-native';

import Colors from '../../constants/Colors';
import styles from './TextInput.styles';

const CustomTextInput = ({
  control,
  name,
  placeholder,
  title,
  rules,
  textInputStyle,
  inputStyle,
  secureTextEntry,
  errors,
}) => {
  const [focused, setFocused] = useState(false);
  const error = errors?.[name]?.message;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title ? title : placeholder}</Text>
      <View
        style={[
          styles.inputCtn,
          inputStyle,
          focused && { borderColor: Colors.mainGreen },
          error && { borderColor: Colors.red },
        ]}>
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={Colors.placeholder}
              style={[styles.textInputStyle, textInputStyle]}
              onFocus={() => setFocused(true)}
              onEndEditing={() => setFocused(false)}
              value={value}
              onChangeText={onChange}
              secureTextEntry={secureTextEntry}
              selectionColor={Colors.green1}
              autoCapitalize="none"
            />
          )}
        />
      </View>
      <Text style={styles.error}>{errors?.[name]?.message}</Text>
    </View>
  );
};
export default CustomTextInput;
