import { ImageBackground } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

import Background from '../../../assets/images/background.png';
import Colors from '../../constants/Colors';
import styles from './Loading.styles';

export default function LoadingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={Background} resizeMode="cover" style={styles.image}>
        <ActivityIndicator size="large" color={Colors.white} animating />
      </ImageBackground>
    </SafeAreaView>
  );
}
