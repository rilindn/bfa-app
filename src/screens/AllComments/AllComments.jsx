import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native-ui-lib';

import Comment from '../../components/Comment/Comment';
import WriteComment from '../../components/WriteComment/WriteComment';
import styles from './AllComments.styles';

const Comments = ({}) => {
  return (
    <View style={styles.container} contentContainerStyle={{}}>
      <ScrollView style={styles.commentsContainer}>
        <Comment bottomContainer={styles.divider} comment="Awesomeee" />
        <Comment
          bottomContainer={styles.divider}
          comment="Awesomeee Awesomeee Awesomeee Awesomeee Awesomeee Awesomeee Awesomeee Awesomeee AwesomeeeAwesomeeeAwesomeeeAwesomeee"
        />
        <Comment bottomContainer={styles.divider} />
        <Comment bottomContainer={styles.divider} />
        <Comment bottomContainer={styles.divider} />
      </ScrollView>
      <View>
        <WriteComment />
      </View>
    </View>
  );
};
export default Comments;
