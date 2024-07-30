import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const CartScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.card}>
      <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>السبت</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000000'}}>
            258
          </Text>
        </View>
      </View>
    </View>
  );

  const flatListData = Array.from({length: 8}, (_, index) => {
    return index === `28/${5 + index}`;
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={{flex: 1, padding: 16}}>
          <Text
            style={{
              fontSize: 24,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: 16,
            }}>
            إختيار الوجبات
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 16,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#2CA545',
                padding: 12,
                borderRadius: 10,
                marginRight: 'auto',
              }}
              onPress={() => console.log('Add meal button pressed')}>
              <Text style={{color: 'white'}}>أضف وجبة</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
              <Text style={{fontSize: 20, color: '#2CA545', marginBottom: 8}}>
                الخطة المتكاملة
              </Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  padding: 10,
                  marginBottom: 16,
                }}
                placeholder="28/5 - 27/6"
              />
            </View>
          </View>

          <FlatList
            data={flatListData}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: 16}}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 16,
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#000000',
                marginRight: 8,
              }}>
              وجبات اليوم
            </Text>
            <Image
              source={require('../../Image/meal/r1.png')}
              style={{width: 24, height: 24}}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 16,
              justifyContent: 'flex-end',
            }}>
            <Text style={{fontSize: 16, marginRight: 8, color: '#000000'}}>
              الإفطار
            </Text>
            <Image
              source={require('../../Image/meal/r2.png')}
              style={{width: 24, height: 24}}
            />
          </View>

          <View style={{marginBottom: 10}}>
            <View style={styles.cardtwo}>
              <View style={{marginRight: 8}}>
                <View style={{marginRight: 8}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 8,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={require('../../Image/meal/delete.png')}
                        style={{width: 20, height: 20, marginRight: 8}}
                      />
                      <Image
                        source={require('../../Image/meal/edit.png')}
                        style={{width: 20, height: 20, marginRight: 8}}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#000000',
                        marginRight: 2,
                      }}>
                      سلطة كول سلو
                    </Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  {/* First Set of Icons */}
                  <View style={{marginBottom: 8, padding: 6}}>
                    <Image
                      source={require('../../Image/meal/icon1.png')}
                      style={{width: 30, height: 30, marginRight: 8}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>كالوري</Text>
                    </View>
                    <Text style={{color: '#000000'}}>258</Text>
                  </View>

                  <View style={{marginBottom: 8, padding: 6}}>
                    <Image
                      source={require('../../Image/meal/icon2.png')}
                      style={{width: 30, height: 30, marginRight: 8}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>كالوري</Text>
                    </View>
                    <Text style={{color: '#000000'}}>200</Text>
                  </View>

                  <View style={{marginBottom: 8, padding: 6}}>
                    <Image
                      source={require('../../Image/meal/icon3.png')}
                      style={{width: 30, height: 30, marginRight: 8}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>كالوري</Text>
                    </View>
                    <Text style={{color: '#000000'}}>180</Text>
                  </View>

                  <View style={{marginBottom: 8, padding: 6}}>
                    <Image
                      source={require('../../Image/meal/icon4.png')}
                      style={{width: 30, height: 30, marginRight: 8}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>كالوري</Text>
                    </View>
                    <Text style={{color: '#000000'}}>300</Text>
                  </View>
                </View>
              </View>
              {/* Right side */}
              <View style={{position: 'absolute', right: 10, bottom: 10}}>
                <Image
                  source={require('../../Image/meal/one.png')}
                  style={{width: 120, height: 130}}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 16,
                justifyContent: 'flex-end',
              }}>
              <Text style={{fontSize: 16, marginRight: 8, color: '#000000'}}>
                الغذاء
              </Text>
              <Image
                source={require('../../Image/meal/r3.png')}
                style={{width: 24, height: 24}}
              />
            </View>

            {/* Second Card */}
            <View style={styles.cardtwo}>
              {/* Left side */}
              <View style={{marginRight: 8}}>
                <View style={{marginRight: 8}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 8,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={require('../../Image/meal/delete.png')}
                        style={{width: 20, height: 20, marginRight: 8}}
                      />
                      <Image
                        source={require('../../Image/meal/edit.png')}
                        style={{width: 20, height: 20, marginRight: 8}}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#000000',
                        marginRight: 2,
                      }}>
                      سلطة كول سلو
                    </Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <View style={{marginBottom: 8, padding: 6}}>
                    <Image
                      source={require('../../Image/meal/icon1.png')}
                      style={{width: 30, height: 30, marginRight: 8}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>كالوري</Text>
                    </View>
                    <Text style={{color: '#000000'}}>258</Text>
                  </View>

                  <View style={{marginBottom: 8, padding: 6}}>
                    <Image
                      source={require('../../Image/meal/icon2.png')}
                      style={{width: 30, height: 30, marginRight: 8}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>كالوري</Text>
                    </View>
                    <Text style={{color: '#000000'}}>200</Text>
                  </View>

                  <View style={{marginBottom: 8, padding: 6}}>
                    <Image
                      source={require('../../Image/meal/icon3.png')}
                      style={{width: 30, height: 30, marginRight: 8}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>كالوري</Text>
                    </View>
                    <Text style={{color: '#000000'}}>180</Text>
                  </View>

                  <View style={{marginBottom: 8, padding: 6}}>
                    <Image
                      source={require('../../Image/meal/icon4.png')}
                      style={{width: 30, height: 30, marginRight: 8}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>كالوري</Text>
                    </View>
                    <Text style={{color: '#000000'}}> 300</Text>
                  </View>
                </View>
              </View>
              {/* Right side */}
              <View style={{position: 'absolute', right: 10, bottom: 10}}>
                <Image
                  source={require('../../Image/meal/two.png')}
                  style={{width: 120, height: 130}}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 16,
                justifyContent: 'flex-end',
              }}>
              <Text style={{fontSize: 16, marginRight: 8, color: '#000000'}}>
                العشاء
              </Text>
              <Image
                source={require('../../Image/meal/r4.png')}
                style={{width: 24, height: 24}}
              />
            </View>

            <View style={styles.cardtwo}>
              {/* Left side */}
              <View style={{marginRight: 8}}>
                <View style={{marginRight: 8}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: 8,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        source={require('../../Image/meal/delete.png')}
                        style={{width: 20, height: 20, marginRight: 8}}
                      />
                      <Image
                        source={require('../../Image/meal/edit.png')}
                        style={{width: 20, height: 20, marginRight: 8}}
                      />
                    </View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#000000',
                        marginRight: 2,
                      }}>
                      سلطة كول سلو
                    </Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <View style={{marginBottom: 8, padding: 6}}>
                    <Image
                      source={require('../../Image/meal/icon1.png')}
                      style={{width: 30, height: 30, marginRight: 8}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>كالوري</Text>
                    </View>
                    <Text style={{color: '#000000'}}>258</Text>
                  </View>

                  {/* Second Set of Icons */}
                  <View style={{marginBottom: 8, padding: 6}}>
                    <Image
                      source={require('../../Image/meal/icon2.png')}
                      style={{width: 30, height: 30, marginRight: 8}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>كالوري</Text>
                    </View>
                    <Text style={{color: '#000000'}}>200</Text>
                  </View>

                  <View style={{marginBottom: 8, padding: 6}}>
                    <Image
                      source={require('../../Image/meal/icon3.png')}
                      style={{width: 30, height: 30, marginRight: 8}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>كالوري</Text>
                    </View>
                    <Text style={{color: '#000000'}}>180</Text>
                  </View>

                  <View style={{marginBottom: 8, padding: 6}}>
                    <Image
                      source={require('../../Image/meal/icon4.png')}
                      style={{width: 30, height: 30, marginRight: 8}}
                    />
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Text>كالوري</Text>
                    </View>
                    <Text style={{color: '#000000'}}>300</Text>
                  </View>
                </View>
              </View>

              <View style={{position: 'absolute', right: 10, bottom: 10}}>
                <Image
                  source={require('../../Image/meal/three.png')}
                  style={{width: 120, height: 130}}
                />
              </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginRight: 10,
    marginBottom: 8,
    borderRadius: 5,
    elevation: 2,
  },

  cardtwo: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    elevation: 2,
  },
  scrollViewContainer: {
    paddingBottom: screenHeight * 0.1,
  },
});

export default CartScreen;
