import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { UIManager, Platform } from 'react-native';
import { Provider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Colors from './src/constants/Colors';
import { AuthContextProvider } from './src/contexts/AuthContext';
import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider>
        <AuthContextProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <StatusBar style="light" backgroundColor={Colors.gray5} />
              <Navigation />
            </NavigationContainer>
          </SafeAreaProvider>
        </AuthContextProvider>
      </Provider>
    );
  }
}
