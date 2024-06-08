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
import ContactUs from './src/ContactUs';
import AboutUs from './src/AboutUs';
import Enquiry from './src/Enquiry';
import Settings from './src/Settings';
import FurnitureAndAccessories from './src/FurnitureAndAccessories';
import ChristmasAndDecorations from './src/ChristmasAndDecorations';
import GardenAndAccessories from './src/GardenAndAccessories';
import GiftWrapsAndRibbons from './src/GiftWrapsAndRibbons';
import CompanyDetails from './src/CompanyDetails';
import AllExhibitors from './src/AllExhibitors';
import Maps from './src/Maps';
import TaxiServiceScreen from './src/TaxiServiceScreen';


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
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Enquiry" component={Enquiry} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="FurnitureAndAccessories" component={FurnitureAndAccessories} />
        <Stack.Screen name="ChristmasAndDecorations" component={ChristmasAndDecorations} />
        <Stack.Screen name="GardenAndAccessories" component={GardenAndAccessories} />
        <Stack.Screen name="GiftWrapsAndRibbons" component={GiftWrapsAndRibbons} />
        <Stack.Screen name="CompanyDetails" component={CompanyDetails} />
        <Stack.Screen name="AllExhibitors" component={AllExhibitors} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="TaxiServiceScreen" component={TaxiServiceScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
