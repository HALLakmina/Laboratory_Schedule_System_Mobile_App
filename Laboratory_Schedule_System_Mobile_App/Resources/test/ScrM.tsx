/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React from 'react';

const ScrM = (props: any) => {

  // function gotoA() {
  //     props.navigation.navigate('AScreen');
  // }

  function gotoB() {
      props.navigation.navigate('BScreen');
  }
  return (
    <View style={{alignItems: 'center', justifyContent: 'center',height:'100%'}}>
      <Text style={{fontWeight:'bold',fontSize:30,color:'black',margin:20}}>scrM</Text>
      {/* <Button title="Go A" onPress={gotoA}/> */}
      <View style={{margin:20}}>
        <Button title="Go B" onPress={gotoB}/>
      </View>
    </View>
  );
};

export default ScrM;
