import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const CompanyDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { company } = route.params;

  const companyDetails = {
    Email: "info@abassociates.com",
    "Contact Person": "John Doe",
    State: "California",
    City: "Los Angeles",
    "Stand No.": "H-07/42",
    Hall: "12",
    Contact: "1234567890",
    "Source Retail": "Yes",
    "Vriksh Certified": "NA",
    Website: "www.abassociates.com",
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{company.name}</Text>
        <TouchableOpacity>
          <Icon name="home-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.companyTitle}>{company.name}</Text>
        <View style={styles.table}>
          {Object.entries(companyDetails).map(([key, value]) => (
            <View key={key} style={styles.tableRow}>
              <Text style={styles.tableCellKey}>{key}</Text>
              <Text style={styles.tableCellValue}>{value}</Text>
            </View>
          ))}
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save My Location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Navigate</Text>
          </TouchableOpacity>
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
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 16,
  },
  companyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00529B',
    marginBottom: 20,
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  tableCellKey: {
    flex: 1,
    fontWeight: 'bold',
    color: '#000',
  },
  tableCellValue: {
    flex: 1,
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CompanyDetails;
