import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SavedPointsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Saved Points Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SavedPointsScreen;
