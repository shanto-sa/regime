import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Main Card */}
      <View style={styles.card}>
        <Text style={styles.infoText}>
          أنت الآن مشترك في
          <Text style={styles.packageText}> الباقة المتكاملة </Text>
          منذ 30/5/2023 و ستنتهي خلال 26 يومًا في تاريخ
          <Text style={styles.dateText}> 30/6/2023 </Text>
        </Text>
        <Image
          source={require('../../Image/arrow.png')}
          style={styles.arrowIcon}
          resizeMode="contain"
        />
      </View>
      {/* Card 1 */}
      <View style={styles.row}>
        <View style={styles.subCard}>
          <Text style={styles.boldText}>24</Text>
          <Text>عدد الوجبات التي استهلكتها</Text>
          <Image
            source={require('../../Image/icon/food.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
        {/* Card 2 */}
        <View style={styles.subCard}>
          <Text style={styles.boldText}>2</Text>
          <Text>عدد الوجبات التي استهلكتها</Text>
          <Image
            source={require('../../Image/icon/row.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
      </View>
      {/* Two Cards in Second Row */}
      <View style={styles.row}>
        <View style={styles.subCard}>
          <Text style={styles.boldText}>6</Text>
          <Text>عدد الوجبات التي استهلكتها</Text>
          <Image
            source={require('../../Image/icon/food2.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
        <View style={styles.subCard}>
          <Text style={styles.boldText}>24</Text>
          <Text>عدد الوجبات التي استهلكتها</Text>
          <Image
            source={require('../../Image/icon/calender.png')}
            style={styles.icon}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.dottedLine} />

  <View style={styles.rightContent}>
  <View style={styles.contentWrapper}>
    <Text style={styles.todayText}>وجبات اليوم</Text>
    <Image
      source={require('../../Image/icon/cardicon.png')}
      resizeMode="contain"
    />
  </View>
</View>


      <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {/* Additional Card */}
            <View style={styles.card2}>
              <View style={styles.centerContent}>
                <Image
                  source={require('../../Image/nomeal.png')}
                  style={styles.card2Image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.centerContent}>
                <Text style={styles.noMealText}>لا يوجد وجبات حاليًا</Text>
                <Text style={styles.noMealInfoText}>يبدو أنك لم تقم بإضافة أي وجبات حاليًا , بمجرد ان تقوم بإضافة الوجبات ستظهر هنا</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => console.log('Add Meal Pressed')}>
                  <Text style={styles.addButtonText}>إضافة الوجبات</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   card: {
      backgroundColor: '#EFF9F0',
      borderRadius: 10,
      padding: 35,
      margin: screenWidth * 0.02,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    card2: {
      borderColor: '#F2F2F2',
      borderWidth: 1,
      borderRadius: 6,
      padding: screenWidth * 0.02,
      margin: screenWidth * 0.05,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    
  packageText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: screenWidth * 0.04,
  },
  infoText: {
    fontSize: screenWidth * 0.04,
    textAlign: 'center',
    color: '#000',
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: screenWidth * 0.04,
  },
  arrowIcon: {
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: screenHeight * 0.01,
    paddingHorizontal: screenWidth * 0.03,
  },
  subCard: {
    backgroundColor: '#F6F6F6',
    borderRadius: 10,
    padding: screenWidth * 0.04,
    width: '48%',
    alignItems: 'center',
  },
  boldText: {
    fontSize: screenWidth * 0.06,
    fontWeight: 'bold',
    color:'#000000'
  },
  icon: {
    position: 'absolute',
    top: screenWidth * 0.02,
    right: screenWidth * 0.02,
    width: screenWidth * 0.08,
    height: screenWidth * 0.08,
  },
  leftContent: {
    alignItems: 'flex-start',
  },
  additionalText: {
    fontSize: screenWidth * 0.05,
    fontWeight: 'bold',
    marginBottom: screenHeight * 0.01,
    color:'#000000'
  },
  additionalSubText: {
    fontSize: screenWidth * 0.04,
    color:'#000000'
  },

  button: {
    backgroundColor: '#F67600',
    borderRadius: 5,
    paddingVertical: screenHeight * 0.01, // Adjust padding vertically
    paddingHorizontal: screenWidth * 0.03, // Adjust padding horizontally
    marginTop: screenHeight * 0.02,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: screenWidth * 0.03, // Decrease font size
  },
  dottedLine: {
    borderTopWidth: 4,
    borderTopColor: '#F6F6F6', // Change color as needed
    borderStyle: 'dotted',
    marginHorizontal: screenWidth * 0.05,
    margin: screenWidth * 0.05,
  },

  contentWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:24,
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  todayText: {
    fontSize: screenWidth * 0.06,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 10, // Adjust spacing as needed
  },

    scrollViewContent: {
      flexGrow: 1,
      paddingBottom: screenHeight * 0.1, // Adjust as needed
    },
  
    card2: {
      borderColor: '#F2F2F2',
      borderWidth: 1,
      borderRadius: 6,
      padding: screenWidth * 0.02,
      margin: screenWidth * 0.05,
      alignItems: 'center', // Center items horizontally
    },
    centerContent: {
      alignItems: 'center',
      marginBottom: screenHeight * 0.02, // Add margin between image and text
    },
    noMealText: {
      fontSize: screenWidth * 0.05,
      fontWeight: 'bold',
      marginBottom: screenHeight * 0.01,
      color: '#000000'
    },
    noMealInfoText: {
      fontSize: screenWidth * 0.04,
      marginBottom: screenHeight * 0.01,
      color: '#000000',
      textAlign: 'center', // Center text horizontally
    },
    addButton: {
      backgroundColor: '#2CA545',
      borderRadius: 5,
      paddingVertical: screenHeight * 0.016,
      paddingHorizontal: screenWidth * 0.04,
      marginTop: screenHeight * 0.01,
    },
    addButtonText: {
      color: '#FFF',
      fontWeight: 'bold',
      fontSize: screenWidth * 0.04,
    },
    card2Image: {
      width: screenWidth * 0.3,
      height: screenHeight * 0.1,
      marginBottom: screenHeight * 0.010,
    },


});

export default HomeScreen;
