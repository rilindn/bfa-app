import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity, View, Text, ToastAndroid, Alert, Modal } from 'react-native';

import { applyToVacancy } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import useAuth from '../../../hooks/useAuth';
import CustomButton from '../../Button/Button';
import TextInput from '../../TextInput/TextInput';
import styles from './ApplyForm.styles';

export default function ApplyForm({
  closeModal,
  visible,
  vacancy,
  setHasPlayerApplied,
  increaseVacancyApplications,
}) {
  const { authData } = useAuth();
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = {
        ...data,
        UserId: authData.id,
        VacancyId: vacancy.id,
      };
      const result = await applyToVacancy(payload);
      if (result?.status === 200) {
        handleClose();
        setHasPlayerApplied(true);
        increaseVacancyApplications();
        const successMsg = 'Application sent';
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
      <View style={styles.modalView}>
        <View style={styles.container}>
          <View style={styles.postHeader}>
            <Text style={styles.headerText}>Apply to vacancy</Text>
            <TouchableOpacity onPress={() => closeModal()}>
              <AntDesign name="closecircle" size={30} color={Colors.gray4} />
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <TextInput
              textInputStyle={[styles.input]}
              name="description"
              title="Description (optional)"
              placeholder="Write something about yourself"
              control={control}
              multiline
              numberOfLines={10}
              darkMode
            />
            <CustomButton
              label="Apply"
              onPress={handleSubmit(onSubmit)}
              style={styles.saveBtn}
              labelStyle={styles.saveLabel}
              loading={loading}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
