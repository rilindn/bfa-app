import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity, View, Text, ToastAndroid, Alert, Modal } from 'react-native';

import { report } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import useAuth from '../../../hooks/useAuth';
import CustomButton from '../../Button/Button';
import TextInput from '../../TextInput/TextInput';
import styles from './ReportForm.styles';

export default function ReportForm({ closeModal, visible, post }) {
  const { authData } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      console.log('data', data);
      const payload = {
        ...data,
        reporterId: authData.id,
        postId: post.id,
      };
      const result = await report(payload);
      if (result?.status === 200) {
        handleClose();
        const successMsg = 'Post reported!';
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
            <Text style={styles.headerText}>Report</Text>
            <TouchableOpacity onPress={() => closeModal()}>
              <AntDesign name="closecircle" size={30} color={Colors.gray4} />
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <TextInput
              textInputStyle={[styles.input]}
              name="reason"
              title="Reason"
              placeholder="Please describe what's the problem"
              control={control}
              multiline
              numberOfLines={10}
              rules={rules}
              errors={errors}
              darkMode
            />
            <CustomButton
              label="Report"
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

const rules = {
  required: {
    value: true,
    message: 'Description is required',
  },
};
