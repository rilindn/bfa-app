import React, { useState, useEffect } from 'react';
import { View, Text, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
  }, [authData]);

  const getUserFullName = () => {
    if (authData?.role === 'Player')
      setUserName(`${authData.Player.firstName} ${authData.Player.lastName}`);
    else setUserName(authData?.Club?.clubName);
  };

  return (
    <View style={styles.postSomethingWrapper}>
      <Text style={styles.postSomethingText}>Post Something</Text>
      <View style={styles.postSomething}>
        <Avatar name={userName} size={45} image={authData?.profilePic} />
        <View style={styles.postContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.postPlaceholder}>What's on your mind?</Text>
          </TouchableOpacity>
        </View>
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
