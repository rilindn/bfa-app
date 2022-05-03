import React from 'react';
import { useForm } from 'react-hook-form';
import { View, Text } from 'react-native';

import SelectInput from '../../SelectInput/SelectInput';
import TextInput from '../../TextInput/TextInput';
import CustomButton from './../../Button/Button';
import styles from './EditPlayerCharacteristics.styles';

const EditPlayerCharacteristics = ({ navigation }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    console.log('first', data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.genInfo}>
        <Text style={styles.changeInfo}>Fill in your characteristics</Text>
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          name="height"
          placeholder="Height"
          control={control}
          rules={rules.height}
          errors={errors}
          darkMode
        />
        <TextInput
          style={styles.input}
          name="weight"
          placeholder="Weight"
          control={control}
          rules={rules.weight}
          errors={errors}
          darkMode
        />
        <TextInput
          style={styles.input}
          name="secondPosition"
          placeholder="Second position"
          control={control}
          rules={rules.secondPosition}
          errors={errors}
          darkMode
        />
        <TextInput
          style={styles.input}
          name="backNumber"
          placeholder="Your back number"
          control={control}
          rules={rules.backNumber}
          errors={errors}
          darkMode
        />
        <SelectInput
          style={styles.input}
          name="foot"
          placeholder="foot"
          control={control}
          rules={rules.foot}
          errors={errors}
          options={[
            { label: 'Left', value: 'left' },
            { label: 'right', value: 'right' },
            { label: 'both', value: 'both' },
          ]}
          darkMode
        />
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton
          label="Save Changes"
          onPress={handleSubmit(onSubmit)}
          style={styles.saveBtn}
          labelStyle={styles.saveLabel}
        />
        <CustomButton
          label="Cancel"
          onPress={() => navigation.navigate('Profile')}
          style={styles.cancelBtn}
          labelStyle={styles.cancelLabel}
        />
      </View>
    </View>
  );
};

const rules = {
  height: {
    minLength: {
      value: 50,
      message: 'Height must be more than 50 cm',
    },
    maxLength: {
      value: 250,
      message: 'Height must not be more or less than 250 cm',
    },
  },
  weight: {
    minLength: {
      value: 50,
      message: 'Weight must be more than 30 kg',
    },
    maxLength: {
      value: 250,
      message: 'Weight must not be more or less than 150 kg',
    },
  },
  secondPosition: {
    minLength: {
      value: 2,
      message: 'Second Position must be more than 2 characters',
    },
    maxLength: {
      value: 50,
      message: 'Second Position must not be more or less than 50 characters',
    },
  },
  backNumber: {
    minLength: {
      value: 1,
      message: 'Your back number must be more than 1',
    },
    maxLength: {
      value: 99,
      message: 'Your back number must not be more or less than 99',
    },
  },
};

export default EditPlayerCharacteristics;
