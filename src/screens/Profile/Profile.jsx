import { useForm } from 'react-hook-form';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-paper';

import TextInput from '../../components/TextInput/TextInput';
import styles from './Profile.styles';

export default function Profile() {
  const { control } = useForm();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.button}>
          <Button title="Basic account" disabled />
          <View style={styles.buttonB}>
            <Button title="Edit Profile" color="#201C1C" />
          </View>
        </View>
        <Text style={styles.name}>Ake Kenned</Text>
        <Avatar.Image
          source={{
            uri: 'https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png',
          }}
          size={80}
          style={{ marginLeft: 20 }}
        />
        <View style={styles.teamStatus}>
          <Text>CURRENTLY WITHOUT A TEAM</Text>
        </View>

        <View style={styles.infoBoxWrapper}>
          <View style={styles.infoBox}>
            <Text style={styles.statisticsNumber}>1</Text>
            <Text style={styles.statisticsText}>Post</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.statisticsNumber}>10</Text>
            <Text style={styles.statisticsText}>Followers</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.statisticsNumber}>12</Text>
            <Text style={styles.statisticsText}>Following</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tabsTitle}>
          <Text style={styles.tabText}>About Player</Text>
          <Text style={styles.tabText}>Characteristics</Text>
        </TouchableOpacity>
        <Text style={styles.aboutText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </Text>
      </View>

      <View style={styles.postSomethingWrapper}>
        <Text style={styles.postSomethingText}>Post Something</Text>
        <View style={styles.postSomethingAvatar}>
          <Avatar.Image
            source={{
              uri: 'https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png',
            }}
            size={40}
          />
          <TextInput
            control={control}
            inputStyle={styles.postSomethingInput}
            name="postContent"
            placeholder="What's on your mind!"
          />
        </View>
      </View>
    </ScrollView>
  );
}
