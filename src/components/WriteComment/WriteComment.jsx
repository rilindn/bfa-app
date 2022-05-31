import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-ui-lib';

import { createComment } from '../../api/ApiMethods';
import Colors from '../../constants/Colors';
import getFullName from '../../helpers/extractFullname';
import useAuth from '../../hooks/useAuth';
import Avatar from '../Avatar/Avatar';
import TextInput from '../TextInput/TextInput';
import styles from './WriteComment.styles';

const WriteComment = ({ bottomContainer, PostId, fetchPostComments }) => {
  const { authData } = useAuth();
  const [userName] = useState(getFullName(authData));
  const { control, handleSubmit, reset, watch } = useForm();

  const writeComment = async (data) => {
    const payload = { UserId: authData.id, PostId, content: data?.content };
    await createComment(payload);
    await fetchPostComments();
    reset();
  };

  return (
    <View style={[styles.bottomContainer, bottomContainer]}>
      <Avatar name={userName} size={45} image={authData?.profilePic} />
      <TextInput
        containerStyle={{ marginBottom: 0, width: '70%' }}
        inputStyle={styles.commentContainer}
        name="content"
        control={control}
        darkMode
        noTitle
        multiline
        numberOfLines={6}
      />
      <TouchableOpacity disabled={!watch('content')} onPress={handleSubmit(writeComment)}>
        <Text style={[styles.post, watch('content') && { color: Colors.lightBlue }]}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};
export default WriteComment;
