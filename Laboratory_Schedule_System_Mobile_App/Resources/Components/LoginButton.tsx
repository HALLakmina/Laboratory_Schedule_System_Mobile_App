/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

type LoginProps = {
    addText:string
}
const LoginButton = (props: LoginProps) => {
  return (
      <Pressable  style ={({pressed}) => pressed ? [styles.click] : [styles.buttonView] }>
        {({pressed}) => pressed ? [<Text style ={styles.clickButtonText}>{props.addText}</Text>] : [<Text style ={styles.buttonText}>{props.addText}</Text>]}
      </Pressable>
  );
};
const styles = StyleSheet.create({
  buttonView:
    {
      width:150,
      alignItems:'center',
      textAlign:'center',
      borderWidth: 3,
      borderColor: 'black',
      borderRadius:10,
      paddingVertical: 5,
    },
    buttonText:
    {
      fontSize:18,
      fontWeight: 'bold',
      color: 'black',
    },
    click:
    {
      width:150,
      backgroundColor:'black',
      color:'white',
      borderWidth: 3,
      borderColor: 'White',
      borderRadius:10,
      paddingVertical: 5,
    },
    clickButtonText:
    {
      fontSize:18,
      fontWeight: 'bold',
      color: 'white',
      textAlign:'center',
    },

});
export default LoginButton;
