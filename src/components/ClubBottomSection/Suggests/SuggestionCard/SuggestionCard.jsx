import React from 'react';
import { View, Text } from 'react-native-ui-lib';

import Avatar from '../../../Avatar/Avatar';
import CustomButton from '../../../Button/Button';
import styles from './SuggestionCard.styles';

const SuggestionCard = ({ onPress, playerName, loading }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar size={50} name="Rilind Nuha" />
      </View>
      <Text style={styles.fullname}>{playerName}</Text>
      <CustomButton label="Follow" style={styles.followBtn} loading={loading} />
    </View>
  );
};
export default SuggestionCard;
