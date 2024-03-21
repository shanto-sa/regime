import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import Loader from './Components/Loader';

const HWScreen = ({ navigation }) => {
  const [age, setAge] = useState(20); // Default age
  const [loading, setLoading] = useState(false);

  const handleSubmitPress = () => {
    setLoading(true);
    // Simulating login by checking against static credentials
    // Here you can add your logic to handle the submission
    setLoading(false);
    navigation.navigate('Goal');
  };

  const decreaseAge = () => {
    if (age > 18) {
      setAge(age - 1);
    }
  };

  const increaseAge = () => {
    if (age < 100) {
      setAge(age + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay} />

      <TouchableOpacity style={styles.topRightArrowContainer}>
        <Image source={require('../Image/arrow2.png')} style={styles.topRightArrow} />
      </TouchableOpacity>

      <View style={styles.mainBody}>
        <Text style={styles.title}>كم عمرك؟</Text>
        <Text style={styles.subtitle}>للحصول على تجربة أفضل، نحن نحتاج لمعرفة عمرك</Text>

        {/* Age Picker */}
        <View style={styles.agePicker}>
          <TouchableOpacity style={styles.arrowButton} onPress={decreaseAge}>
            <Text style={styles.arrowButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.age}>{age}</Text>
          <TouchableOpacity style={styles.arrowButton} onPress={increaseAge}>
            <Text style={styles.arrowButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.bottomArrow} onPress={handleSubmitPress}>
          <Image source={require('../Image/arrowright.png')} style={styles.bottomArrowImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginHorizontal: 20,
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  agePicker: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrowButton: {
    paddingHorizontal: 20,
  },
  arrowButtonText: {
    fontSize: 24,
    color: '#067737',
  },
  age: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  bottomArrow: {
    alignSelf: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#067737',
    borderRadius: 50,
    marginTop: 30,
  },
  bottomArrowImage: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: '#067737',
  },
});

export default HWScreen;
