import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DrawerActions } from '@react-navigation/native';
import React from 'react';

import SvgIcon from '../components/SvgIcon/SvgIcon';
import Colors from '../constants/Colors';

const Tab = createMaterialBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const iconName = route.name.toLowerCase();
          return (
            <SvgIcon name={iconName} size={40} color={focused && Colors.orange} focused={focused} />
          );
        },
        headerShown: false,
      })}
      tabBarOptions={{
        showLabel: false,
      }}
      barStyle={{ backgroundColor: Colors.gray5 }}>
      <Tab.Screen name="Feed" getComponent={() => require('../screens/Feed/Feed').default} />
      <Tab.Screen
        name="Messages"
        getComponent={() => require('../screens/Messages/Messages').default}
      />
      <Tab.Screen
        name="Profile"
        getComponent={() => require('../screens/Profile/Profile').default}
      />
      <Tab.Screen
        name="Notifications"
        getComponent={() => require('../screens/Notifications/Notifications').default}
      />
      <Tab.Screen
        name="Menu"
        getComponent={() => require('../screens/Menu/Menu').default}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.dispatch(DrawerActions.openDrawer());
          },
        })}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
