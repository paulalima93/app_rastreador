import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './screens/home';
import IssScreen from './screens/iss';
import MeteorScreen from './screens/meteor';

const Stack =  createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Iss' component={IssScreen} />
        <Stack.Screen name='Meteor' component={MeteorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


