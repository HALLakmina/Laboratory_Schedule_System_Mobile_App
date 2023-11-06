/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, ScrollView, Text, Button} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigationBar from './Resources/Router/MainNavigationBar';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigationBar/>
    </NavigationContainer>
  );
}

export default App;
