import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Image, FlatList } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CartScreen = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>السبت</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000000', }}>258</Text>
        </View>
      </View>
    </View>
  );

  const renderCard = (icon, text, index) => (
    <TouchableOpacity
      style={[styles.card2, selectedCard === index && { backgroundColor: '#2CA545' }]}
      onPress={() => handleCardPress(index)}
    >
      <Image source={icon} style={styles.cardIcon} />
      <Text style={[styles.cardText, selectedCard === index && { color: '#ffffff' }]}>{text}</Text>
    </TouchableOpacity>
  );

  const handleCardPress = (index) => {
    // Toggle the selected card
    setSelectedCard(selectedCard === index ? null : index);
  };

  // Generating example data for FlatList
  const flatListData = Array.from({ length: 8 }, (_, index) => {
    return index === `28/${5 + index}`
  });

  const renderMealCard = (image, calories, saladTitle, mealTitle) => (
    <View style={styles.mealCard}>
      <Image source={image} style={styles.mealImage} />
      <TouchableOpacity style={styles.topLeftButton}>
        <Text style={styles.topLeftButtonText}>{calories} سعرات</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.saladTitle}>{saladTitle}</Text>
        <Text style={styles.mealTitle}>{mealTitle}</Text>
        <TouchableOpacity style={styles.selectButton}>
          <Text style={styles.selectButtonText}>اختر الوجبة</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold', color: '#000000', marginBottom: 16 }}>
            إختيار الوجبات
          </Text>

          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
    <Text style={{ fontSize: 20, color: '#2CA545', marginBottom: 8 }}>الخطة المتكاملة</Text>
    <TextInput
      style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 16 }}
      placeholder="28/5 - 27/6"
    />
  </View>

          {/* Section 1: Your existing FlatList */}
          <FlatList
            data={flatListData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginBottom: 16 }}
          />

          {/* Section 2: New scrollable cards */}
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 20, color: '#000000', marginBottom: 8, fontWeight: 'bold', marginRight: 10, }}> الأقسام</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* Example cards */}
              {renderCard(require('../../Image/meal/r2.png'), 'الافطار', 0)}
              {renderCard(require('../../Image/meal/r3.png'), 'الغذاء', 1)}
              {renderCard(require('../../Image/meal/r4.png'), 'العشاء', 2)}
              {renderCard(require('../../Image/meal/r3.png'), 'الافطار', 3)}
              {/* Add more cards as needed */}
            </ScrollView>
          </View>

          {/* Section 3: Additional Section */}
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 20, color: '#000000', marginBottom: 8, fontWeight: 'bold', marginRight: 16, }}>قائمة اليوم</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

  {renderMealCard(require('../../Image/meal/order1.png'), '10', 'سلطة كول سلو', '..... Slow Cole Slow')}
  {renderMealCard(require('../../Image/meal/order2.png'), '12', 'سلطة كول سلو', '..... Slow Cole Slow')}
</View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  {renderMealCard(require('../../Image/meal/order3.png'), '10', 'سلطة كول سلو', '..... Slow Cole Slow')}
  {renderMealCard(require('../../Image/meal/order4.png'), '12', 'سلطة كول سلو', '..... Slow Cole Slow')}
</View>


          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
    marginBottom: 8,
    borderRadius: 5,
    elevation: 4,
  },

  card2: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 22,
    width: 120,
    marginRight: 10,
    marginBottom: 8,
    borderRadius: 5,
    elevation: 4,
  },

  cardIcon: {
    width: 30,
    height: 30,
  },

  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 8, // Adjust as needed
  },

  mealCard: {
    flex: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },

  mealTitle: {
    fontSize: 12,
    color: '#000000',
    marginBottom: 10,
    textAlign:'right'
  },
  

  mealImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },

  topLeftButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    backgroundColor: '#F67600',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
  },

  topLeftButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  footer: {
    padding: 16,
    backgroundColor: '#ffffff',
  },

  saladTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#121221',
    marginBottom: 8,
  },

  selectButton: {
    backgroundColor: 'transparent',
    borderColor: '#2CA545',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 10,
    alignItems: 'center',
  },

  selectButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2CA545',
  },

  scrollViewContainer: {
    paddingBottom: screenHeight * 0.1, // Adjust as needed
  },
});

export default CartScreen;