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
}) => {
  const [focused, setFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title ? title : placeholder}</Text>
      <View style={[styles.inputCtn, inputStyle, focused && { borderColor: Colors.mainGreen }]}>
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={Colors.gray3}
              style={[styles.textInputStyle, textInputStyle]}
              onFocus={() => setFocused(true)}
              onEndEditing={() => setFocused(false)}
              value={value}
              onChangeText={onChange}
              secureTextEntry={secureTextEntry}
            />
          )}
        />
      </View>
    </View>
  );
};
export default CustomTextInput;
