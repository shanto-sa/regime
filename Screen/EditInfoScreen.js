import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';

const EditInfoScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const [selectedGender, setSelectedGender] = useState(null);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [goal, setGoal] = useState('');

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    
        <View style={{ flex: 1, padding: 20,   }}>
          {/* Header */}
        
          <Text style={{ fontSize: 24, color:'#000000', fontWeight: 'bold', textAlign: 'center', marginBottom: 16 }}>
            تعديل البروفايل
          </Text>
          {/* Profile Card */}
          <View style={{ alignItems: 'center', marginBottom: 30, padding:15, backgroundColor: '#ffffff', borderRadius:15, }}>
            <Image source={require('../Image/profile.png')} style={{ width: 90, height: 90, borderRadius: 60, marginBottom: 8 }} />
            <TextInput placeholder="الاسم" value={name} onChangeText={setName} style={{ borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5, paddingHorizontal: 10, marginBottom: 8, width: windowWidth - 70 }} />
            <TextInput placeholder="رقم الهاتف" value={phoneNumber} onChangeText={setPhoneNumber} style={{ borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5, paddingHorizontal: 10, marginBottom: 8, width: windowWidth - 70 }} />
            <TextInput placeholder="الطول" value={height} onChangeText={setHeight} style={{ borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5, paddingHorizontal: 10, marginBottom: 8, width: windowWidth - 70 }} />
            <TextInput placeholder="الوزن" value={weight} onChangeText={setWeight} style={{ borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5, paddingHorizontal: 10, marginBottom: 8, width: windowWidth - 70 }} />
            <TextInput placeholder="مستوى النشاط" value={activityLevel} onChangeText={setActivityLevel} style={{ borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5, paddingHorizontal: 10, marginBottom: 8, width: windowWidth - 70 }} />
            <TextInput placeholder="الهدف" value={goal} onChangeText={setGoal} style={{ borderWidth: 1, borderColor: '#CCCCCC', borderRadius: 5, paddingHorizontal: 10, marginBottom: 8, width: windowWidth - 70 }} />

            {/* Gender Selection */}
            <View style={{ flexDirection: 'row', width: '100%', marginBottom: 20 }}>
              <TouchableOpacity onPress={() => handleGenderSelection('male')} style={{ flexDirection: 'row', justifyContent: 'space-between',  backgroundColor:'#ffffff', borderWidth: 1, borderColor: '#CCCCCC',  borderRadius:15, padding:10, alignItems: 'center', marginRight: 5, flex: 1 }}>
                <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: selectedGender === 'male' ? '#006F34' : '#CCCCCC', marginRight: 5 }} />
                <Text style={{ color: 'black' }}>ذكر</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleGenderSelection('female')} style={{ flexDirection: 'row', justifyContent: 'space-between',  borderWidth: 1, borderColor: '#CCCCCC',  backgroundColor:'#ffffff', borderRadius:15, padding:10, alignItems: 'center', marginLeft: 5, flex: 1 }}>
                <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: selectedGender === 'female' ? '#006F34' : '#CCCCCC', marginRight: 5 }} />
                <Text style={{ color: 'black', }}>أنثى</Text>
              </TouchableOpacity>
            </View>

            {/* Submit Button */}
            <TouchableOpacity style={{ backgroundColor: '#006F34', borderRadius: 5, paddingVertical: 10, paddingHorizontal: 20, width: windowWidth - 70 }}>
              <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 18 }}>حفظ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditInfoScreen;
