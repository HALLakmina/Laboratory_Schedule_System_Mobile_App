/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import UserLoginButton from '../Components/UserLoginButton';

const IndexHomeScreen = (ls_props:any) => {
  const stack = ls_props.navigation;

  return (
    <SafeAreaView style={styles.mainView}>
      <LinearGradient colors={['#6F4CFF', '#595EFC', '#59BBFC']} start={{x: 0.0, y: 0.01 }} end={{x: 1.0, y: 1.0}} style={styles.headerView}>
        <View style={{alignItems:'flex-end', justifyContent:'center', padding:5}}>
          <UserLoginButton lb_stack={stack}/>
        </View>
      </LinearGradient>
      <View style={styles.bodyView}>
      <Image style={{width:'100%',height:'100%', position:'absolute'}}  source={ require('../../Assets/images/pexels-polina-zimmerman-3747486.jpg')}/>
        <ScrollView>
          <View style={styles.scrollContainer}>
            <View style={styles.newsCard}>
              <View style={{width:'100%',height:200, backgroundColor:'red',borderRadius:10}}>
                <Image style={{width:'100%',height:'100%',borderTopLeftRadius:10,borderTopRightRadius:10}}  source={ require('../../Assets/images/pexels-polina-zimmerman-3747486.jpg')}resizeMode="cover"/>
              </View>
              <ScrollView style={{margin:10}} nestedScrollEnabled={true}>
                <Text style={{margin:10}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem suscipit, sequi optio atque natus ut ea animi minus architecto illo sit? Excepturi eius ab hic dolores deleniti repellendus asperiores iure.</Text>
              </ScrollView>
            </View>
            <View style={styles.newsCard}>
              <Text>News</Text>
            </View>
          </View>
        </ScrollView>
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
    scrollContainer:
    {
      alignItems: 'center',
      marginTop:20,
    },
    newsCard:
    {
      width:300,
      height:400,
      backgroundColor:'white',
      borderRadius:10,
      margin:10,
      alignItems: 'center',
    },
});

export default IndexHomeScreen;
