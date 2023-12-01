/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import UserLoginButton from '../Components/UserLoginButton';

const IndexHomeScreen = (ls_props:any) => {

  const stack = ls_props.navigation;
  return (
    <SafeAreaView style={styles.mainView}>
      <LinearGradient colors={['#6F4CFF', '#595EFC', '#59BBFC']} start={{x: 0.0, y: 0.01 }} end={{x: 1.0, y: 1.0}} style={styles.headerView}>
        <View style={{alignItems:'flex-end', justifyContent:'center', padding:5}}>
          <UserLoginButton lb_stack={stack} />
        </View>
      </LinearGradient>
      <View style={styles.bodyView}>
        <Image style={{width:'100%',height:'100%', position:'absolute'}}  source={ require('../../Assets/images/pexels-polina-zimmerman-3747486.jpg')}/>
        <View style={styles.headingView}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source = {require('../../Assets/images/Vavuniversity.jpg.png')}/>
          </View>
          <Text style={styles.hadingText}>Laboratory Schedule System</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
    mainView:
    {
        backgroundColor: 'blue',
        flex:1,
        height: 720,
    },
    headerView:
    {
        backgroundColor: 'red',
        flex:0.6,
    },
    bodyView:
    {
        backgroundColor: 'yellow',
        flex:8,
    },
    footerView:
    {
        backgroundColor: 'green',
        flex:1,
    },
    hadingText:
    {
      fontSize:45,
      fontWeight: 'bold',
      fontFamily: 'calibre',
      //textShadowColor: 'rgba(0,0,0)',
      textShadowOffset:{
        width: 4,
        height: 4,
      },
      //textShadowOpacity:1,
      textShadowRadius:4,
      color: 'white',
      textAlign: 'center',
    },
    logo:
    {
      width:'100%',
      height:'100%',
    },
    logoContainer:{
      borderRadius:100,
      marginLeft:10,
      width:100,
      height:100,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2},
      shadowRadius: 10,
      elevation: 5,
      backgroundColor: 'white',
    },
    headingView:
    {
      alignItems:'center',
      marginTop:80,
    },
});

export default IndexHomeScreen;
