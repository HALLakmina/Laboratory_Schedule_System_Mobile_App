/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
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
      <Image style={{width:'100%',height:'100%', position:'absolute'}}  source={ require('../../Assets/images/pexels-polina-zimmerman-3747486.jpg')}/>
        <View style={styles.TB}>
          <View style={styles.TR}>
            <View style={[styles.TD, styles.timeTD]}>
              <Text style={styles.headerText}>Time</Text>
            </View>
            <View style={[styles.TD, styles.headerTD]}>
              <Text style={styles.headerText}>Monday</Text>
            </View>
          </View>

          <View style={styles.TR}>
            <View style={[styles.TD, styles.timeTD]}>
              <Text style={styles.headerText}>8.30AM{'\n'}9.30AM</Text>
            </View>
            <View style={[styles.TD, styles.alignBox]}>
              <View >
                <Text>Fundamental of ICT{'\n'}1134{'\n'}P.Amritha{'\n'}THL-01</Text>
              </View>
              <View style={styles.actionBox}>
                <Text>Action</Text>
              </View>
            </View>
          </View>
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
    TB:
    {
      margin:10,
      alignItems: 'center',
    },
    TD:
    {
      padding:10,
      justifyContent: 'center',
      borderWidth:2,
      backgroundColor:'red',
      width:250,
      margin:2,
    },
    TR:
    {
      display: 'flex',
      flexDirection: 'row',
    },
    timeTD:
    {
      width:80,
    },
    headerTD:{
      alignItems:'center',
    },
    headerText:
    {
      fontWeight: 'bold',
    },
    alignBox:
    {
      flexDirection: 'row',
    },
    actionBox:
    {
      alignContent:'flex-end',
      paddingHorizontal:20,
      backgroundColor:'white',
    },
});

export default IndexHomeScreen;
