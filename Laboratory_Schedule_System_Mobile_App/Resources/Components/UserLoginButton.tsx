/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';

//const Stack = createNativeStackNavigator();

const UserLoginButton = (props_stack:any) => {
  function gotoLogin(){
    props_stack.lb_stack.navigate('Login');
  }
  return (
    <TouchableOpacity onPress={gotoLogin}>
      <View style={{width:40,height:40,borderRadius:100,backgroundColor:'white',alignItems:'center',justifyContent:'center',elevation:10}}>
        <Icon size={30} color="black" name={'account-arrow-up'} type={'material-community'}/>
      </View>
    </TouchableOpacity>
  );
};

export default UserLoginButton;
