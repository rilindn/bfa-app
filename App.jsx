import { NavigationContainer } from '@react-navigation/native';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation/RootNavigator';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    );
  }
}
