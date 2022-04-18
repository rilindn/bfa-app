import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Root = createNativeStackNavigator();
const RootNavigator = ({ initialScreen }) => {
  return (
    <Root.Navigator initialRouteName="Login">
      <Root.Screen
        name="Root"
        getComponent={() => require('./BottomTabNavigator').default}
        options={{
          gestureEnabled: false,
          headerShown: false,
        }}
      />
      <Root.Screen
        name="Login"
        getComponent={() => require('../screens/Login/Login').default}
        options={{
          headerShown: false,
        }}
      />
      <Root.Screen
        name="ChooseRole"
        getComponent={() => require('../screens/ChooseRole/ChooseRole').default}
        options={{
          headerShown: false,
        }}
      />
      <Root.Screen
        name="RegisterClub"
        getComponent={() => require('../screens/RegisterClub/RegisterClub').default}
        options={{
          headerShown: false,
        }}
      />
      <Root.Screen
        name="RegisterPlayer"
        getComponent={() => require('../screens/RegisterPlayer/RegisterPlayer').default}
        options={{
          headerShown: false,
        }}
      />
    </Root.Navigator>
  );
};
export default RootNavigator;
