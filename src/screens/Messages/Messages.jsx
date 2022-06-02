import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';

import { getMyChats } from '../../api/ApiMethods';
import SingleConversation from '../../components/Messages/SingleConversation/SingleConversation';
import useAuth from './../../hooks/useAuth';
import styles from './Messages.styles';

export default function Messages({ name }) {
  const navigation = useNavigation();
  const { authData } = useAuth();
  const [chats, setChats] = useState([]);
  const isFocused = useIsFocused();

  const fetchChats = async () => {
    const chatsResult = await getMyChats(authData.id);
    setChats(chatsResult);
  };

  useEffect(() => {
    fetchChats();
  }, [isFocused]);

  return (
    <ScrollView style={styles.container}>
      <Searchbar placeholder="Search" />
      <View style={styles.chat}>
        {chats.map((chat) => {
          return (
            <SingleConversation
              key={chat.user.id}
              onPress={() => navigation.navigate('Chat')}
              chatData={chat}
              refetchChats={fetchChats}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
