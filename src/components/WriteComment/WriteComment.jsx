import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';

import Colors from '../../constants/Colors';
import Avatar from '../Avatar/Avatar';
import styles from './WriteComment.styles';

const WriteComment = ({ bottomContainer }) => {
  return (
    <View style={[styles.bottomContainer, bottomContainer]}>
      <Avatar name="Filan Fisteku" size={45} />
      <TouchableOpacity style={styles.commentContainer}>
        <Text style={{ color: Colors.gray3 + '50', paddingLeft: 10 }}>Add a comment</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.post}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};
export default WriteComment;
