import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const TuesdayRoute = () => {
  return <ScrollView contentContainerStyle={styles.tabContent}></ScrollView>;
};

const styles = StyleSheet.create({
  tabContent: {
    paddingVertical: 16,
  },
});

export default TuesdayRoute;
