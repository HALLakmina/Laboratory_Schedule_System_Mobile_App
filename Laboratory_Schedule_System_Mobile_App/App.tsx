/* eslint-disable no-extra-semi */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import { Text, View } from 'react-native';
//import TestNavigation from './Resources/test/TestNavigation';
import 'react-native-gesture-handler';
import MainNavigationBar from './Resources/Router/MainNavigationBar';
//import TestTabBar from './Resources/test/TestTabBar';

function App(): JSX.Element {
  return (
    <MainNavigationBar/>
  );
};
export default App;
