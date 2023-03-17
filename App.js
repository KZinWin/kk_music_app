/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from './app/views/Home';
import MusicPlayer from './app/views/MusicPlay';
import { primary_color, primary_font_color, secondary_color, secondary_font_color } from './app/components/Common';
import { StatusBar, Text, View } from 'react-native';
import { PlayList } from './app/views/PlayList';

const Tab = createBottomTabNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { elevation: 10, backgroundColor: secondary_color, borderRadius: 0, borderTopWidth: 0, height: 60, paddingBottom: 10, position: 'relative' },
          tabBarItemStyle: { borderRadius: 30, border: 0},
        }}
      >
        <Tab.Screen 
          name='Home'  
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="home" size={focused?28 : 20} color={primary_color} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text >
                  {focused ? "." : "home"}
              </Text>
            )

          }} 
        />
        <Tab.Screen 
          name='Music Player'  
          component={MusicPlayer}
          options={{
            tabBarIcon: ({ focused }) => (
              
              <Icon name="play" size={focused?28 : 20} color={primary_color} />
            ),
            tabBarLabel: ({ focused }) => (
              <Text >
                  {focused ? "." : "play"}
              </Text>
            )
          }} 
        />
        <Tab.Screen 
          name='Play List'  
          component={PlayList}
          options={{
            tabBarIcon: ({ focused }) => (
              <Icon name="home" size={focused?28 : 20} color={primary_color}  />
            ),
            tabBarLabel: ({ focused }) => (
              <Text >
                  {focused ? "." : "list"}
              </Text>
            )
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
