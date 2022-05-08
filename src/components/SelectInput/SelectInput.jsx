import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Controller } from 'react-hook-form';
import { View, Text } from 'react-native';

import Colors from '../../constants/Colors';
import { styles, stylesDark } from './SelectInput.styles';

const SelectInput = ({
  options,
  control,
  labelStyle,
  name,
  rules,
  placeholder,
  errors,
  label,
  darkMode,
  selectInputStyle,
  defaultValue,
}) => {
  const error = errors?.[name]?.message;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, labelStyle, darkMode && stylesDark.title]}>
        {label || placeholder}
      </Text>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => {
          if (defaultValue && !value) {
            value = options.find(({ value }) => value === defaultValue)?.value;
          }
          return (
            <View
              style={[
                styles.inputCtn,
                error && { borderColor: Colors.red },
                darkMode && stylesDark.inputCtn,
              ]}>
              <Picker selectedValue={value} onValueChange={onChange}>
                <Picker.Item
                  label={placeholder}
                  value=""
                  enabled={false}
                  color={Colors.placeholder + 70}
                  style={
                    (styles.textInputStyle, selectInputStyle, darkMode && stylesDark.textInputStyle)
                  }
                />
                {options.map((option) => (
                  <Picker.Item
                    label={option.label}
                    value={option.value}
                    key={option.value}
                    color={darkMode && Colors.gray3}
                    style={darkMode && { color: Colors.black }}
                  />
                ))}
              </Picker>
              <Text style={styles.error}>{errors?.[name]?.message}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SelectInput;
