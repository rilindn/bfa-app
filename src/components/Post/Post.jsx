import React from 'react';
import { View, Text, Image } from 'react-native-ui-lib';

import SvgIcon from '../../components/SvgIcon/SvgIcon';
import { fontSizes } from '../../constants/Typography';
import useAuthContext from '../../hooks/useAuth';
import Avatar from '../Avatar/Avatar';
import styles from './Post.styles';
export default function PostSomething({ name }) {
  const { authData } = useAuthContext();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Avatar
          name={name}
          avatarContainer={{ width: 45, height: 45, borderRadius: 40 }}
          initialStyle={{ fontSize: fontSizes.large }}
          image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        />
        <View style={styles.dateContainer}>
          <Text style={styles.name}>
            {authData.Player.firstName} {authData.Player.lastName}
          </Text>
          <Text style={styles.date}>06/03/2022 at 16:20</Text>
        </View>
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.description}>Hello this is a description for my post</Text>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/photos/football-goal-picture-id504268081',
          }}
          style={{ width: '100%', height: 185, alignSelf: 'center' }}
        />
      </View>
      <View style={styles.reactionContainer}>
        <View style={styles.halfContainer}>
          <SvgIcon name="like" width={20} height={20} />
          <Text style={styles.reactText}>2 Likes</Text>
        </View>
        <View style={styles.halfContainer}>
          <SvgIcon name="comment" width={20} height={20} />
          <Text style={styles.reactText}>1 Post</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Avatar
          name={name}
          avatarContainer={{ width: 45, height: 45, borderRadius: 40 }}
          initialStyle={{ fontSize: fontSizes.large }}
          image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80"
        />
        <View style={styles.commentContainer}>
          <Text style={[styles.name, { paddingLeft: 10 }]}>
            {authData.Player.firstName} {authData.Player.lastName}
          </Text>
          <Text style={styles.commentText}>Awesome!</Text>
        </View>
      </View>
    </View>
  );
}
