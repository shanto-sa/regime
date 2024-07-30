import React, {useEffect, useRef} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from 'react-native';

const SplashScreen = ({navigation}) => {
  const titleAnims = useRef([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]).current;

  useEffect(() => {
    setTimeout(() => {
      titleAnims.forEach((anim, index) => {
        setTimeout(() => {
          animateLetter(anim);
        }, index * 200);
      });
      setTimeout(() => {
        navigation.replace('Auth');
      }, 1200);
    }, 2000);
  }, []);

  const animateLetter = anim => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/regime.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Animated.Text style={[styles.letter, {opacity: titleAnims[0]}]}>
            R
          </Animated.Text>
          <Animated.Text style={[styles.letter, {opacity: titleAnims[1]}]}>
            e
          </Animated.Text>
          <Animated.Text style={[styles.letter, {opacity: titleAnims[2]}]}>
            g
          </Animated.Text>
          <Animated.Text style={[styles.letter, {opacity: titleAnims[3]}]}>
            i
          </Animated.Text>
          <Animated.Text style={[styles.letter, {opacity: titleAnims[4]}]}>
            m
          </Animated.Text>
          <Animated.Text style={[styles.letter, {opacity: titleAnims[5]}]}>
            e
          </Animated.Text>
        </View>
      </View>
    </View>
  );
};

export default SplashScreen;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(239, 249, 240, 0.96)',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '30%',
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: windowWidth / 2,
    borderBottomRightRadius: windowWidth / 2,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  letter: {
    fontSize: 36,
    color: '#F67600',
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
  },
});
