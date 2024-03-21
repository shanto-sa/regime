import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import Loader from './Components/Loader';

const ProfileSetScreen = ({ navigation }) => {
  const [arabicName, setArabicName] = useState('');
  const [englishName, setEnglishName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [step, setStep] = useState(0); // Current step, 0 represents incomplete step

  const arabicNameRef = createRef();
  const englishNameRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!arabicName || !englishName) {
      setErrortext('Please fill both Arabic and English names');
      return;
    }
    setLoading(true);
    // Simulating login by checking against static credentials
    // Here you can add your logic to handle the submission
    setLoading(false);
    navigation.navigate('Goal');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <View style={styles.overlay} />

       <TouchableOpacity style={styles.topRightArrowContainer}>
                <Image
                  source={require('../Image/arrow2.png')}
                  style={styles.topRightArrow}
                />
              </TouchableOpacity>
      <View style={styles.mainBody}>
        <Loader loading={loading} />

        <View style={styles.cardContainer}>
          <KeyboardAvoidingView enabled>
            <Text style={styles.headerText}>بيانات المستخدم</Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(arabicName) => setArabicName(arabicName)}
                placeholder="الاسم بالعربي"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={() => englishNameRef.current && englishNameRef.current.focus()}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                ref={arabicNameRef}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(englishName) => setEnglishName(englishName)}
                placeholder="الاسم بالانجليزي"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="default"
                returnKeyType="next"
                onSubmitEditing={handleSubmitPress}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                ref={englishNameRef}
              />
            </View>

          </KeyboardAvoidingView>

        </View>


           {errortext != '' ? (
                        <Text style={styles.errorTextStyle}>{errortext}</Text>
                      ) : null}
        <View style={styles.bottomArrowContainer}>
          <TouchableOpacity style={styles.bottomArrow} onPress={handleSubmitPress}>
            <Image
              source={require('../Image/arrowright.png')}
              style={styles.bottomArrowImage}
            />

          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F6F6F6',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    zIndex: 1,
  },
  mainBody: {
    flex: 1,
    marginTop: '30%',
    margin: '5%',
    position: 'relative', // Added position relative
  },
  topRightArrowContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2,
  },
  topRightArrow: {
    width: 30,
    height: 30,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 60,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '900',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    height: 52,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
    paddingTop:30
  },
  bottomArrowContainer: {
    alignItems: 'center',
    marginTop: 70,
  },
  bottomArrow: {
    position: 'relative',
    padding: 20, //
    borderWidth: 1,
    borderColor: '#067737',
    borderRadius: 50,
  },
  bottomArrowImage: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: '#067737',
  },





});

export default ProfileSetScreen;
