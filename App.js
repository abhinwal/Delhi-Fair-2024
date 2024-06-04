import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Splash from './src/Splash';
import Verification from './src/Verification';
import Landing from './src/Landing';
import ExhibitorsScreen from './src/ExhibitorsScreen';
import FairFacilitiesScreen from './src/FairFacilitiesScreen';
import HallLayoutsScreen from './src/HallLayoutsScreen';
import EventsScreen from './src/EventsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="ExhibitorsScreen" component={ExhibitorsScreen} />
        <Stack.Screen name="FairFacilitiesScreen" component={FairFacilitiesScreen} />
        <Stack.Screen name="HallLayoutsScreen" component={HallLayoutsScreen} />
        <Stack.Screen name="EventsScreen" component={EventsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
