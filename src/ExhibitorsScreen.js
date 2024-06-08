import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

// Import images from assets
import AllIcon from './assets/All.png';
import HallIcon from './assets/hall.png';
import CityIcon from './assets/searchcity.png';
import StateIcon from './assets/searchstate.png';
import CategoryIcon from './assets/category.png';
import RetailIcon from './assets/source.png';
import VrikshIcon from './assets/vrikish.png';
import MartIcon from './assets/mart.png';
import BackButtonIcon from './assets/backbutton.png'; // Import the back button icon

const ExhibitorsScreen = () => {
  const navigation = useNavigation();

  const menuItems = [
    { label: 'All Exhibitors', icon: AllIcon, screen: 'AllExhibitors' },
    { label: 'Search By Hall', icon: HallIcon },
    { label: 'Search By City', icon: CityIcon },
    { label: 'Search By State', icon: StateIcon },
    { label: 'Search By Category', icon: CategoryIcon },
    { label: 'Source Retail', icon: RetailIcon },
    { label: 'Vriksh Certified', icon: VrikshIcon },
    { label: 'Permanent Mart Exhibitor', icon: MartIcon },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackButtonIcon} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exhibitors </Text>
        <TouchableOpacity>
          <Icon name="home-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Exhibitors List of IHGF SPRING 2024</Text>
        <View style={styles.separator} />
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => item.screen && navigation.navigate(item.screen)}
            >
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
    height: 1,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  menuItem: {
    width: '45%', // Adjust the width to fit two items per row
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
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
});

export default ExhibitorsScreen;
