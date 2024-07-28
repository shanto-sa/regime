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
import { useDispatch, useSelector } from 'react-redux';
import { verifyOTP } from '../slices/authSlice';


const ConfirmCodeScreen = ({ route, navigation }) => {

  const { strings } = useSelector((state) => state.commonData);

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

   // Get the phone number from the route parameters
   const phoneNumber = route.params?.phoneNumber;

   console.log(phoneNumber);


  const [validationCode, setValidationCode] = useState('');

  const validationCodeRef = createRef();

  const handleSubmitPress = () => {
    if (!phoneNumber || !validationCode) {
      console.error('Please fill both Phone Number and Validation Code');
      return;
    }

    dispatch(verifyOTP({ phoneNumber, otp: validationCode }))
      .unwrap()
      .then(() => {
        navigation.navigate('ProfileSet');
      })
      .catch((error) => {
        console.error('OTP verification failed:', error);
      });
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

          <Text style={styles.headerText}>
          {strings.login_title}
            </Text>
            <Text style={styles.subHeaderText}>
            {strings.login_sub_title}
            </Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                value={phoneNumber}
                onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                placeholder={strings.phone_number_placeholder}
                placeholderTextColor="#8b9cb5"
                keyboardType="phone-pad"
                editable={false}
                returnKeyType="next"
                onSubmitEditing={() => validationCodeRef.current && validationCodeRef.current.focus()}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(validationCode) => setValidationCode(validationCode)}
                placeholder={strings.verification_code_placeholder}
                placeholderTextColor="#8b9cb5"
                keyboardType="number-pad"
                returnKeyType="done"
                onSubmitEditing={handleSubmitPress}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
                ref={validationCodeRef}
              />
            </View>

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>{strings.login_button_text}</Text>
            </TouchableOpacity>

          </KeyboardAvoidingView>
        </View>

        {error ? (
          <Text style={styles.errorTextStyle}>{error}</Text>
        ) : null}
        
       
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
        position: 'relative',
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
        paddingTop:15
      },
      bottomArrowContainer: {
        alignItems: 'center',
        marginTop: 70,
      },

      buttonStyle: {
        backgroundColor: '#006F34',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height: 52,
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 50,
        marginBottom: 10,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 15,
        fontSize: 16,
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

export default ConfirmCodeScreen;