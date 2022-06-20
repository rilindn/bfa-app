import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Avatar from '../../components/Avatar/Avatar';
import fontSizes from '../../constants/Typography';
import styles from './Notification.styles';

export default function Notification() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Avatar
          size={50}
          initialStyle={{ fontSize: fontSizes.large }}
          image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        />
        <View style={styles.dataContent}>
          <Text style={styles.name}>We posted something new!</Text>
          <Text style={styles.datetime}>06/03/2022</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Avatar
          size={50}
          initialStyle={{ fontSize: fontSizes.large }}
          image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        />
        <View style={styles.dataContent}>
          <Text style={styles.name}>We posted something new!</Text>
          <Text style={styles.datetime}>06/03/2022</Text>
        </View>
      </View>
    </ScrollView>
  );
}
