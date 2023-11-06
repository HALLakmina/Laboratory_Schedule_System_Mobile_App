/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View} from 'react-native';
import React from 'react';
import { Icon } from '@rneui/themed';

const UserLoginButton = () => {
  return (
    <View>
      <View style={{width:40,height:40,borderRadius:100,backgroundColor:'white',alignItems:'center',justifyContent:'center',elevation:10}}>
        <Icon size={30} color="black" name={'account-arrow-up'} type={'material-community'}/>
      </View>
    </View>
  );
};

export default UserLoginButton;
