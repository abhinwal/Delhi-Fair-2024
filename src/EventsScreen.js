import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButtonIcon from './assets/backbutton.png'; // Import the back button icon
import Event1 from './assets/event1.jpeg'; // Import the first event image
import Event2 from './assets/event2.jpeg'; // Import the second event image

const EventsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackButtonIcon} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Events</Text>
        <TouchableOpacity>
          <Icon name="home-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Events</Text>
        <View style={styles.separator} />
        <Image source={Event1} style={styles.eventImageLarge} />
        <Image source={Event2} style={styles.eventImageLarge} />
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
  eventImageLarge: {
    width: '100%',
    height: 500, // Increase the height for the images
    marginBottom: 20,
    resizeMode: 'contain',
  },
});

export default EventsScreen;
