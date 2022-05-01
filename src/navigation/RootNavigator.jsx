import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Root = createNativeStackNavigator();

const RootNavigator = ({ initialScreen, authData }) => {
  return (
    <Root.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {authData?.token ? (
        <>
          <Root.Screen name="Root" getComponent={() => require('./DrawerNavigator').default} />
          <Root.Screen
            name="EditProfile"
            getComponent={() => require('../screens/Profile/EditProfile/EditProfile').default}
          />
        </>
      ) : (
        <>
          <Root.Screen
            name="Login"
            getComponent={() => require('../screens/Login/Login').default}
          />
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
          <Root.Screen
            name="Loading"
            getComponent={() => require('../screens/Loading/Loading').default}
          />
          <Root.Screen
            name="ResetPassword"
            getComponent={() => require('../screens/ResetPassword/ResetPassword').default}
          />
        </>
      )}
    </Root.Navigator>
  );
};
export default RootNavigator;
