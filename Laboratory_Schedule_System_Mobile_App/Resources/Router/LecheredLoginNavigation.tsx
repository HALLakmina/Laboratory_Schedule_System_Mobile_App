/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndexHomeScreen from '../Screens/IndexHomeScreen';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createStackNavigator();

const LecheredLoginNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={IndexHomeScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
        </Stack.Navigator>
    );
  };

export default LecheredLoginNavigation;
