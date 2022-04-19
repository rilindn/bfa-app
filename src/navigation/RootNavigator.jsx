import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Root = createNativeStackNavigator();
const RootNavigator = ({ initialScreen }) => {
  return (
    <Root.Navigator
      initialRouteName="Root"
      screenOptions={{
        headerShown: false,
      }}>
      <Root.Screen name="Root" getComponent={() => require('./DrawerNavigator').default} />
      <Root.Screen name="Login" getComponent={() => require('../screens/Login/Login').default} />
      <Root.Screen
        name="ChooseRole"
        getComponent={() => require('../screens/ChooseRole/ChooseRole').default}
      />
      <Root.Screen
        name="RegisterClub"
        getComponent={() => require('../screens/RegisterClub/RegisterClub').default}
      />
      <Root.Screen
        name="RegisterPlayer"
        getComponent={() => require('../screens/RegisterPlayer/RegisterPlayer').default}
      />
    </Root.Navigator>
  );
};
export default RootNavigator;
