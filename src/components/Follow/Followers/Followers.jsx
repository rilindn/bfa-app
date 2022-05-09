import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { fontSizes } from '../../../constants/Typography';
import useAuthContext from '../../../hooks/useAuth';
import Avatar from '../../Avatar/Avatar';
import SearchBar from '../../SearchBar/Searchbar';
import styles from './Followers.styles';

export default function Followers({ name, navigation }) {
  const { authData } = useAuthContext();

  return (
    <ScrollView style={styles.container}>
      <SearchBar />
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
          <Text style={styles.role}>Player</Text>
        </View>

        <View style={styles.label}>
          <Text style={styles.removeLabel}>Remove</Text>
        </View>
      </View>
    </ScrollView>
  );
}
