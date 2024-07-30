import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const GoalScreen = ({navigation}) => {
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handleCardPress = goal => {
    setSelectedGoal(goal);
  };

  const handleSubmitPress = () => {
    console.log('Selected Goal:', selectedGoal);
    navigation.navigate('Gender');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, padding: 16}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>تخطي</Text>
            <Image
              source={require('../Image/arrow2.png')}
              style={{width: 30, height: 30}}
            />
          </View>

          <View style={{alignItems: 'center', marginBottom: 50}}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: 'bold',
                color: '#006F34',
                marginBottom: 10,
              }}>
              ما هو هدفك ؟
            </Text>
            <Text style={{fontSize: 18, textAlign: 'center', color: '#000000'}}>
              للحصول على تجربة أفضل, نحن نحتاج لمعرفة هدفك
            </Text>
          </View>

          <View>
            {/* Card 1 */}
            <TouchableOpacity
              style={
                selectedGoal === 'weightLoss'
                  ? styles.selectedCard
                  : styles.cardContainer
              }
              onPress={() => handleCardPress('weightLoss')}>
              <ImageBackground
                source={require('../Image/cardim1.png')}
                style={styles.cardImage}>
                <View style={styles.cardTextAboveContainer}>
                  <Text style={styles.cardTextAbove}>خسارة الوزن</Text>
                  <Text style={styles.cardTextBelow}>
                    سوف نساعدك على خساره وزنك بكل سهولة
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                selectedGoal === 'fitnessImprovement'
                  ? styles.selectedCard
                  : styles.cardContainer
              }
              onPress={() => handleCardPress('fitnessImprovement')}>
              <ImageBackground
                source={require('../Image/cardim2.png')}
                style={styles.cardImage}>
                <View style={styles.cardTextAboveContainer}>
                  <Text style={styles.cardTextAbove}>خسارة الوزن</Text>
                  <Text style={styles.cardTextBelow}>
                    سوف نساعدك على خساره وزنك بكل سهولة
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            {/* Card 3 */}
            <TouchableOpacity
              style={
                selectedGoal === 'muscleStrength'
                  ? styles.selectedCard
                  : styles.cardContainer
              }
              onPress={() => handleCardPress('muscleStrength')}>
              <ImageBackground
                source={require('../Image/cardim3.png')}
                style={styles.cardImage}>
                <View style={styles.cardTextAboveContainer}>
                  <Text style={styles.cardTextAbove}>خسارة الوزن</Text>
                  <Text style={styles.cardTextBelow}>
                    سوف نساعدك على خساره وزنك بكل سهولة
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.bottomArrow}
            onPress={handleSubmitPress}>
            <View style={styles.bottomArrowContainer}>
              <Image
                source={require('../Image/arrowright.png')}
                style={styles.bottomArrowImage}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 0,
    borderRadius: 20,
    overflow: 'hidden',
    width: '100%',
  },
  cardImage: {
    width: '111%',
    height: 78,
    resizeMode: 'cover',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.41,
    elevation: 1,
    left: '-7.5%',
    right: '-5.5%',
  },

  selectedCard: {
    marginBottom: 15,
    backgroundColor: '#067737',
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#067737',
  },

  cardTextAbove: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  cardTextBelow: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  bottomArrow: {
    alignSelf: 'center',
    marginTop: 50,
  },

  bottomArrowContainer: {
    padding: 20, //
    borderWidth: 1,
    borderColor: '#067737',
    borderRadius: 50,
  },
  bottomArrowImage: {
    width: 22,
    height: 22,
    tintColor: '#067737',
  },

  cardTextAboveContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingRight: 40,
    alignItems: 'right',
  },
});

export default GoalScreen;
