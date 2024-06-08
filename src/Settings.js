import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-outline" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Manage</Text>
          <Icon name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Permission</Text>
          <Icon name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Privacy Policy</Text>
          <Icon name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemText}>Terms and Conditions</Text>
          <Icon name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.signOutButton}>
          <Text style={styles.signOutText}>SIGN OUT</Text>
        </TouchableOpacity>
        <Text style={styles.versionText}>Version: 74.5.26 (20240201)</Text>
        <Text style={styles.versionText}>Build: ffd25f68 (20240201)</Text>
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
  content: {
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  signOutButton: {
    marginTop: 30,
    paddingVertical: 15,
    alignItems: 'center',
  },
  signOutText: {
    fontSize: 16,
    color: '#d32f2f',
    fontWeight: 'bold',
  },
  versionText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 20,
  },
});

export default Settings;
