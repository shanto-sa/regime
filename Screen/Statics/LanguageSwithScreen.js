import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../slices/commonDataSlice';

const languageOptions = [
  { shortform: 'en', longform: 'English' },
  { shortform: 'ar', longform: 'العربية' },
];

const LanguageSwitchScreen = () => {
  const dispatch = useDispatch();
  const { language, strings } = useSelector((state) => state.commonData);

  useEffect(() => {
    console.log('Language state:', language);
  }, [language]);

  const handleLanguageChange = (shortform) => {
    console.log('handleLanguageChange called with:', shortform);
    dispatch(setLanguage(shortform));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{strings.language_header}</Text>
      </View>
      <View style={styles.contentContainer}>
        {languageOptions.map((item, key) => (
          <TouchableOpacity
            style={[
              styles.languageButton,
              item.shortform === language ? styles.selectedLanguageButton : null,
            ]}
            key={key}
            onPress={() => handleLanguageChange(item.shortform)}
          >
            <Text
              style={[
                styles.languageText,
                item.shortform === language ? styles.selectedLanguageText : null,
              ]}
            >
              {item.longform}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
  },
  selectedLanguageButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  languageText: {
    color: 'white',
    fontSize: 16,
  },
  selectedLanguageText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LanguageSwitchScreen;