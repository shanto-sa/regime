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

const TechnicalSupportScreen = () => {
  const {strings} = useSelector(state => state.commonData);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>{strings.technical_support_title}</Text>
          <View style={styles.card}>
            <Text style={styles.cardText}>
              {strings.technical_support_team}
            </Text>
            <Text style={styles.cardText2}>{strings.send_deadback}</Text>
            <Image
              source={require('../../Image/regimelogo.png')}
              style={styles.image}
            />
            <Text style={styles.responseText}>{strings.response_time}</Text>
          </View>
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
    marginBottom: 40,
    fontWeight: 'bold',
    color: '#000000',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 40,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000000',
  },

  cardText2: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#000000',
  },
  image: {
    width: 130,
    height: 110,
    marginBottom: 30,
  },
  responseText: {
    fontSize: 16,
    color: 'green',
  },
});

export default TechnicalSupportScreen;
