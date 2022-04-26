import { View, SafeAreaView, StyleSheet, Appearance, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Title, Caption, Text, Searchbar, TextInput } from 'react-native-paper';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import styles from './Profile.styles';

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Searchbar style={styles.searchbar} placeholder="Search" />
      </View>

      <View style={styles.main}>
        <View style={styles.button}>
          <Button title="Basic account" disabled />
          <View style={styles.buttonB}>
            <Button title="Edit Profile" color="#201C1C" />
          </View>
        </View>
        <Title style={{ color: '#fff', fontSize: 20, marginLeft: 20 }}>Ake Kenned</Title>
        <Avatar.Image
          source={{
            uri: 'https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png',
          }}
          size={80}
          style={{ marginLeft: 20 }}
        />
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ADADAD',
            borderRadius: 5,
            width: '90%',
            alignSelf: 'center',
            margin: 10,
          }}>
          <Button title="Currently without a team" color="#201C1C" />
        </View>

        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {
                borderRightColor: '#ADADAD',
                borderRightWidth: 1,
              },
            ]}>
            <Title style={{ color: '#fff' }}>1</Title>
            <Caption style={{ color: '#ADADAD' }}>Post</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title style={{ color: '#fff' }}>10</Title>
            <Caption style={{ color: '#ADADAD' }}>Followers</Caption>
          </View>
          <View
            style={[
              styles.infoBox,
              {
                borderLeftColor: '#ADADAD',
                borderLeftWidth: 1,
              },
            ]}>
            <Title style={{ color: '#fff' }}>12</Title>
            <Caption style={{ color: '#ADADAD' }}>Following</Caption>
          </View>
        </View>
      </View>

      <View style={styles.textBoxWrapper}>
        <Pressable style={styles.title}>
          <Title style={{ color: '#fff', fontSize: 20, paddingBottom: 10 }}>About Player</Title>
          <Title style={{ color: '#fff', fontSize: 20, paddingBottom: 10 }}>Characteristics</Title>
        </Pressable>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book.
        </Text>
      </View>

      <View style={styles.postSomethingWrapper}>
        <Title
          style={{
            color: '#fff',
            fontSize: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#ADADAD',
            paddingLeft: 15,
            paddingBottom: 15,
          }}>
          Post Something
        </Title>
        <View style={styles.postSomething}>
          <Avatar.Image
            source={{
              uri: 'https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black.png',
            }}
            size={60}
          />
          <TextInput style={styles.input} placeholder="What's on your mind!" />
        </View>
      </View>
    </ScrollView>
  );
}
