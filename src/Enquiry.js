import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Enquiry = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  const [query, setQuery] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Mobile:', mobile);
    console.log('Other Details:', otherDetails);
    console.log('Query:', query);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Enquiry Form</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.sectionTitle}>Personal details</Text>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Amit"
          placeholderTextColor="#aaa"
        />
        <Text style={styles.label}>Mobile Number</Text>
        <TextInput
          style={styles.input}
          value={mobile}
          onChangeText={setMobile}
          placeholder="+91 9674536782"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>Other Details</Text>
        <TextInput
          style={styles.input}
          value={otherDetails}
          onChangeText={setOtherDetails}
          placeholder=""
          placeholderTextColor="#aaa"
        />
        <Text style={styles.label}>Write your query here?</Text>
        <TextInput
          style={styles.textarea}
          value={query}
          onChangeText={setQuery}
          placeholder=""
          placeholderTextColor="#aaa"
          multiline
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
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
    backgroundColor: '#000',
    padding: 16,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#00796b',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  textarea: {
    height: 100,
    borderColor: '#00796b',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  submitButton: {
    backgroundColor: '#00796b',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Enquiry;
