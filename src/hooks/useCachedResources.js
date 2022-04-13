import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          ...FontAwesome.font,
          'poppins-bold': require('../../assets/fonts/Poppins-Bold.ttf'),
          'poppins-italic': require('../../assets/fonts/Poppins-Italic.ttf'),
          'poppins-semibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
          'poppins-light': require('../../assets/fonts/Poppins-Light.ttf'),
          'poppins-medium': require('../../assets/fonts/Poppins-Medium.ttf'),
          'poppins-regular': require('../../assets/fonts/Poppins-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
