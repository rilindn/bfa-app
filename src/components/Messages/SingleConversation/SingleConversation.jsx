import { Text, View, TouchableOpacity } from 'react-native';
import { Drawer } from 'react-native-ui-lib';

import { deleteChat } from '../../../api/ApiMethods';
import Colors from '../../../constants/Colors';
import formatDate from '../../../helpers/formatDate';
import Avatar from '../../Avatar/Avatar';
import getFullName from './../../../helpers/extractFullname';
import styles from './SingleConversation.styles';

const SingleConversation = ({ chatData, refetchChats, onPress }) => {
  const fullName = getFullName(chatData.user);
  const lastMessage = chatData.chat.messages?.[0]?.content;
  const formatedDate = formatDate(chatData.chat.updatedAt);

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
            <Text style={styles.messageText}>{lastMessage}</Text>
          </View>
        </View>
        <Text style={styles.dateTime}>{formatedDate}</Text>
      </TouchableOpacity>
    </Drawer>
  );
};

export default SingleConversation;
