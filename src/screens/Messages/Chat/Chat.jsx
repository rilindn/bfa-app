import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Menu } from 'react-native-paper';

import { deleteChatMessage, getChatById, newChatMessage } from '../../../api/ApiMethods';
import WriteMessage from '../../../components/WriteMessage/WriteMessage';
import Colors from '../../../constants/Colors';
import getFullName from '../../../helpers/extractFullname';
import { decryptMsg, encryptMsg } from '../../../helpers/messageEncrypt';
import useAuth from './../../../hooks/useAuth';
import styles from './Chat.styles';

export default function Chat({ route }) {
  const navigation = useNavigation();
  const { authData } = useAuth();
  const [user, setUser] = useState({});
  const [chat, setChat] = useState([]);
  const chatId = route?.params.id;

  const fetchResources = async () => {
    const result = await getChatById(chatId);
    setUser(result.user);
    setChat(result.chat);
    navigation.setOptions({
      title: getFullName(result.user),
    });
  };

  const handleSendMessage = async (data) => {
    const content = encryptMsg(data.message, chatId, authData.id);
    const payload = {
      sender: authData.id,
      content,
      receiver: user.id,
    };
    await Promise.all(newChatMessage(payload, chatId), fetchResources());
  };

  const handleDeleteMessage = async (messageId) => {
    await Promise.all(deleteChatMessage(chatId, messageId), fetchResources());
  };

  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={chat?.messages || []}
        renderItem={({ item, index }) =>
          _renderItem({ item, index, authData, chatId, handleDeleteMessage })
        }
        inverted
        contentContainerStyle={styles.scrollContainer}
        keyExtractor={(item, index) => index.toString()}
      />
      <WriteMessage user={user} handleSendMessage={handleSendMessage} />
    </View>
  );
}

const _renderItem = ({ item, index, authData, ...rest }) => {
  const isOwn = authData.id === item.sender;
  return <Message key={item._id} item={item} isOwn={isOwn} {...rest} />;
};

const Message = ({ isOwn, item, chatId, handleDeleteMessage }) => {
  const [showMenu, setShowMenu] = useState(false);
  const message = decryptMsg(item.content, chatId, item.sender);
  const date = moment(item.createdAt).format('HH:mm A');
  return (
    <View style={[styles.messageWrapper, isOwn && { flexDirection: 'row' }]}>
      <Text style={styles.timeSend}>{date}</Text>
      {!isOwn && !item.read && <View style={styles.unread} />}
      <Menu
        visible={showMenu}
        onDismiss={() => {
          setShowMenu(false);
        }}
        contentStyle={{ width: 100 }}
        anchor={
          <TouchableOpacity onLongPress={() => isOwn && setShowMenu(true)}>
            <Text style={[styles.message, isOwn && { backgroundColor: Colors.orange }]}>
              {message}
            </Text>
          </TouchableOpacity>
        }>
        <Menu.Item
          onPress={() => {
            handleDeleteMessage(item._id);
            setShowMenu(false);
          }}
          title="Delete"
        />
      </Menu>
    </View>
  );
};
