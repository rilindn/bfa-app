import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Controller } from 'react-hook-form';
import { View, Text } from 'react-native';

import Colors from '../../constants/Colors';
import styles from './SelectInput.styles';

const SelectInput = ({ options, control, name, rules, placeholder, errors }) => {
  const error = errors?.[name]?.message;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value } }) => {
        return (
          <View style={[styles.container, error && { borderColor: Colors.red }]}>
            <Picker selectedValue={value} onValueChange={onChange}>
              <Picker.Item
                label={placeholder}
                value=""
                enabled={false}
                color={Colors.placeholder}
              />
              {options.map((option) => (
                <Picker.Item label={option.label} value={option.value} key={option.value} />
              ))}
            </Picker>
            <Text style={styles.error}>{errors?.[name]?.message}</Text>
          </View>
        );
      }}
    />
  );
};

export default SelectInput;
