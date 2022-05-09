import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

import useAuth from '../../../hooks/useAuth';
import Avatar from '../../Avatar/Avatar';
import CreatePost from '../CreatePost/CreatePost';
import styles from './PostSomething.styles';

export default function PostSomething({ name, image }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState();
  const { authData } = useAuth();

  useEffect(() => {
    getUserFullName();
  }, []);

  const getUserFullName = (user) => {
    if (user?.role === 'Player') setUserName(`${user.Player.firstName} ${user.Player.lastName}`);
    else setUserName(user?.Club?.clubName);
  };

  return (
    <View style={styles.postSomethingWrapper}>
      <Text style={styles.postSomethingText}>Post Something</Text>
      <View style={styles.postSomethingAvatar}>
        <Avatar name={userName} size={45} image={authData?.profilePic} />
        <TouchableOpacity style={styles.postContainer} onPress={() => setModalVisible(true)}>
          <Text style={styles.postPlaceholder}>What's on your mind?</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <CreatePost closeModal={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
