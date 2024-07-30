import React, {useState, createRef} from 'react';
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

const LoginCodeScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');

  const phoneInputRef = createRef();
  const codeInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!phoneNumber) {
      setErrortext('Please fill Phone Number');
      return;
    }
    if (!verificationCode) {
      setErrortext('Please fill Verification Code');
      return;
    }
    setLoading(true);
    if (phoneNumber === '12345678' && verificationCode === '1234') {
      navigation.navigate('ProfileSet');
    } else {
      setErrortext('Invalid phone number or verification code');
      setLoading(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <Image
        source={require('../Image/regime.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay} />
      <View style={styles.mainBody}>
        <Loader loading={loading} />
        <View style={styles.cardContainer}>
          <KeyboardAvoidingView enabled>
            <Text style={styles.headerText}>تسجيل الدخول إلى حسابك</Text>
            <Text style={styles.subHeaderText}>
              رجيم يمنحك الباقات الأنسب لك التي تحتاجها لبناء جسم صحي
            </Text>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={phoneNumber =>
                  setPhoneNumber(phoneNumber.replace(/[^0-9]/g, ''))
                }
                placeholder="رقم الهاتف"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() =>
                  codeInputRef.current && codeInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={verificationCode =>
                  setVerificationCode(verificationCode.replace(/[^0-9]/g, ''))
                }
                placeholder="كود التحقق"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="numeric"
                ref={codeInputRef}
                returnKeyType="next"
                onSubmitEditing={handleSubmitPress}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            {errortext != '' ? (
              <Text style={styles.errorTextStyle}>{errortext}</Text>
            ) : null}
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>تسجيل الدخول</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('RegisterScreen')}>
              New Here? Register
            </Text>
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

export default LoginCodeScreen;
