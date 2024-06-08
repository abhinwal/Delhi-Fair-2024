import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Linking, BackHandler } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const Landing = () => {
  const navigation = useNavigation();
  const eventDate = new Date('2024-10-16T00:00:00').getTime(); // Set your event date
  const currentDate = new Date().getTime();
  const timeRemaining = (eventDate - currentDate) / 1000; // Convert to seconds

  const handleRegisterPress = () => {
    Linking.openURL('https://www.ihgfdelhifair.in/register.php');
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        navigation.navigate('Home');
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, [navigation])
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
          <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('FurnitureAndAccessories')}>
            <Image source={require('./assets/furniture.png')} style={styles.rowImage} />
            <Text style={styles.imageText}>Furniture & Accessories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('ChristmasAndDecorations')}>
            <Image source={require('./assets/christmas.png')} style={styles.rowImage} />
            <Text style={styles.imageText}>Christmas & Decorations</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('GardenAndAccessories')}>
            <Image source={require('./assets/garden.png')} style={styles.rowImage} />
            <Text style={styles.imageText}>Garden & Accessories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer} onPress={() => navigation.navigate('GiftWrapsAndRibbons')}>
            <Image source={require('./assets/gift.png')} style={styles.rowImage} />
            <Text style={styles.imageText}>Gift Wraps & Ribbons</Text>
          </TouchableOpacity>
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
            digitStyle={{ backgroundColor: '#fff' }}
            digitTxtStyle={{ color: '#000' }}
            timeLabelStyle={{ color: '#fff', fontWeight: 'bold' }}
            separatorStyle={{ color: '#fff' }}
            timeToShow={['D', 'H', 'M', 'S']}
            timeLabels={{ d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds' }}
            showSeparator
          />
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ExhibitorsScreen')}>
            <Image source={require('./assets/exhibitors.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Exhibitors</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('FairFacilitiesScreen')}>
            <Image source={require('./assets/fair.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Fair Facilities</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('HallLayoutsScreen')}>
            <Image source={require('./assets/halll.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Hall Layouts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('EventsScreen')}>
            <Image source={require('./assets/events.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Events</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ContactUs')}>
            <Image source={require('./assets/contact.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('AboutUs')}>
            <Image source={require('./assets/delhifair.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>About Us</Text>
          </TouchableOpacity>
        </View>

        
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Enquiry')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/FFFFFF/info.png' }} style={styles.footerIcon} />
          <Text style={styles.footerButtonText}>Enquiry</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Maps')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/FFFFFF/map.png' }} style={styles.footerIcon} />
          <Text style={styles.footerButtonText}>Maps</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Settings')}>
          <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/FFFFFF/settings.png' }} style={styles.footerIcon} />
          <Text style={styles.footerButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/FFFFFF/share.png' }} style={styles.footerIcon} />
          <Text style={styles.footerButtonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContainer: {
    paddingBottom: 100, // Extra padding to accommodate footer
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
    marginHorizontal: 5, // Add margin between images
  },
  bottomRowImage: {
    width: '40%',
    height: 80,
    borderRadius: 10,
  },
  bottomImageText: {
    color: '#fff',
    marginTop: 4,
    textAlign: 'center',
    fontSize: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#fff',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
  footerButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  buttonContainer: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  buttonImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 16,
  },
});

export default Landing;
