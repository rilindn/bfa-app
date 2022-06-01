import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import { TextInput as RNTextInput, View, Text } from 'react-native';

import Colors from '../../constants/Colors';
import { styles, stylesDark } from './TextInput.styles';

const TextInput = ({
  control,
  name,
  placeholder,
  title,
  rules,
  textInputStyle,
  inputStyle,
  secureTextEntry,
  errors,
  numberOfLines,
  labelStyle,
  darkMode,
  multiline,
  defaultValue,
  keyboardType,
  noTitle,
  containerStyle,
}) => {
  const [focused, setFocused] = useState(false);
  const error = errors?.[name]?.message;
  return (
    <View style={[styles.container, containerStyle]}>
      {!noTitle && (
        <Text style={[styles.title, labelStyle, darkMode && stylesDark.title]}>
          {title ? title : placeholder}
        </Text>
      )}
      <View
        style={[
          styles.inputCtn,
          inputStyle,
          focused && { borderColor: Colors.mainGreen },
          error && { borderColor: Colors.red },
          darkMode && stylesDark.inputCtn,
        ]}>
        <Controller
          control={control}
          name={name}
          rules={rules}
          render={({ field: { onChange, value } }) => (
            <RNTextInput
              placeholder={placeholder}
              placeholderTextColor={(darkMode && Colors.gray3 + 60) || Colors.gray3}
              onFocus={() => setFocused(true)}
              onEndEditing={() => setFocused(false)}
              value={value}
              onChangeText={onChange}
              secureTextEntry={secureTextEntry}
              selectionColor={Colors.green1}
              autoCapitalize="none"
              multiline={multiline}
              numberOfLines={numberOfLines}
              style={[styles.textInputStyle, textInputStyle, darkMode && stylesDark.textInputStyle]}
              defaultValue={defaultValue}
              keyboardType={keyboardType}
            />
          )}
        />
      </View>
      <Text style={[styles.error, darkMode && stylesDark.error]}>{errors?.[name]?.message}</Text>
    </View>
  );
};
export default TextInput;
