/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ScrA from './ScrA';
import TestNavigation from './TestNavigation';
const Tab = createBottomTabNavigator();

const TestTabBar = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name={'ScreenM'} component={TestNavigation}/>
            <Tab.Screen name={'ScreenA'} component={ScrA}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TestTabBar;
