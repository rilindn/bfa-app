import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import getFullName from '../../../helpers/extractFullname';
import useAuth from '../../../hooks/useAuth';
import Avatar from '../../Avatar/Avatar';
import CreatePost from '../CreatePost/CreatePost';
import styles from './PostSomething.styles';

export default function PostSomething() {
  const { authData } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);
  const [userName] = useState(getFullName(authData));

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
        <CreatePost visible={modalVisible} closeModal={() => setModalVisible(false)} />
      </View>
    </View>
  );
}
