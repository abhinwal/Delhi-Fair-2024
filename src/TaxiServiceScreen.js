import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButtonIcon from './assets/backbutton.png'; // Import the back button icon
import HomeIcon from './assets/homeicon.png'; // Import the home icon
import TaxiImage from './assets/taxi2.png'; // Import the taxi service image

const TaxiServiceScreen = () => {
  const navigation = useNavigation();

  const handleSaveLocation = () => {
    // Add functionality to save location
    alert('Location saved!');
  };

  const handleNavigate = () => {
    // Add functionality to navigate
    alert('Navigating...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackButtonIcon} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Maps</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
          <Image source={HomeIcon} style={styles.homeIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={handleSaveLocation}>
            <Text style={styles.buttonText}>Save My Location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.blueButton]} onPress={handleNavigate}>
            <Text style={styles.buttonText}>Navigate</Text>
          </TouchableOpacity>
        </View>
        <Image source={TaxiImage} style={styles.mapImageLarge} />
      </View>
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
  homeIcon: {
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
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10, // Decrease the bottom margin
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  blueButton: {
    backgroundColor: '#007bff', // Blue background color
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  mapImageLarge: {
    width: '100%',
    height: 500, // Increase the height for the image
    resizeMode: 'contain',
  },
});

export default TaxiServiceScreen;
