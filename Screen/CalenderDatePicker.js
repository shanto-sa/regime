import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import DatePicker from 'react-native-date-picker';

const CalenderDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Open Date Picker" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        mode="date"
        theme="light"
      />
      <View style={styles.selectedDateContainer}>
        <Text style={styles.selectedDateText}>Selected Date: {date.toLocaleDateString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDateContainer: {
    marginVertical: 20,
  },
  selectedDateText: {
    fontSize: 18,
  },
});



export default CalenderDatePicker;
