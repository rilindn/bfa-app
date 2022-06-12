import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity, View, Text, ToastAndroid, Alert, Modal, ScrollView } from 'react-native';

import { createVacancy, updateVacancy } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import { positions } from '../../../data/positions';
import useAuth from '../../../hooks/useAuth';
import CustomButton from '../../Button/Button';
import SelectInput from '../../SelectInput/SelectInput';
import TextInput from '../../TextInput/TextInput';
import styles from './VacancyForm.styles';

export default function VacancyForm({
  closeModal,
  visible,
  editVacancy,
  refetchVacancies,
  vacancies,
  setVacancies,
}) {
  const { authData } = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      position: editVacancy?.position || '',
      foot: editVacancy?.foot || '',
      about: editVacancy?.about || '',
      ageFrom: editVacancy?.ageFrom?.toString(),
      ageTo: editVacancy?.ageTo?.toString(),
      height: editVacancy?.height?.toString(),
    },
  });

  const handleUpdate = (data) => {
    const updatedVacancies = [];
    vacancies?.map((vacancy) => {
      if (vacancy.id === editVacancy.id) updatedVacancies.push({ ...vacancy, ...data });
      else updatedVacancies.push(vacancy);
    });

    return updatedVacancies;
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = !editVacancy
        ? await createVacancy({ ...data, ClubId: authData.Club.clubId })
        : await updateVacancy(data, editVacancy.id);

      if (editVacancy) {
        const updatedValues = handleUpdate(data);
        setVacancies(updatedValues);
      }

      if (result?.status === 200) {
        handleClose();
        if (refetchVacancies) await refetchVacancies();

        const successMsg = !editVacancy ? 'Vacancy created' : 'Post was edited';
        ToastAndroid.show(successMsg, ToastAndroid.LONG);
      } else {
        const errorMsg = result.response.data.errors?.[0]?.message || result.response.data;
        Alert.alert('Error occurred!', JSON.stringify(errorMsg));
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error occurred!', 'Please try again!');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    closeModal();
    reset();
  };

  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={() => handleClose()}>
      <ScrollView
        style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}
        scrollEnabled={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.modalView}>
          <View style={styles.container}>
            <View style={styles.postHeader}>
              <Text style={styles.headerText}>{editVacancy ? 'Edit' : 'Post'} Vacancy</Text>
              <TouchableOpacity onPress={() => closeModal()}>
                <AntDesign name="closecircle" size={30} color={Colors.gray4} />
              </TouchableOpacity>
            </View>
            <View style={styles.form}>
              <SelectInput
                name="position"
                placeholder="Position"
                control={control}
                rules={rules.position}
                errors={errors}
                options={positions}
                darkMode
              />
              <SelectInput
                name="foot"
                placeholder="Foot"
                control={control}
                options={[
                  { label: 'Left', value: 'Left' },
                  { label: 'Right', value: 'Right' },
                  { label: 'Both', value: 'Both' },
                ]}
                darkMode
              />
              <TextInput
                name="ageFrom"
                placeholder="Age From"
                control={control}
                rules={rules.ageFrom}
                errors={errors}
                keyboardType="number-pad"
                darkMode
              />
              <TextInput
                name="ageTo"
                placeholder="Age To"
                control={control}
                rules={{
                  ...rules.ageTo,
                  validate: (value) =>
                    value >= watch('ageFrom') || 'Age to must be greater than age from',
                }}
                errors={errors}
                keyboardType="number-pad"
                darkMode
              />
              <TextInput
                name="height"
                placeholder="Height"
                control={control}
                keyboardType="decimal-pad"
                darkMode
              />
              <TextInput
                textInputStyle={[styles.input]}
                name="about"
                placeholder="About"
                control={control}
                multiline
                numberOfLines={6}
                darkMode
              />
              <CustomButton
                label={editVacancy ? 'Save' : 'Post'}
                onPress={handleSubmit(onSubmit)}
                style={styles.saveBtn}
                labelStyle={styles.saveLabel}
                loading={loading}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
}

const rules = {
  position: {
    required: {
      value: true,
      message: 'Position is required',
    },
  },
  ageTo: {
    min: {
      value: 15,
      message: 'Age must be at least 15',
    },
    max: {
      value: 45,
      message: 'Age must not exceed 45',
    },
  },
  ageFrom: {
    min: {
      value: 15,
      message: 'Age must be at least 15',
    },
    max: {
      value: 45,
      message: 'Age must not exceed 45',
    },
  },
};
