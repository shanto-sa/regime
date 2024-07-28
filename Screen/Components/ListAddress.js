import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

// Address Card Component
const AddressCard = ({ address }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxPress = () => {
    setIsSelected(!isSelected);
  };

  return (
    <View style={styles.addressCard}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={handleCheckboxPress}>
          <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}></View>
        </TouchableOpacity>
        <Text style={styles.addressType}>المنزل</Text>
      </View>
      <View style={styles.addressInfo}>
        <Text style={styles.addressText}>{address}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../../Image/icon/delete.png')} style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Image source={require('../../Image/icon/edit.png')} style={styles.actionIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.assignButton}>
          <Text style={styles.assignButtonText}>تعيين</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ListAddress = () => {
  
  const navigation = useNavigation();

  const handleAddAddressPress = () => {
    navigation.navigate('AddAddress'); // Navigate to EditProfileScreen
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>العناوين</Text>
          {/* Address Cards */}
          <AddressCard address="St, Khorais Bldg 4th floor, Jeddah 23526, Saudi Arabia" />
          <AddressCard address="St, Khorais Bldg 4th floor, Jeddah 23526, Saudi Arabia" />
          {/* <AddressCard  address="St, Khorais Bldg 4th floor, Jeddah 23526, Saudi Arabia" /> */}
          {/* New Address Button */}
          <TouchableOpacity style={styles.addButton} onPress={handleAddAddressPress}>
            <Image source={require('../../Image/icon/plus.png')} style={styles.plusIcon} />
            <Text style={styles.addButtonLabel}>إضافة عنوان جديد</Text>
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
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  addressCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#006F34', // Green shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5, // Adjust opacity as needed
    shadowRadius: 5, // Adjust radius as needed
    elevation: 10,
  },
  
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#2CA545',
  },
  checkboxSelected: {
    backgroundColor: 'green',
  },
  addressType: {
    fontSize: 24,
    color:'#000000',
    fontWeight: 'bold',
  },
  addressInfo: {
    marginBottom: 10,
  },
  addressText: {
    fontSize: 12,
    color:'#000000',
    padding:10,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 10, // Increased padding
    width: 60, // Increased width
    justifyContent: 'center', // Center content horizontally
    alignItems: 'center', // Center content vertically
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionIcon: {
    width: 20,
    height: 20,
  },
  assignButton: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    // marginLeft: 'auto', 
  },
  assignButtonText: {
    color: '#3D9D1C',
    fontWeight: 'bold',
    fontSize: 16,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    width:'100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  plusIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginRight: 'auto', 
  },
  addButtonLabel: {
    color: '#000000',
    fontWeight: 'bolder',
    fontSize: 18,
  },
});

export default ListAddress;
