import * as React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';

const TermsAndConditionScreen = () => {
  const {strings} = useSelector(state => state.commonData);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>
            {strings.terms_and_conditions_title}
          </Text>
          <Image
            source={require('../../Image/regimelogo.png')}
            style={styles.image}
          />
          <View style={styles.yellowLine} />
          <Text style={styles.text}>
            {strings.terms_and_conditions_content}
          </Text>
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
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
  image: {
    width: 157,
    height: 126,
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
  },
});

export default TermsAndConditionScreen;
