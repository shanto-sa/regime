import React from 'react';
import { ScrollView, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SundayRoute = () => {
  return (
    <ScrollView contentContainerStyle={styles.tabContent}>
      {/* Your content here */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tabContent: {
    paddingVertical: 16,
  },
  // Add more styles as needed
});

export default SundayRoute;
