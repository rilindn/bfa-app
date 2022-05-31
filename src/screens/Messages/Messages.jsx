import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';

import Avatar from '../../components/Avatar/Avatar';
import { fontSizes } from '../../constants/Typography';
import useAuthContext from '../../hooks/useAuth';
import styles from './Messages.styles';

export default function Messages({ name }) {
  const { authData } = useAuthContext();

  return (
    <ScrollView style={styles.container}>
      <Searchbar placeholder="Search" />
      <View style={styles.content}>
        <Avatar
          name={name}
          size={50}
          initialStyle={{ fontSize: fontSizes.large }}
          image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        />
        <View style={styles.dataContent}>
          <Text style={styles.name}>
            {authData.Player.firstName} {authData.Player.lastName}
          </Text>
          <Text style={styles.message}>How are you?</Text>
        </View>

        <View style={styles.datetimeWrapper}>
          <Text style={styles.datetime}>06/03/2022 at 16:20</Text>
        </View>
      </View>
    </ScrollView>
  );
}
