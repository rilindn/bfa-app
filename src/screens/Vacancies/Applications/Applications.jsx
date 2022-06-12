import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';

import { createChat, getVacancyApplications, updateApplication } from '../../../api/ApiMethods';
import Avatar from '../../../components/Avatar/Avatar';
import CustomButton from '../../../components/Button/Button';
import Colors from '../../../constants/Colors';
import { fontSizes } from '../../../constants/Typography';
import { positions } from '../../../data/positions';
import formatDate from '../../../helpers/formatDate';
import useAuth from './../../../hooks/useAuth';
import styles from './Applications.styles';

export default function Applications({ route, navigation }) {
  const [applications, setApplications] = useState([]);
  const [showSendMsgModal, setShowSendMsgModal] = useState(false);
  const { authData } = useAuth();
  const { id, position } = route.params;
  navigation.setOptions({
    title: `Applications - ${positions.find(({ value }) => value === position)?.label}`,
  });

  const fetchApplications = async () => {
    const result = await getVacancyApplications(id);
    setApplications(result);
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleUpdate = (status, id) => {
    const updatedApplications = [];
    applications?.map((application) => {
      if (application.id === id) {
        application.status = status;
        updatedApplications.push({ ...application });
      } else updatedApplications.push(application);
    });

    setApplications(updatedApplications);
  };

  const handleEdit = async (status, id) => {
    const result = await updateApplication({ status }, id);
    if (result.status === 200) {
      handleUpdate(status, id);
      if (status === 'Accepted') setShowSendMsgModal(id);
    }
  };

  const newChatMessage = async (secondUser) => {
    const payload = {
      firstUser: authData.id,
      secondUser,
    };
    const result = await createChat(payload);
    result && navigation.navigate('Messages');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={applications}
        renderItem={({ item }) =>
          _renderitem({
            item,
            navigation,
            handleEdit,
            showSendMsgModal,
            setShowSendMsgModal,
            newChatMessage,
          })
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const _renderitem = ({
  item,
  navigation,
  handleEdit,
  showSendMsgModal,
  setShowSendMsgModal,
  newChatMessage,
}) => {
  const fullName = `${item.User?.Player?.firstName} ${item.User?.Player?.lastName}`;
  const { status, description } = item;

  return (
    <View style={styles.singleItemContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => navigation.navigate('ViewProfile', { id: item.UserId })}
          style={styles.userDataContainer}>
          <Avatar
            name={fullName}
            size={45}
            initialStyle={{ fontSize: fontSizes.large }}
            image={item.User?.profilePic}
          />
          <View style={styles.applicationUser}>
            <View style={styles.dateContainer}>
              <Text style={styles.name}>{fullName}</Text>
              <Text style={styles.date}>{formatDate(item?.createdAt)}</Text>
            </View>
            <View style={styles.statusContainer}>
              {status === 'Pending' && (
                <MaterialIcons name="pending-actions" size={24} color={Colors.orange} />
              )}
            </View>
          </View>
        </TouchableOpacity>
      </View>
      {!!description && (
        <View style={styles.content}>
          <Text style={styles.descriptionLabel}>Description:</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      )}
      <View style={styles.buttonsContainer}>
        {status === 'Pending' ? (
          <>
            <CustomButton
              label="Accept"
              style={styles.acceptBtn}
              onPress={() => {
                handleEdit('Accepted', item.id);
              }}
              labelStyle={{ fontSize: fontSizes.default }}
            />
            <CustomButton
              label="Reject"
              style={styles.rejectBtn}
              onPress={() => handleEdit('Rejected', item.id)}
              labelStyle={{ fontSize: fontSizes.default }}
            />
          </>
        ) : (
          <CustomButton
            label={status}
            style={[
              status === 'Rejected'
                ? { backgroundColor: 'rgba(352, 102, 52, 0.9)' }
                : { backgroundColor: Colors.mainGreen },
            ]}
          />
        )}
        <Modal
          animationType="slide"
          transparent
          visible={showSendMsgModal === item.id}
          onRequestClose={() => setShowSendMsgModal(false)}>
          <View style={styles.modalView}>
            <View style={styles.modalContainer}>
              <View style={styles.postHeader}>
                <Text style={styles.headerText}>Send a message</Text>
                <TouchableOpacity onPress={() => setShowSendMsgModal(false)}>
                  <AntDesign name="closecircle" size={30} color={Colors.gray4} />
                </TouchableOpacity>
              </View>
              <View style={styles.form}>
                <Text style={styles.msgText}>Do you want to send a message to {fullName}?</Text>
                <View style={styles.buttonsModal}>
                  <CustomButton
                    label="Message"
                    onPress={() => newChatMessage(item.UserId)}
                    style={styles.messageBtn}
                    labelStyle={styles.saveLabel}
                  />
                  <CustomButton
                    label="No"
                    onPress={() => setShowSendMsgModal(false)}
                    style={styles.declineMsgBtn}
                    labelStyle={styles.saveLabel}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};
