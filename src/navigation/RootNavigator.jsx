import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import BottomStackNavigator from './BottomTabNavigator';
const Root = createNativeStackNavigator();
const RootNavigator = ({ initialScreen }) => {
  return (
    <Root.Navigator initialRouteName={initialScreen}>
      <Root.Screen
        name="BottomStackNavigator"
        component={BottomStackNavigator}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
    </Root.Navigator>
  );
};
export default RootNavigator;
