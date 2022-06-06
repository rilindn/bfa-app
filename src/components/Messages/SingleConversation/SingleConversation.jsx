import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Drawer } from 'react-native-ui-lib';

import { deleteChat } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import formatDate from '../../../helpers/formatDate';
import { decryptMsg } from '../../../helpers/messageEncrypt';
import Avatar from '../../Avatar/Avatar';
import getFullName from './../../../helpers/extractFullname';
import styles from './SingleConversation.styles';

const SingleConversation = ({ chatData, refetchChats, onPress }) => {
  const [messageData, setMessageData] = useState({});

  const getLastMessage = () => {
    const fullName = getFullName(chatData?.user);
    const lastMessage = chatData.chat.messages?.[chatData.chat.messages.length - 1];
    if (!lastMessage) {
      const chatDate = formatDate(chatData.chat.createdAt);
      return setMessageData({ userName: fullName, date: chatDate });
    }
    const lastMessageDate = formatDate(lastMessage?.createdAt);
    const plainTextMsg = decryptMsg(lastMessage?.content, chatData.chat._id);
    setMessageData({
      text: plainTextMsg,
      userName: fullName,
      date: lastMessageDate,
    });
  };

  useEffect(() => {
    getLastMessage();
  }, []);

  const handleDelete = async () => {
    await Promise.all(deleteChat(chatData.chat._id), refetchChats());
  };

  return (
    <Drawer
      fullSwipeLeft={false}
      fullLeftThreshold={0}
      style={styles.drawer}
      leftItem={{
        text: 'Delete',
        background: Colors.red,
        onPress: handleDelete,
      }}
      rightItems={[
        {
          text: 'Read',
          background: Colors.mainGreen,
          onPress: () => console.log('read pressed'),
        },
      ]}>
      <TouchableOpacity onPress={onPress} style={styles.conversationRow}>
        <View style={styles.userData}>
          <Avatar name={messageData?.userName} size={42} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.userName}>{messageData?.userName}</Text>
            <Text style={styles.messageText}>{messageData?.text}</Text>
          </View>
        </View>
        <Text style={styles.dateTime}>{messageData?.date}</Text>
      </TouchableOpacity>
    </Drawer>
  );
};

export default SingleConversation;
