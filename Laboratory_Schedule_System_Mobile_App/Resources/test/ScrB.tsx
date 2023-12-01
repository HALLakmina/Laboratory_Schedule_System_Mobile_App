/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React from 'react';

const ScrB = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center',height:'100%'}}>
      <Text style={{fontWeight:'bold',fontSize:30,color:'black',margin:20}}>scrB</Text>
      <Button title="Go A"/>
    </View>
  );
};

export default ScrB;
