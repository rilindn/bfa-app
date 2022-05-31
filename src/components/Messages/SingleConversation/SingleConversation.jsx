import { Text, View } from 'react-native';
import { Drawer } from 'react-native-ui-lib';

import Colors from '../../../constants/Colors';
import Avatar from '../../Avatar/Avatar';
import styles from './SingleConversation.styles';

const SingleConversation = () => {
  return (
    <Drawer
      fullSwipeLeft={false}
      fullLeftThreshold={0}
      style={styles.drawer}
      leftItem={{
        text: 'Delete',
        background: Colors.red,
        onPress: () => console.log('delete pressed'),
      }}
      rightItems={[
        {
          text: 'Read',
          background: Colors.mainGreen,
          onPress: () => console.log('read pressed'),
        },
      ]}>
      <View style={styles.conversationRow}>
        <View style={styles.userData}>
          <Avatar name="Rilind Nuha" size={42} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.userName}>Rilind Nuha</Text>
            <Text style={styles.messageText}>Hello</Text>
          </View>
        </View>
        <Text style={styles.dateTime}>16 May 2022 at 12:30</Text>
      </View>
    </Drawer>
  );
};

export default SingleConversation;
