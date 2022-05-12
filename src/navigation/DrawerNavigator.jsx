import { MaterialIcons, Feather } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';

import Header from '../components/Header/Header';
import CustomDrawerContent from '../components/Sidebar/Sidebar';
import Colors from '../constants/Colors';
import { fontSizes } from '../constants/Typography';
import SvgIcon from './../components/SvgIcon/SvgIcon';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ initialScreen, navigation }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        drawerPosition: 'right',
        drawerStyle: {
          width: Dimensions.get('window').width * 0.9,
          backgroundColor: Colors.gray5,
        },
        drawerLabelStyle: {
          color: Colors.light,
          marginLeft: -10,
          fontSize: fontSizes.medium,
        },
        drawerType: 'slide',
        drawerActiveBackgroundColor: Colors.orange + 15,
        drawerActiveTintColor: Colors.light,
        swipeEdgeWidth: 100,
        drawerIcon: ({ focused }) => {
          const iconName = route.name.toLowerCase();
          return (
            <SvgIcon
              name={iconName}
              width={fontSizes.titleLarge}
              height={fontSizes.titleLarge}
              color={focused && Colors.orange}
              focused={focused}
            />
          );
        },
        headerLeft: () => (
          <TouchableOpacity
            style={{ marginLeft: 15, fontSize: 15 }}
            onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={22} color={Colors.gray4} />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{ marginRight: 15, fontSize: 15 }}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Feather name="menu" size={27} color={Colors.gray4} />
          </TouchableOpacity>
        ),
      })}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home"
        getComponent={() => require('./BottomTabNavigator').default}
        options={{
          header: () => <Header />,
        }}
      />
      <Drawer.Screen
        name="Settings"
        getComponent={() => require('../screens/Settings/Settings').default}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
