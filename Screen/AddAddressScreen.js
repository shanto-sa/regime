import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress } from '../slices/addressSlice'; // We'll create this next

const AddAddressScreen = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(state => state.address);
  const { strings } = useSelector((state) => state.commonData);
  const [addressType, setAddressType] = useState('');
  const [district, setDistrict] = useState('');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [apartment, setApartment] = useState('');
  const [building, setBuilding] = useState('');
  const [street, setStreet] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [additionalNumber, setAdditionalNumber] = useState('');
  const [deliveryInstructions, setDeliveryInstructions] = useState('');

  const handleSubmit = () => {
    const addressData = {
      addressType,
      district,
      region,
      city,
      apartment,
      building,
      street,
      zipCode,
      additionalNumber,
      deliveryInstructions
    };

    dispatch(addAddress(addressData));
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <Text style={styles.header}>Add New Address</Text>
      
      <TextInput
        style={styles.input}
        placeholder={strings.address_type}
        value={addressType}
        onChangeText={setAddressType}
      />
      <TextInput
        style={styles.input}
        placeholder={strings.district}
        value={district}
        onChangeText={setDistrict}
      />
      <TextInput
        style={styles.input}
        placeholder={strings.region}
        value={region}
        onChangeText={setRegion}
      />
      <TextInput
        style={styles.input}
        placeholder={strings.city}
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder={strings.apartment}
        value={apartment}
        onChangeText={setApartment}
      />
      <TextInput
        style={styles.input}
        placeholder={strings.building}
        value={building}
        onChangeText={setBuilding}
      />
      <TextInput
        style={styles.input}
        placeholder={strings.street}
        value={street}
        onChangeText={setStreet}
      />
      <TextInput
        style={styles.input}
        placeholder={strings.zip_code}
        value={zipCode}
        onChangeText={setZipCode}
      />
      <TextInput
        style={styles.input}
        placeholder={strings.additional_number}
        value={additionalNumber}
        onChangeText={setAdditionalNumber}
      />
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder={strings.delivery_instructions}
        value={deliveryInstructions}
        onChangeText={setDeliveryInstructions}
        multiline
      />
  
      <TouchableOpacity 
        style={[styles.submitButton, loading && styles.disabledButton]} 
        onPress={handleSubmit}
        disabled={loading}
      >
        <Text style={styles.submitButtonText}>
          {loading ? strings.adding : strings.add_address}
        </Text>
      </TouchableOpacity>
  
      {error && <Text style={styles.errorText}>{error}</Text>}
    </ScrollView>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#006F34',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#CCCCCC',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default AddAddressScreen;