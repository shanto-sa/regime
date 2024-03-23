import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';

const ProfileCard = ({ name, phoneNumber }) => {
  return (
    <View style={{ marginBottom: 16, backgroundColor: '#FFFFFF', borderRadius: 30, padding: 16, alignItems: 'center', width: '100%' }}>
      <Image source={require('../../Image/profile.png')} style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 8 }} />
      <Text style={{ fontSize: 18,  color:'#000000' , marginBottom: 4 }}>{name}</Text>
      <Text style={{ fontSize: 16,  color:'#000000'  }}>{phoneNumber}</Text>
    </View>
  );
};

const OptionCard = ({ title, onPress, icon }) => {
  const renderBottomBorder = () => {
    if (title === 'إضافة إجازة' || title === 'تواصل معنا') {
      return null; // Return null to not render the bottom border
    }
    return <View style={{ borderBottomWidth: 1, borderBottomColor: '#CCCCCC', width: '100%', marginTop: 2 }} />;
  };

  return (
    <TouchableOpacity onPress={onPress} style={{ marginBottom: 5, backgroundColor: '#FFFFFF', borderRadius: 30, padding: 10, alignItems: 'center', width: '100%' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
      <Image source={require('../../Image/leftarrow.png')} style={{ width: 15, height: 15 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 18, color:'#000000'  }}>{title}</Text>
          <Image source={icon} style={{ width: 20, height: 20, marginLeft: 8 }} />
        </View>
      
      </View>
      {renderBottomBorder()}
    </TouchableOpacity>
  );
};


const MoreScreen = () => {
  const handleOptionPress = (option) => {
    console.log(option);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 16 }}>
         <Text style={{ fontSize: 24, marginBottom: 16, textAlign: 'center', color:'#000000',  fontWeight: 'bold',  }}>البروفايل</Text>

          <ProfileCard name="ماريا العقبي" phoneNumber="0597128218" />
          <Text style={{ fontSize: 18, marginBottom: 16, color:'#000000',  fontWeight: 'bold', }}>البروفايل</Text>
          <View style={{ backgroundColor:'#ffffff', padding:10, borderRadius: 30, }}>
          <OptionCard title="إضافة العناوين" onPress={() => handleOptionPress('إضافة العناوين')} icon={require('../../Image/more/1.png')} />
          <OptionCard title="إضافة إجازة" onPress={() => handleOptionPress('إضافة إجازة')} icon={require('../../Image/more/2.png')} />
          </View>
          <Text style={{ fontSize: 18, marginBottom: 16, marginTop: 16, color:'#000000',  fontWeight: 'bold', }}>الخصوصية</Text>
          <View style={{ backgroundColor:'#ffffff', padding:10, borderRadius: 30, marginBottom:60 }}>
          <OptionCard title="سياسة الخصوصية" onPress={() => handleOptionPress('سياسة الخصوصية')} icon={require('../../Image/more/3.png')} />
          <OptionCard title="الشروط والأحكام" onPress={() => handleOptionPress('الشروط والأحكام')} icon={require('../../Image/more/4.png')} />
          <OptionCard title="عن التطبيق" onPress={() => handleOptionPress('عن التطبيق')} icon={require('../../Image/more/5.png')} />
          <OptionCard title="من نحن" onPress={() => handleOptionPress('من نحن')} icon={require('../../Image/more/6.png')} />
          <OptionCard title="تواصل معنا" onPress={() => handleOptionPress('تواصل معنا')} icon={require('../../Image/more/7.png')} />
          </View>
          <View style={{ marginBottom: 16, paddingBottom: 10 }}>
            <TouchableOpacity style={{ padding: 16, borderRadius: 16, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'red', fontSize: 18 }}>تسجيل الخروج</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreScreen;