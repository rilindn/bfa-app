import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { loggedUser } from '../../api/ApiMethods';
import useAuthContext from './../../hooks/useAuth';
import styles from './Feed.styles';

export default function Feed({ navigation }) {
  const [user, setUser] = useState({});
  const { authData, loading } = useAuthContext();

  useEffect(async () => {
    const result = await loggedUser();
    setUser(result.data);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {!loading && (
        <>
          <Text style={styles.title}>Welcome {authData?.[authData?.role]?.firstName}</Text>
          <Text style={{ color: 'black' }}>Email: {user?.user?.email}</Text>
          <Text style={{ color: 'black' }}>Role: {user?.user?.role}</Text>
        </>
      )}
    </SafeAreaView>
  );
}
