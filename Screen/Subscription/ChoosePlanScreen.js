import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChoosePlanScreen = () => {
  const navigation = useNavigation();

  const handlePlanDetailsPress = (planName) => {
    navigation.navigate('PlanDetails', { planName });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:'#FFFFFF', }}>
      <View style={{ flex: 1, paddingHorizontal: 16, marginTop:20 }}>
        <PlanRow backgroundImage={require('../../Image/plan.png')} text="الكيتو" onPress={() => handlePlanDetailsPress("الكيتو")} />
        <PlanRow backgroundImage={require('../../Image/plan.png')} text="باقة متكاملة" onPress={() => handlePlanDetailsPress("باقة متكاملة")} />
        <PlanRow backgroundImage={require('../../Image/plan.png')} text="غداء عمل" onPress={() => handlePlanDetailsPress("غداء عمل")} />
        <PlanRow backgroundImage={require('../../Image/plan.png')} text="ايزي دايت" onPress={() => handlePlanDetailsPress("ايزي دايت")} />
      </View>
    </SafeAreaView>
  );
};

const PlanRow = ({ backgroundImage, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.planRow} onPress={onPress}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Text style={styles.planText}>{text}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  planRow: {
    height: 100,
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  overlay: {
    padding: 16,
  },
  planText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default ChoosePlanScreen;
