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
import LoginButton from './Resources/Components/LoginButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginScreen from './Resources/Screens/LoginScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
        <LoginScreen/>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default App;
