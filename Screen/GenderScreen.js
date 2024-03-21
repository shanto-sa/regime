import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const GenderScreen = ({ navigation }) => {
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderPress = (gender) => {
    setSelectedGender(gender);
  };

  const handleSubmitPress = () => {
    // You can navigate to the next screen or perform any action here
    console.log('Selected Gender:', selectedGender);
    // Replace 'NextScreen' with the name of your next screen
    navigation.navigate('MainApp');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                  <Text style={{ fontSize: 18, fontWeight: 'bold' }}>تخطي</Text>
                  <Image source={require('../Image/arrow2.png')} style={{ width: 30, height: 30 }} />
                </View>
        <View style={styles.container}>

          {/* Center Section */}
          <View style={{ alignItems: 'center', marginBottom: 50 }}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#006F34', marginBottom: 10 }}>ما هو جنسك ؟</Text>
            <Text style={{ fontSize: 18, textAlign: 'center', color: '#000000', }}>للحصول على تجربة أفضل، نحن بحاجة لمعرفة جنسك</Text>
          </View>

          {/* Bottom Section */}
          <View>
            {/* Male Card */}
            <TouchableOpacity style={[styles.cardContainer, selectedGender === 'male' && styles.selectedCard]} onPress={() => handleGenderPress('male')}>
              <View style={styles.imageContainer}>
                <Image source={require('../Image/man.png')} style={styles.cardImage} />
                {selectedGender === 'male' && <Image source={require('../Image/correct.png')} style={styles.selectedArrow} />}
              </View>
            </TouchableOpacity>

            {/* Female Card */}
            <TouchableOpacity style={[styles.cardContainer, selectedGender === 'female' && styles.selectedCard]} onPress={() => handleGenderPress('female')}>
              <View style={styles.imageContainer}>
                <Image source={require('../Image/woman.png')} style={styles.cardImage} />
                {selectedGender === 'female' && <Image source={require('../Image/correct.png')} style={styles.selectedArrow} />}
              </View>
            </TouchableOpacity>
          </View>

          {/* Arrow for Submission */}
          <TouchableOpacity style={styles.bottomArrow} onPress={handleSubmitPress}>
            <View style={styles.bottomArrowContainer}>
              <Image source={require('../Image/arrowright.png')} style={styles.bottomArrowImage} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  cardContainer: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#E5E5E5',
    borderRadius: 75,
    overflow: 'hidden',
    position: 'relative',
  },
  imageContainer: {
    width: '80%',
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 50,
    position: 'relative',
  },
  cardImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: '5%',
  },
  selectedCard: {
    borderColor: '#00000066',
  },
  selectedArrow: {
     position: 'absolute',
     top: 12,
     right: 12,
     borderRadius: 50,
     width: 20,
     height: 20,
  },
  bottomArrow: {
    alignSelf: 'center',
    marginTop: 50,
  },
  bottomArrowContainer: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#067737',
    borderRadius: 50,
  },
  bottomArrowImage: {
    width: 24,
    height: 24,
    tintColor: '#067737',
  },
});

export default GenderScreen;
