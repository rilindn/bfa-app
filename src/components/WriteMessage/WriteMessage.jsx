import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native-ui-lib';

import Colors from '../../constants/Colors';
import getFullName from '../../helpers/extractFullname';
import useAuth from '../../hooks/useAuth';
import Avatar from '../Avatar/Avatar';
import SvgIcon from '../SvgIcon/SvgIcon';
import TextInput from '../TextInput/TextInput';
import styles from './WriteMessage.styles';

const WriteMessage = () => {
  const { authData } = useAuth();
  const [userName] = useState(getFullName(authData));
  const { control, watch } = useForm();

  return (
    <View style={styles.bottomContainer}>
      <Avatar name={userName} size={45} image={authData?.profilePic} />
      <TextInput
        containerStyle={{ marginBottom: 0, width: '70%' }}
        inputStyle={styles.messageContainer}
        name="message"
        control={control}
        darkMode
        noTitle
        multiline
        numberOfLines={6}
      />
      <TouchableOpacity
        style={[styles.buttonContainer, watch('message') && { backgroundColor: Colors.mainGreen }]}
        disabled={!watch('message')}>
        <SvgIcon name="send" width={30} height={25} />
      </TouchableOpacity>
    </View>
  );
};
export default WriteMessage;
