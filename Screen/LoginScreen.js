import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import Loader from './Components/Loader';
import StringsOfLanguages from './StringsOfLanguages';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../slices/authSlice';

const LoginScreen = ({ navigation }) => {

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (shortform) => {
    setSelectedLanguage(shortform);
    StringsOfLanguages.setLanguage(shortform);
  };

  const lang = [
    { shortform: 'en', longform: 'English' },
    { shortform: 'ar', longform: 'العربية' },
  ];

  const [phoneNumber, setPhoneNumber] = useState('');
  // const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const phoneInputRef = createRef();


  const handleSubmitPress = () => {
    if (!phoneNumber) {
      setErrortext('Please fill Phone Number');
      return;
    }
    
    dispatch(loginUser(phoneNumber))
      .unwrap()
      .then(() => {
        navigation.navigate('ConfirmCode');
      })
      .catch((err) => {
        setErrortext(err.message || 'Invalid phone number');
      });
  };



  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">

<Loader loading={loading} />

      <Image
        source={require('../Image/regime.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />
      <View style={styles.mainBody}>
        <Loader loading={loading} />


        <Text style={styles.text}>{StringsOfLanguages.first}</Text>
        <Text style={styles.text}>{StringsOfLanguages.second}</Text>

        <View style={styles.cardContainer}>
          <KeyboardAvoidingView enabled>



          <View>
      {lang.map((item, key) => (
        <View style={styles.elementContainer} key={key}>
          <Text
            onPress={() => handleLanguageChange(item.shortform)}
            style={[
              styles.textStyle,
              item.shortform === selectedLanguage ? styles.selectedLanguage : null,
            ]}
          >
            {item.longform}
          </Text>
        </View>
      ))}

      <Text style={styles.headerText}>
        {StringsOfLanguages.get('login_title')}
      </Text>
      <Text style={styles.subHeaderText}>
        {StringsOfLanguages.get('login_sub_title')}
      </Text>
    </View>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(phoneNumber) =>
                  setPhoneNumber(phoneNumber.replace(/[^0-9]/g, ''))
                }
                placeholder="رقم الهاتف"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() =>
                  phoneInputRef.current &&
                  phoneInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>


       
         

            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>تسجيل الدخول</Text>
            </TouchableOpacity>


            {error ? (
  <Text style={styles.errorTextStyle}>
    {error}
  </Text>
) : null}


           
            {/* <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              New Here? Register
            </Text> */}
          </KeyboardAvoidingView>
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
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '30%',
    zIndex: 0,
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
  subHeaderText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 20,
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
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
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default LoginScreen;
