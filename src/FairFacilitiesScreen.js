// src/FairFacilitiesScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FairFacilitiesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fair Facilities Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});

export default FairFacilitiesScreen;
