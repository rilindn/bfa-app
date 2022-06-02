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
  const fullName = getFullName(chatData.user);
  const formatedDate = formatDate(chatData.chat.updatedAt);

  const getLastMessage = () => {
    const lastMessage = chatData.chat.messages?.[chatData.chat.messages.length - 1];
    return decryptMsg(lastMessage?.content, chatData.chat._id, lastMessage.sender);
  };

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
          <Avatar name={fullName} size={42} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.userName}>{fullName}</Text>
            <Text style={styles.messageText}>{getLastMessage()}</Text>
          </View>
        </View>
        <Text style={styles.dateTime}>{formatedDate}</Text>
      </TouchableOpacity>
    </Drawer>
  );
};

export default SingleConversation;
