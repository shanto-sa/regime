import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { setStartDate, setEndDate, submitVacation } from '../../slices/vacationSlice';

const VacationScreen = () => {

  const dispatch = useDispatch();
  const { startDate, endDate, isLoading, error } = useSelector(
    (state) => state.vacation
  );

  const handleStartDateChange = (date) => {
    dispatch(setStartDate(date));
  };

  const handleEndDateChange = (date) => {
    dispatch(setEndDate(date));
  };

  const handleSubmit = () => {
    const vacationData = {
      startDate,
      endDate,
    };

    
    dispatch(submitVacation(vacationData));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView>
        <View style={styles.container}>
        <Text style={styles.header}>
          الشروط والأحكام 
        </Text>
          {/* First Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>إضافة تاريخ الإجازة</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.dateInput}
                placeholder="DD/MM/YYYY"
                value={startDate}
                onChangeText={handleStartDateChange}
              />
            </View>
          </View>

          {/* Second Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>إضافة إجازة من تاريخ إلى تاريخ</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.dateInput}
                placeholder="DD/MM/YYYY"
                value={startDate}
                onChangeText={handleStartDateChange}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.dateInput}
                placeholder="DD/MM/YYYY"
                value={endDate}
                onChangeText={handleEndDateChange}
              />
            </View>
          </View>

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>تأكيد</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, 
  },
  cardTitle: {
    fontSize: 18,
    color:'#000000',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dateInput: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    textAlign: 'right', // Align text to the right
  },
  
  submitButton: {
    backgroundColor: '#006F34',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 30,
    width: '100%',
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default VacationScreen;