// Main.js

import React from 'react'
import { StyleSheet, Platform, Image, Text, View, TouchableOpacity } from 'react-native'
import firebase from 'react-native-firebase'
import {createBottomTabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons';
import Map from './Map'
import Profile from './Profile'

const Nav = createBottomTabNavigator(
	{
		Map: {screen: Map},
		Profile: {screen: Profile}
	},
	{
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Map') {
          iconName = 'md-map';
        }
		else if(routeName === 'Profile') {
		  iconName = 'md-person'
		}

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
});

export default Nav;
