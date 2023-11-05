/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React from 'react';
import CustomTextBox from '../Components/CustomTextBox';
import LoginButton from '../Components/LoginButton';

const LoginScreen = () => {
    const handleKeyboardDismiss = () => {
        Keyboard.dismiss();
    };
  return (
    <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
    <View>
        <Text>LoginScreen</Text>
        <CustomTextBox boxName="User Name" activeBoxNameColor="blue" duration ={300}/>
        <LoginButton addText={'Registration'}/>
    </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
