import { NavigationContainer } from '@react-navigation/native';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation/RootNavigator';
import Login from './src/screens/Login';
import RegisterPlayer from './src/screens/RegisterPlayer';
import RegisterClub from './src/screens/RegisterClub';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Navigation />
        {/* <Login />*/}
        {/*<RegisterPlayer />*/}
        {/*<RegisterClub />*/}
      </NavigationContainer>
    );
  }
}
