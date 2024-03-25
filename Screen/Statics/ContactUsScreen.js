import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const ContactUsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>
            تواصل معنا
          </Text>
          <Image source={require('../../Image/regimelogo.png')} style={styles.image} />
          <View style={styles.yellowLine} />
          <Text style={styles.text}>
            تواصل معنا عبر
            <Text style={styles.boldText}> 966136765068+</Text>
            {'\n'}
            أو يمكنك إرسال رسالة نصية إلى فريق الدعم
          </Text>
          <TextInput style={styles.input} placeholder="عنوان الرسالة" />
          <View style={styles.fileUploadContainer}>
            <Image source={require('../../Image/download.png')} style={styles.fileUploadIcon} />
            <TextInput style={styles.fileUploadInput} placeholder="رفع ملف" />
          </View>
          <TextInput style={styles.messageInput} placeholder="الرسالة" multiline={true} numberOfLines={4} />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>إرسال</Text>
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
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  image: {
    width: 110,
    height: 90,
    marginBottom: 20,
  },
  yellowLine: {
    backgroundColor: '#DA2424',
    height: 1,
    width: '100%',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    width: '100%',
  },
  fileUploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    width: '100%',
  },
  fileUploadIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  fileUploadInput: {
    flex: 1,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 30,
    width: '100%',
    height: 100,
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#006F34',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

export default ContactUsScreen;
