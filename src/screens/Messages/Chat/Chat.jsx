import { ScrollView } from 'react-native-gesture-handler';
import { View, Text } from 'react-native-ui-lib';

import WriteMessage from '../../../components/WriteMessage/WriteMessage';
import Colors from '../../../constants/Colors';
import styles from './Chat.styles';

export default function Chat({}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View marginH-20 marginT-20>
          <View style={styles.subContainer}>
            <Text style={styles.message}>Hello there</Text>
            <Text style={styles.time}>03:20 PM</Text>
          </View>
          <View style={[styles.subContainer, { justifyContent: 'flex-end' }]}>
            <Text style={styles.timeSend}>03:22 PM</Text>
            <Text style={[styles.message, { backgroundColor: Colors.orange }]}>Hello back</Text>
          </View>
        </View>
      </ScrollView>
      <WriteMessage />
    </View>
  );
}
