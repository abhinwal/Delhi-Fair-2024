import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const generateIcon = (letter) => {
  return (
    <View style={styles.iconContainer}>
      <Text style={styles.iconText}>{letter}</Text>
    </View>
  );
};

const FurnitureAndAccessories = () => {
  const navigation = useNavigation();
  const company = { name: "A.B. Associates" };

  const handlePress = () => {
    navigation.navigate('CompanyDetails', { company });
  };

  const companyNameParts = company.name.split(' ');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Furniture & Accessories</Text>
        <TouchableOpacity>
          <Icon name="home-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.item} onPress={handlePress}>
          {generateIcon(company.name.charAt(0))}
          <View style={styles.companyNameContainer}>
            <Text style={styles.companyName}>{companyNameParts[0]}</Text>
            <Text style={styles.companyName}>{companyNameParts.slice(1).join(' ')}</Text>
          </View>
        </TouchableOpacity>
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
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  item: {
    flexDirection: 'column', // Align elements in a column
    alignItems: 'center', // Center the items
    marginBottom: 20,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#ff7f50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  companyNameContainer: {
    alignItems: 'center', // Center the text below the icon
  },
  companyName: {
    fontSize: 16,
    color: '#000',
  },
});

export default FurnitureAndAccessories;
