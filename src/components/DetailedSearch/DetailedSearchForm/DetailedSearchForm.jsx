import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, Alert, ScrollView } from 'react-native';

import { getFilteredPlayers } from '../../../api/ApiMethods';
import { nationalities } from '../../../data/nationalities';
import { positions } from '../../../data/positions';
import useAuth from '../../../hooks/useAuth';
import CustomButton from '../../Button/Button';
import SelectInput from '../../SelectInput/SelectInput';
import TextInput from '../../TextInput/TextInput';
import styles from './DetailedSearchForm.styles';

const DetailedSearchForm = ({ setPlayerResults, setShowResults }) => {
  const [loading, setLoading] = useState(false);
  const { authData } = useAuth();
  const { control, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const params = {
        ...data,
        exclude: authData.id,
      };
      const result = await getFilteredPlayers(params);
      if (result?.status === 200) {
        setPlayerResults(result.data);
        setShowResults(true);
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error occurred!', 'Please try again!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <View style={styles.genInfo}>
        <Text style={styles.changeInfo}>Search for players in details</Text>
      </View>
      <View style={styles.inputsContainer}>
        <SelectInput
          name="position"
          placeholder="Position"
          control={control}
          options={positions}
          darkMode
        />
        <SelectInput
          name="gender"
          placeholder="Gender"
          control={control}
          options={[
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
          ]}
          darkMode
        />
        <SelectInput
          style={styles.input}
          name="foot"
          label="Foot"
          placeholder="Choose foot"
          control={control}
          options={[
            { label: 'Left', value: 'Left' },
            { label: 'Right', value: 'Right' },
            { label: 'Both', value: 'Both' },
          ]}
          darkMode
        />
        <SelectInput
          name="nationality"
          placeholder="Nationality"
          control={control}
          options={nationalities}
          darkMode
        />
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="city"
          placeholder="City"
          control={control}
        />
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="minHeight"
          placeholder="Min. height"
          control={control}
          keyboardType="decimal-pad"
        />
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="maxHeight"
          placeholder="Max. height"
          control={control}
          keyboardType="decimal-pad"
        />
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="minWeight"
          placeholder="Min. weight"
          control={control}
          keyboardType="decimal-pad"
        />
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="maxWeight"
          placeholder="Max. weight"
          control={control}
          keyboardType="decimal-pad"
        />
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="minAge"
          placeholder="Min. age"
          control={control}
          keyboardType="number-pad"
        />
        <TextInput
          inputStyle={styles.input}
          darkMode
          name="maxAge"
          placeholder="Max. age"
          control={control}
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton
          label="Search"
          onPress={handleSubmit(onSubmit)}
          style={styles.saveBtn}
          labelStyle={styles.saveLabel}
          loading={loading}
        />
      </View>
    </ScrollView>
  );
};

export default DetailedSearchForm;
