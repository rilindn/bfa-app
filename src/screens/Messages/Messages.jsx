import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';

import SingleConversation from '../../components/Messages/SingleConversation/SingleConversation';
import styles from './Messages.styles';

export default function Messages({ name }) {
  return (
    <ScrollView style={styles.container}>
      <Searchbar placeholder="Search" />
      <View style={styles.chat}>
        <SingleConversation />
        <SingleConversation />
      </View>
    </ScrollView>
  );
}
