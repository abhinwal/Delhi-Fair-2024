import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButtonIcon from './assets/backbutton.png'; // Import the back button icon
import HomeIcon from './assets/homeicon.png'; // Import the home icon

const AboutUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackButtonIcon} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About IHGF</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
          <Image source={HomeIcon} style={styles.homeIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require('./assets/AboutUs.png')}
          style={styles.image}
        />
        <Text style={styles.sectionTitle}>About IHGF</Text>
        <Text style={styles.description}>
          IHGF Delhi Fair Spring 2024 is celebrating the 57th edition as an ultimate sourcing destination for international buyers seeking the fresh, inspiring and innovative concepts for their brands. From 6th to 10th February 2024, India Expo Centre and Mart will be abuzz with creativity, commerce and collaboration. Connect with leading manufacturers and exporters to establish valuable partnerships that drive your brand forward.
        </Text>
        <Text style={styles.description}>
          Exhibitors will unveil their latest creations with creativity taking centre stage. Get ready to join us from 6th to 10th February 2024, where inspiration meets innovation. Come, join us at the 57th edition of IHGF Delhi Fair - Spring 2024 your profitable sourcing destination.
        </Text>
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
  },
  image: {
    width: '100%',
    height: 150, // Resize the image to be slightly larger
    resizeMode: 'contain',
    marginBottom: 24, // Add more space between the image and the text
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#000',
    marginBottom: 16,
    lineHeight: 24,
  },
});

export default AboutUs;
