import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePickerExample = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateTimeContainer}>
        <Text style={styles.dateTimeText}>Selected Date: {date.toLocaleString()}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={showDatepicker} title="Show Date Picker" />
        <Button onPress={showTimepicker} title="Show Time Picker" />
      </View>
      {show && (
        <View>
          {Platform.OS === 'ios' ? (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          ) : (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
              themeVariant="light"
            />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTimeContainer: {
    marginBottom: 20,
  },
  dateTimeText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default DatePickerExample;