/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { View, Text, Button } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import IndexHomeScreen from '../Screens/IndexHomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import UserLoginButton from '../Components/UserLoginButton';
import { NavigationContainer } from '@react-navigation/native';
import ScrB from './ScrB';
import ScrM from './ScrM';
import ScrA from './ScrA';

const Stack = createStackNavigator();

const TestNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={IndexHomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
  );
};

export default TestNavigation;
