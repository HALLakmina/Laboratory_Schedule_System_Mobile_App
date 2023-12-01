/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
//import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@rneui/themed';
import { NavigationContainer } from '@react-navigation/native';
import IndexTimetableScreen from '../Screens/IndexTimetableScreen';
import IndexNewsScreen from '../Screens/IndexNewsScreen';
import LecheredLoginNavigation from './LecheredLoginNavigation';
const Tab = createBottomTabNavigator();

const homeName = 'Home';
const timeTable = 'Timetable';
const newsName = 'News';

const MainNavigationBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon: ({focused, size, color})=>{
            let iconName: string;
            if (route.name === homeName)
            {
              iconName = focused ? 'home' : 'home-outline';
              size = focused ? size + 8 : size + 5;
            }
            else if (route.name === timeTable)
            {
              iconName = focused ? 'timer' : 'timer-outline';
              size = focused ? size + 8 : size + 5;
            }
            else if (route.name === newsName)
            {
              iconName = focused ? 'newspaper-variant' : 'newspaper-variant-outline';
              size = focused ? size + 8 : size + 5;
            }
            return <Icon name={iconName} type={'material-community'} size={size} color={color}/>;
          },
        })}
        tabBarOptions ={{
          activeTintColor:'#595EFC',
          inactiveTintColor:'black',
          showLabel: false,
        }}
      >
        <Tab.Screen name={homeName} component={LecheredLoginNavigation} options={{headerShown: false}}/>
        <Tab.Screen name={timeTable} component={IndexTimetableScreen} options={{headerShown: false}}/>
        <Tab.Screen name={newsName} component={IndexNewsScreen} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigationBar;
