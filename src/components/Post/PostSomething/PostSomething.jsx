import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

import { fontSizes } from '../../../constants/Typography';
import Avatar from '../../Avatar/Avatar';
import CreatePost from '../CreatePost/CreatePost';
import styles from './PostSomething.styles';

export default function PostSomething({ name, image }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.postSomethingWrapper}>
      <Text style={styles.postSomethingText}>Post Something</Text>
      <View style={styles.postSomethingAvatar}>
        <Avatar name={name} size={45} initialStyle={{ fontSize: fontSizes.large }} image={image} />
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
