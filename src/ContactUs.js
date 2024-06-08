import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButtonIcon from './assets/backbutton.png'; // Import the back button icon
import HomeIcon from './assets/homeicon.png'; // Import the home icon

const ContactUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={BackButtonIcon} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Get in Touch</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
          <Image source={HomeIcon} style={styles.homeIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require('./assets/ContactUs.jpeg')}
          style={styles.image}
        />
        <Text style={styles.sectionTitle}>Get in Touch</Text>
        <View style={styles.infoSection}>
          <Text style={styles.subsectionTitle}>Overseas Buyers</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactEmail}>visitors@ihgfdelhifair.in</Text>
            <Text style={styles.contactNumber}>+91-9818008078</Text>
            <Text style={styles.contactNumber}>+91-9818725553</Text>
          </View>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.subsectionTitle}>Buying & Sourcing Consultants</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactEmail}>buyingagents@ihgfdelhifair.in</Text>
            <Text style={styles.contactNumber}>+91-9350202196</Text>
          </View>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.subsectionTitle}>Domestic Volume Buyers</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactEmail}>epchdomestic@ihgfdelhifair.in</Text>
            <Text style={styles.contactNumber}>+91-9711364656</Text>
            <Text style={styles.contactNumber}>+91-8800722199</Text>
          </View>
        </View>
        <View style={styles.infoSection}>
          <Text style={styles.subsectionTitle}>Exhibitors</Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactEmail}>exhibitors@ihgfdelhifair.in</Text>
            <Text style={styles.contactNumber}>+91-9958938464</Text>
          </View>
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
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  infoSection: {
    backgroundColor: '#e0f7fa',
    padding: 10,
    marginBottom: 16,
    borderRadius: 5,
  },
  subsectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  contactRow: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 8,
  },
  contactEmail: {
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  contactNumber: {
    fontSize: 16,
    color: '#000',
  },
});

export default ContactUs;
