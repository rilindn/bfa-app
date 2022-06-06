import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import { socket } from '../../../api/ApiBase';
import { deleteChatMessage, getChatById, newChatMessage } from '../../../api/ApiMethods';
import BottomMenu from '../../../components/BottomMenu/BottomMenu';
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
  const [messages, setMessages] = useState([]);
  const [deleteOptionData, setDeleteOptionData] = useState({ state: false });
  const chatId = route?.params.id;

  const fetchResources = async () => {
    const result = await getChatById(chatId, authData.id);
    setUser(result.user);
    setMessages(result.chat.messages);
    navigation.setOptions({
      title: getFullName(result.user),
    });
  };

  const handleSendMessage = async (data) => {
    const content = encryptMsg(data.message, chatId);
    const payload = {
      sender: authData.id,
      content,
      receiver: user.id,
    };
    setMessages((prev) => [...prev, { ...payload, _id: uuidv4() }]);
    socket.emit('new-msg', { chatId, payload });
    await newChatMessage(payload, chatId);
  };

  const handleDeleteMessage = async (messageId) => {
    setMessages(messages.filter(({ _id }) => _id !== messageId));
    setDeleteOptionData({ state: false });
    await deleteChatMessage(chatId, messageId);
  };

  useEffect(() => {
    fetchResources();
  }, []);

  useEffect(() => {
    socket.on('msg-receive', (payload) => {
      setMessages((prev) => [...prev, payload]);
    });
    socket.emit('join', chatId);
    return () => {
      socket.off('msg-receive');
    };
  }, []);

  return (
    <View style={styles.container}>
      {messages && (
        <FlatList
          data={messages || []}
          renderItem={({ item, index }) =>
            _renderItem({ item, index, authData, chatId, setDeleteOptionData })
          }
          inverted
          contentContainerStyle={styles.scrollContainer}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
      <WriteMessage user={user} handleSendMessage={handleSendMessage} />
      <BottomMenu
        visible={deleteOptionData?.state}
        dissmis={() => setDeleteOptionData({ state: false })}>
        <TouchableOpacity
          style={styles.deleteOption}
          onPress={() => handleDeleteMessage(deleteOptionData?.id)}>
          <AntDesign name="delete" size={30} color={Colors.red + 90} />
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </BottomMenu>
    </View>
  );
}

const _renderItem = ({ item, index, authData, ...rest }) => {
  const isOwn = authData.id === item.sender;
  return <Message key={item._id} item={item} isOwn={isOwn} {...rest} />;
};

const Message = ({ isOwn, item, chatId, setDeleteOptionData }) => {
  const message = decryptMsg(item.content, chatId);
  const date = moment(item?.createdAt).format('HH:mm A');
  return (
    <View style={[styles.messageWrapper, isOwn && { flexDirection: 'row' }]}>
      <Text style={styles.timeSend}>{date}</Text>
      <TouchableOpacity
        onLongPress={() => isOwn && setDeleteOptionData({ state: true, id: item._id })}>
        <Text style={[styles.message, isOwn && { backgroundColor: Colors.orange }]}>{message}</Text>
      </TouchableOpacity>
    </View>
  );
};
