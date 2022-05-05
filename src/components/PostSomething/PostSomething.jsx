import React from 'react';
import { View, Text } from 'react-native';

import { fontSizes } from '../../constants/Typography';
import Avatar from '../Avatar/Avatar';
import styles from './PostSomething.styles';

export default function PostSomething({ name, image }) {
  return (
    <View style={styles.postSomethingWrapper}>
      <Text style={styles.postSomethingText}>Post Something</Text>
      <View style={styles.postSomethingAvatar}>
        <Avatar
          name={name}
          avatarContainer={{ width: 45, height: 45, borderRadius: 40 }}
          initialStyle={{ fontSize: fontSizes.large }}
          image={image}
        />
        <View style={styles.postContainer}>
          <Text style={styles.postPlaceholder}>What's on your mind?</Text>
        </View>
      </View>
    </View>
  );
}
