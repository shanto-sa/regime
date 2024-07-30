import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import Loader from './Components/Loader';

const DobScreen = ({navigation}) => {
  const [dob, setDob] = useState(new Date()); 
  const [loading, setLoading] = useState(false);

  const handleDateChange = date => {
    if (typeof date === 'string') {
      const [day, month, year] = date.split('-');
    } else {
      console.error('mainState.activeDate is not a string:', date);
    }
  };
  return (
    <View style={styles.container}>
      <DatePicker
        options={{
          backgroundColor: '#090C08',
          textHeaderColor: '#FFA25B',
          textDefaultColor: '#F6E7C1',
          selectedTextColor: '#fff',
          mainColor: '#F4722B',
          textSecondaryColor: '#D6C7A1',
          borderColor: 'rgba(122, 146, 165, 0.1)',
        }}
        current="2024-03-20"
        selected="2024-03-20"
        mode="calendar"
        minuteInterval={30}
        style={{borderRadius: 10}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
});

export default DobScreen;
