import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButtonIcon from './assets/backbutton.png'; // Import the back button icon
import HotelsIcon from './assets/hotels.png';
import ShuttlesIcon from './assets/shuttles.png';
import ExchangeIcon from './assets/exchange.png';
import InfoDeskIcon from './assets/info_desk.png';
import LuggageIcon from './assets/luggage.png';
import TaxiIcon from './assets/taxi.png';
import MedicalIcon from './assets/medical.png';
import MediaLoungeIcon from './assets/media_lounge.png';
import RegistrationIcon from './assets/registration.png';
import VIPLoungeIcon from './assets/vip_lounge.png';

const FairFacilitiesScreen = () => {
  const navigation = useNavigation();

  const facilities = [
    { label: 'HOTELS', icon: HotelsIcon },
    { label: 'FREE SHUTTLES', icon: ShuttlesIcon },
    { label: 'FOREIGN EXCHANGE COUNTER', icon: ExchangeIcon },
    { label: 'INFORMATION DESK', icon: InfoDeskIcon },
    { label: 'LEFT LUGGAGE', icon: LuggageIcon },
    { label: 'TAXI SERVICE', icon: TaxiIcon, screen: 'TaxiServiceScreen' },
    { label: 'MEDICAL DESK', icon: MedicalIcon },
    { label: 'MEDIA LOUNGE', icon: MediaLoungeIcon },
    { label: 'REGISTRATION AREA', icon: RegistrationIcon },
    { label: 'VIP LOUNGE', icon: VIPLoungeIcon },
  ];

  const handleNavigation = (screen) => {
    if (screen) {
      navigation.navigate(screen);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackButtonIcon} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fair Facilities</Text>
        <TouchableOpacity>
          <Icon name="home-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Fair Facilities</Text>
        <View style={styles.separator} />
        <View style={styles.menuContainer}>
          {facilities.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem} onPress={() => handleNavigation(item.screen)}>
              <Image source={item.icon} style={styles.menuIcon} />
              <Text style={styles.menuLabel}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: 16,
  },
  backButtonIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  separator: {
    height: 2,
    backgroundColor: '#e74c3c',
    marginVertical: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '30%', // Adjust the width to fit three items per row
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
  },
  menuIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain', // Ensure the image fits within the boundaries
  },
  menuLabel: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
});

export default FairFacilitiesScreen;
