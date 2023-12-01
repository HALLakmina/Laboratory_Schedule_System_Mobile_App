/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, Text, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import React from 'react';
import CustomTextBox from '../Components/CustomTextBox';
import LoginButton from '../Components/LoginButton';
import LinearGradient from 'react-native-linear-gradient';
import 'react-native-gesture-handler';

const LoginScreen = () => {
    const handleKeyboardDismiss = () => {
        Keyboard.dismiss();
    };
  return (
    <TouchableWithoutFeedback onPress={handleKeyboardDismiss} >
    <LinearGradient colors={['#6F4CFF', '#595EFC', '#59BBFC']} start={{x: 0.0, y: 0.01 }} end={{x: 1.0, y: 1.0}} style={styles.mainView}>
      <View style={styles.headerView}>
        <Text style={styles.welcomeText}>Welcome{'\n'}Back</Text>
      </View>
      <View style={styles.bodyView}>
        <View style={styles.textBoxView}>
          <CustomTextBox boxName="User Name" activeBoxNameColor="blue" duration ={300}/>
          <CustomTextBox boxName="Passwords" activeBoxNameColor="blue" duration ={300}/>
        </View>
        <LoginButton addText={'Registration'}/>
      </View>
    </LinearGradient>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  mainView: {
    flex:1,
    height:720,
    backgroundColor:'red',
  },
  headerView:{
    flex:1,
  },
  bodyView:
  {
    backgroundColor:'white',
    flex:3,
    borderTopStartRadius:50,
    borderTopEndRadius:50,
    padding:10,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 50,
    fontWeight: 'bold',
    paddingLeft:10,
    color:'white',
  },
  textBoxView:
  {
    paddingVertical:30,
    marginTop:50,
    height:240,
    justifyContent:'space-between',
  },
});
export default LoginScreen;
