import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';

import Colors from '../../../../constants/Colors';
import UserSingleCard from '../../../Profile/UserSingleCard/UserSingleCard';
import styles from './PostLikesModal.styles';

const PostLikesModal = ({ visible, setVisible, likes }) => {
  const navigation = useNavigation();

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={() => setVisible(false)}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.arrowBack} onPress={() => setVisible(false)}>
                <MaterialIcons name="arrow-back-ios" size={22} color={Colors.light + 90} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Likes</Text>
            </View>
            {likes.map((like) => (
              <TouchableOpacity
                key={like.id}
                onPress={() => {
                  navigation.navigate('ViewProfile', {
                    id: like.UserId,
                  });
                }}>
                <UserSingleCard user={like.User} containerStyle={styles.singlecard} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PostLikesModal;
