import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import BackButtonIcon from './assets/backbutton.png'; // Import the back button icon
import HallLayout1 from './assets/halllayouts1.jpeg'; // Import the first hall layout image
import HallLayout2 from './assets/halllayouts2.jpeg'; // Import the second hall layout image

const Maps = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackButtonIcon} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Hall Layouts</Text>
        <TouchableOpacity>
          <Icon name="home-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Hall Layouts</Text>
        <View style={styles.separator} />
        <Image source={HallLayout1} style={styles.hallLayoutImage} />
        <Image source={HallLayout2} style={styles.hallLayoutImageLarge} />
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
  hallLayoutImage: {
    width: '100%',
    height: 300, // Adjust the height as needed
    marginBottom: 20,
    resizeMode: 'contain',
  },
  hallLayoutImageLarge: {
    width: '100%',
    height: 500, // Increase the height for the second image
    marginBottom: 20,
    resizeMode: 'contain',
  },
});

export default Maps;
