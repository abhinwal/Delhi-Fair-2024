// src/Landing.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Linking } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { useNavigation } from '@react-navigation/native';

const Landing = () => {
  const navigation = useNavigation();
  const eventDate = new Date('2024-10-16T00:00:00').getTime(); // Set your event date
  const currentDate = new Date().getTime();
  const timeRemaining = (eventDate - currentDate) / 1000; // Convert to seconds

  const handleRegisterPress = () => {
    Linking.openURL('https://www.ihgfdelhifair.in/register.php');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/FFFFFF/menu.png' }} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>IHGF DELHI FAIR 2024</Text>
        <TouchableOpacity>
          <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/FFFFFF/search.png' }} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.partitionLine} />

      <View style={styles.imageRow}>
        <View style={styles.imageContainer}>
          <Image source={require('./assets/image1.jpg')} style={styles.rowImage} />
          <Text style={styles.imageText}>Furniture & Accessories</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./assets/image2.jpg')} style={styles.rowImage} />
          <Text style={styles.imageText}>Christmas & Decorations</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./assets/image3.jpg')} style={styles.rowImage} />
          <Text style={styles.imageText}>Garden & Accessories</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('./assets/image4.jpg')} style={styles.rowImage} />
          <Text style={styles.imageText}>Gift Wraps & Ribbons</Text>
        </View>
      </View>

      <Image source={require('./assets/carousel1.jpg')} style={styles.mainImage} />

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Pre Register</Text>
        <Text style={styles.infoSubtitle}>58th IHGF Delhi Fair Autumn 2024</Text>
        <Text style={styles.infoDescription}>
          India Expo Centre & Mart, Greater Noida, Delhi-NCR{'\n'}
          16th - 20th October 2024
        </Text>
        <TouchableOpacity style={styles.registerButton} onPress={handleRegisterPress}>
          <Text style={styles.registerButtonText}>Register Here</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.countdownContainer}>
        <CountDown
          until={timeRemaining}
          onFinish={() => alert('The event has started!')}
          size={30}
          digitStyle={{backgroundColor: '#fff'}}
          digitTxtStyle={{color: '#000'}}
          timeLabelStyle={{color: '#fff', fontWeight: 'bold'}}
          separatorStyle={{color: '#fff'}}
          timeToShow={['D', 'H', 'M', 'S']}
          timeLabels={{d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}}
          showSeparator
        />
      </View>

      <View style={styles.bottomImageRow}>
        <TouchableOpacity style={styles.bottomImageContainer} onPress={() => navigation.navigate('ExhibitorsScreen')}>
          <Image source={require('./assets/image1.jpg')} style={styles.bottomRowImage} />
          <Text style={styles.bottomImageText}>Exhibitors</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomImageContainer} onPress={() => navigation.navigate('FairFacilitiesScreen')}>
          <Image source={require('./assets/image2.jpg')} style={styles.bottomRowImage} />
          <Text style={styles.bottomImageText}>Fair Facilities</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomImageRow}>
        <TouchableOpacity style={styles.bottomImageContainer} onPress={() => navigation.navigate('HallLayoutsScreen')}>
          <Image source={require('./assets/image3.jpg')} style={styles.bottomRowImage} />
          <Text style={styles.bottomImageText}>Hall Layouts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomImageContainer} onPress={() => navigation.navigate('EventsScreen')}>
          <Image source={require('./assets/image4.jpg')} style={styles.bottomRowImage} />
          <Text style={styles.bottomImageText}>Events</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000',
  },
  icon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  partitionLine: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  imageContainer: {
    alignItems: 'center',
    width: Dimensions.get('window').width / 5 - 8, // Adjust width to account for margin
    marginHorizontal: 8, // Add margin between images
  },
  rowImage: {
    width: '100%',
    height: 60,
    borderRadius: 10,
  },
  imageText: {
    color: '#fff',
    marginTop: 4,
    textAlign: 'center',
    fontSize: 10,
  },
  mainImage: {
    width: '100%',
    height: Dimensions.get('window').height - 300, // Adjust the height accordingly
  },
  infoSection: {
    padding: 16,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoSubtitle: {
    marginVertical: 8,
    fontSize: 14,
    color: '#fff',
  },
  infoDescription: {
    textAlign: 'center',
    marginVertical: 8,
    color: '#fff',
  },
  registerButton: {
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  registerButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  countdownContainer: {
    padding: 16,
    alignItems: 'center',
  },
  bottomImageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 3,
    paddingVertical: 8,
  },
  bottomImageContainer: {
    alignItems: 'center',
    width: Dimensions.get('window').width / 2.2, // Adjust width to account for margin
    marginHorizontal: 8, // Add margin between images
  },
  bottomRowImage: {
    width: '100%',
    height: 80,
    borderRadius: 10,
  },
  bottomImageText: {
    color: '#fff',
    marginTop: 4,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default Landing;

