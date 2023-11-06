/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import UserLoginButton from '../Components/UserLoginButton';

const IndexHomeScreen = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      <LinearGradient colors={['#6F4CFF', '#595EFC', '#59BBFC']} start={{x: 0.0, y: 0.01 }} end={{x: 1.0, y: 1.0}} style={styles.headerView}>
        <View style={{alignItems:'flex-end', justifyContent:'center', padding:5}}>
          <UserLoginButton/>
        </View>
      </LinearGradient>
      <View style={styles.bodyView}>
        <Text>News</Text>
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
});

export default IndexHomeScreen;
