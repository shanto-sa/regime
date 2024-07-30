import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const PlanDaysScreen = () => {
  const navigation = useNavigation();
  const [selectedDays, setSelectedDays] = useState([]);
  const { strings } = useSelector((state) => state.commonData);

  const handlePlanDaysPress = () => {
    navigation.navigate('PayNow');
  };

  const toggleDaySelection = (day) => {
    setSelectedDays(prevSelectedDays => {
      if (prevSelectedDays.includes(day)) {
        return prevSelectedDays.filter(selectedDay => selectedDay !== day);
      } else {
        return [...prevSelectedDays, day];
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, paddingHorizontal: 16 , backgroundColor:'#FFFFFF'}}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{strings.start_day_title}</Text>
            <TextInput
              style={styles.input}
              placeholder="1/12/2023"
              placeholderTextColor="#888888"
            />
          </View>
          <View style={styles.section}>
          <Text style={styles.sectionTitle}>{strings.selected_days_title}</Text>
            <View style={styles.buttonsContainer}>
              {[strings.friday, strings.saturday, strings.sunday, strings.monday, strings.tuesday, strings.wednesday, strings.thursday].map(day => (
                <TouchableOpacity
                  key={day}
                  style={[
                    styles.button,
                    selectedDays.includes(day) && styles.selectedButton
                  ]}
                  onPress={() => toggleDaySelection(day)}
                >
                  <Text style={[styles.buttonText, selectedDays.includes(day) && styles.selectedButtonText]}>{day}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.section}>
            <TextInput
              style={[styles.input, { height: 90 }]}
              multiline
              placeholder={strings.note_placeholder}
              placeholderTextColor="#888888"
            />
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={handlePlanDaysPress}>
            <Text style={styles.submitButtonText}>{strings.next_button}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000',
    alignSelf: 'flex-end', // Align text to the right
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#000000',
    textAlign: 'right',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
    marginTop: 20,
    justifyContent: 'space-between', // Add this line to evenly space the buttons
  },
  button: {
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
  buttonText: {
    color: '#000000',
    fontSize: 11,
    textAlign: 'center',
  },
  selectedButton: {
    backgroundColor: '#067737',
  },
  selectedButtonText: {
    color: '#FFF',
  },
  submitButton: {
    marginTop:25,
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

export default PlanDaysScreen;
