import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';

import SvgIcon from '../components/SvgIcon';
import Colors from '../constants/Colors';
import Feed from '../screens/Feed';
import Menu from '../screens/Menu';
import Messages from '../screens/Messages';
import Notifications from '../screens/Notifications';
import Profile from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();
function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === 'Feed') {
            iconName = 'feed';
            color = focused ? '#F4B61C' : '#ADADAD';
          } else if (route.name === 'Messages') {
            iconName = 'messages';
            color = focused ? '#F4B61C' : '#ADADAD';
          } else if (route.name === 'Profile') {
            iconName = 'profile';
            color = focused ? '#F4B61C' : '#ADADAD';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications';
            color = focused ? '#F4B61C' : '#ADADAD';
          } else if (route.name === 'Menu') {
            iconName = 'menu';
            color = focused ? '#F4B61C' : '#ADADAD';
          }
          return <SvgIcon name={iconName} size={40} color={color} focused={focused} />;
        },
        headerShown: false,
      })}
      tabBarOptions={{
        showLabel: true,
      }}
      barStyle={{ backgroundColor: Colors.gray5 }}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
}
export default Tabs;
