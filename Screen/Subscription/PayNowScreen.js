import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {submitPayment} from '../../slices/paymentSlice';

const PayNowScreen = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.payment);
  const {strings} = useSelector(state => state.commonData);

  const handlePaymentMethodSelection = method => {
    setSelectedPaymentMethod(method);
  };

  const handleSubmit = () => {
    const paymentData = {
      packageName: 'اسم الباقة',
      calories: '1000 من 1500 سعرة حرارية',
      daysPerWeek: '5 أيام في الأسبوع',
      days: 'السبت، احد، الاثنين، الثلاثاء، الأربعاء',
      startDate: '15/12/2023',
      price: '600',
      paymentMethod: selectedPaymentMethod,
    };
    dispatch(submitPayment(paymentData));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{strings.package_name}</Text>
          <View style={styles.cardContent}>
            <View style={styles.itemContainer}>
              <Text style={styles.cardText}>
                تحصل على 1000 من 1500 سعرة حرارية
              </Text>
              <Image
                source={require('../../Image/play.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.cardText}>5 أيام في الأسبوع</Text>
              <Image
                source={require('../../Image/play.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.cardText}>
                السبت، احد، الاثنين، الثلاثاء، الأربعاء
              </Text>
              <Image
                source={require('../../Image/play.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.itemContainer}>
              <Text style={styles.cardText}>تاريخ البدء: 15/12/2023</Text>
              <Image
                source={require('../../Image/play.png')}
                style={styles.icon}
              />
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.price}>400</Text>
              <Text style={styles.currency}>
                ريال/أسبوع<Text style={styles.tax}> (15% شامل الضريبة)</Text>
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.paymentHeader}>
          {strings.payment_method_header}
        </Text>
        <View style={styles.paymentButtonsContainer}>
          <TouchableOpacity
            style={[
              styles.paymentButton,
              selectedPaymentMethod === 'الدفع بالبطاقة' &&
                styles.selectedPaymentButton,
            ]}
            onPress={() => handlePaymentMethodSelection('الدفع بالبطاقة')}>
            <View
              style={[
                styles.checkbox,
                selectedPaymentMethod === 'الدفع بالبطاقة' &&
                  styles.selectedCheckbox,
              ]}></View>
            <Text style={styles.paymentButtonText}>
              {strings.pay_with_card}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.paymentButton,
              selectedPaymentMethod === 'Apple Pay' &&
                styles.selectedPaymentButton,
            ]}
            onPress={() => handlePaymentMethodSelection('Apple Pay')}>
            <View
              style={[
                styles.checkbox,
                selectedPaymentMethod === 'Apple Pay' &&
                  styles.selectedCheckbox,
              ]}></View>
            <Text style={styles.paymentButtonText}>{strings.apple_pay}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.submitButton, loading && styles.disabledButton]}
          onPress={handleSubmit}
          disabled={loading}>
          <Text style={styles.submitButtonText}>
            {strings.complete_order_button}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 20,
    marginBottom: 40,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000000',
  },
  cardContent: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
  },
  cardText: {
    color: '#000000',
    fontSize: 16,
    marginBottom: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 7,
    height: 7,
  },
  priceContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-end',
  },
  price: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
    marginRight: 5,
    alignSelf: 'flex-end',
  },
  currency: {
    fontSize: 16,
  },
  tax: {
    fontSize: 12,
  },
  paymentHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    marginRight: 10,
  },
  paymentButtonsContainer: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginBottom: 70,
  },
  paymentButton: {
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 24,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  selectedPaymentButton: {
    backgroundColor: '#FFFFFF',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#2CA545',
    marginRight: 10,
  },
  selectedCheckbox: {
    backgroundColor: '#2CA545',
  },
  paymentButtonText: {
    color: '#000000',
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#067737',
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PayNowScreen;
