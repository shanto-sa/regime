import * as React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const WhoWeAreScreen = () => {

  const { strings } = useSelector((state) => state.commonData);
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>
            {strings.about_us}
          </Text>
          <Image source={require('../../Image/regimelogo.png')} style={styles.image} />
          <View style={styles.yellowLine} />
          <Text style={styles.text}>
            {strings.about_content}
          </Text>
          <View style={styles.socialContainer}>
            <View style={styles.socialItem}>
              <Text style={styles.socialText}>{strings.facebook}</Text>
              <Image source={require('../../Image/icon/facebook.png')} style={styles.socialIcon} />
            </View>
            <View style={styles.socialItem}>
             <Text style={styles.socialText}>{strings.instagram}</Text>
              <Image source={require('../../Image/icon/instagram.png')} style={styles.socialIcon} />
            </View>
            <View style={styles.socialItem}>
               <Text style={styles.socialText}>{strings.twitter}</Text>
              <Image source={require('../../Image/icon/twitter.png')} style={styles.socialIcon} />
            </View>
            <View style={styles.socialItem}>
            <Text style={styles.socialText}>+966136765068</Text>
              <Image source={require('../../Image/icon/whatsapp.png')} style={styles.socialIcon} />
            </View>
            <View style={styles.socialItem}>
             <Text style={styles.socialText}>{strings.google}</Text>
              <Image source={require('../../Image/icon/google.png')} style={styles.socialIcon} />
            </View>
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
    marginBottom: 20,
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
    padding:10,
    color: '#000000',
    marginBottom: 30,
  },
  socialContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end', 
    marginBottom: 20,
  },
  socialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginBottom: 5,
    marginLeft:15
  },
  socialText: {
    fontSize: 14,
    textAlign: 'right',
    color: '#000000',
    marginLeft: 100,
  },
});

export default WhoWeAreScreen;
