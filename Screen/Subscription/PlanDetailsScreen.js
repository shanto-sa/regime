import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const PlanDetailsScreen = () => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { strings } = useSelector((state) => state.commonData);

  const handleSingleIndexSelect = index => {
    setSelectedIndex(index);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePlanDaysPress = () => {
    navigation.navigate('PlanDays');
  };


  const tabContents = [
    [
      { image: require('../../Image/plancard.png'), text: strings.p_content },
      { image: require('../../Image/plancard.png'), text: strings.p_content },
      { image: require('../../Image/plancard.png'), text: strings.p_content },
      { image: require('../../Image/plancard.png'), text: strings.p_content },
      { image: require('../../Image/plancard.png'), text: strings.p_content },
      { image: require('../../Image/plancard.png'), text: strings.p_content },

   
    ],
    [
      { image: require('../../Image/plancard.png'), text: strings.p_content },
      { image: require('../../Image/plancard.png'), text: strings.p_content },
    ], // For Sunday
    [], // For Monday
    [], // For Tuesday
    [], // For Wednesday
    [], // For Thursday
  ];

  // Function to render tab content or message if content is not found
  const renderTabContent = () => {
    if (tabContents[selectedIndex].length > 0) {
      return (
        <FlatList
          horizontal
          data={tabContents[selectedIndex]}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.text}</Text>
            </View>
          )}
        />
      );
    } else {
      return (
        <Text style={styles.noContentText}>{strings.not_found_content_in_tab}</Text>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>{strings.menu_header}</Text>
        <View style={styles.tabContainer}>
          {/* Segmented Control with Custom Styling */}
          <SegmentedControlTab
            values={[strings.saturday, strings.sunday, strings.monday, strings.tuesday, strings.wednesday, strings.thursday]}
            selectedIndex={selectedIndex}
            onTabPress={handleSingleIndexSelect}
            borderRadius={0}
            tabsContainerStyle={{
              height: 50,
              backgroundColor: '#F2F2F2',
              flexDirection: 'row',
            }}
            tabStyle={{
              backgroundColor: '#FFFFFF',
              borderWidth: 0,
              borderColor: 'transparent',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            tabTextStyle={{ color: '#000000', fontWeight: 'bold' }}
            activeTabStyle={{ backgroundColor: '#ffffff', }}
            activeTabTextStyle={{ color: '#888888', borderBottomWidth: 2, borderBottomColor: 'green'  }}
          />
        </View>
        <View style={styles.contentContainer}>
          {/* Display tab content or message if content is not found */}
          <View style={styles.tabContentContainer}>
            {renderTabContent()}
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.planHeaderText}>{strings.plan_header}</Text>
            <View style={styles.planButtonsContainer}>
              {[
                { text: strings.plan_14_days },
                { text: strings.plan_28_days },
                { text: strings.plan_30_days },
                { text: strings.plan_7_days }
              ].map((plan, index) => (
                <TouchableOpacity 
                  key={index} 
                  style={[styles.planButton, selectedPlan === plan.text && styles.selectedPlanButton]} 
                  onPress={() => handlePlanSelect(plan.text)}
                >
                  <Text style={[styles.planButtonText, selectedPlan === plan.text && styles.selectedPlanButtonText]}>{plan.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handlePlanDaysPress}>
              <Text style={styles.submitButtonText}>{strings.next_button}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlanDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-end', // Align text to the right
    fontWeight:'bold',
    color:'#000000'
  },
  tabContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  contentContainer: {
    marginTop: 50, // Adjust to fit the tab height
  },
  tabContentContainer: {
    marginTop: 10,
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: '#f2f2f2',
    marginRight: 10,
    padding:1,
    borderRadius: 15,
  },
  image: {
    width: 80, // Adjust image size
    height: 80, // Adjust image size
    resizeMode: 'cover',
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    numberOfLines: 2,
    color:'#000'
  },
  noContentText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  bottomContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  planHeaderText: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'flex-end', // Align text to the right
    fontWeight:'bold',
    color:'#000000'
  },
  planButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  planButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 13,
    width: '48%', // Adjust to fit two buttons per row
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3, 
  },
  planButtonText: {
    color: '#000',
    fontSize: 16,
  },
  selectedPlanButton: {
    backgroundColor: '#067737',
  },
  selectedPlanButtonText: {
    color: 'white',
  },
  submitButton: {
    marginTop:65,
    backgroundColor: '#006F34',
    padding: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
