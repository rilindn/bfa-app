import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import React, { useState } from 'react';
import { TextInput, View, Text, Platform, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';
import { styles, stylesDark } from './DatePicker.styles';

const DatePicker = ({
  name,
  placeholder,
  title,
  minYear,
  textInputStyle,
  inputStyle,
  errors,
  labelStyle,
  darkMode,
  defaultValue,
  setValue,
}) => {
  const [focused, setFocused] = useState(false);
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(defaultValue || Date.now()));

  const error = errors?.[name]?.message;

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onDateChange = (event, value) => {
    setIsPickerShow(false);
    console.log('value', value);
    setDate(value);
    setValue(moment(value).format('MM/DD/YYYY').toString());
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, labelStyle, darkMode && stylesDark.title]}>
        {title ? title : placeholder}
      </Text>
      <TouchableOpacity
        onPress={() => showPicker()}
        style={[
          styles.inputCtn,
          inputStyle,
          focused && { borderColor: Colors.mainGreen },
          error && { borderColor: Colors.red },
          darkMode && stylesDark.inputCtn,
        ]}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={(darkMode && Colors.gray3 + 60) || Colors.gray3}
          value={moment(date).format('MM/DD/YYYY').toString()}
          selectionColor={Colors.green1}
          style={[styles.textInputStyle, textInputStyle, darkMode && stylesDark.textInputStyle]}
          editable={false}
        />
      </TouchableOpacity>
      <Text style={[styles.error, darkMode && stylesDark.error]}>{errors?.[name]?.message}</Text>
      {isPickerShow && (
        <DateTimePicker
          value={date || new Date(Date.now())}
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onDateChange}
        />
      )}
    </View>
  );
};
export default DatePicker;
