import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectIsAuthenticated,
  logout,
  selectUserData,
} from '../../slices/authSlice';

const ProfileCard = ({name, phoneNumber}) => {
  const navigation = useNavigation();
  const handleProfilePress = () => {
    navigation.navigate('EditInfo');
  };

  const handleEditPress = () => {
    navigation.navigate('EditInfo');
  };

  return (
    <View
      style={{
        marginBottom: 16,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        padding: 16,
        alignItems: 'center',
        width: '100%',
      }}>
      <TouchableOpacity onPress={handleEditPress}>
        <Image
          source={require('../../Image/profile.png')}
          style={{width: 80, height: 80, borderRadius: 40, marginBottom: 8}}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleProfilePress}
        style={{position: 'absolute', top: 10, right: 135}}>
        <Image
          source={require('../../Image/pencil.png')}
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
      <Text style={{fontSize: 18, color: '#000000', marginBottom: 4}}>
        {name}
      </Text>
      <Text style={{fontSize: 16, color: '#000000'}}>{phoneNumber}</Text>
    </View>
  );
};

const OptionCard = ({title, onPress, icon}) => {
  const renderBottomBorder = () => {
    if (title === 'إضافة إجازة' || title === 'تواصل معنا') {
      return null;
    }
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: '#CCCCCC',
          width: '100%',
          marginTop: 2,
        }}
      />
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginBottom: 5,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <Image
          source={require('../../Image/leftarrow.png')}
          style={{width: 15, height: 15}}
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 18, color: '#000000'}}>{title}</Text>
          <Image source={icon} style={{width: 20, height: 20, marginLeft: 8}} />
        </View>
      </View>
      {renderBottomBorder()}
    </TouchableOpacity>
  );
};

const MoreScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const {strings} = useSelector(state => state.commonData);

  const handleLogout = () => {
    dispatch(logout());
    // navigation.navigate('Login');
  };

  const userData = useSelector(selectUserData);

  const handleOptionPress = option => {
    switch (option) {
      case 'LanguageSwith':
        navigation.navigate('LanguageSwith');
        break;
      case 'TermsAndCondition':
        navigation.navigate('TermsAndCondition');
        break;
      case 'WhoWeAre':
        navigation.navigate('WhoWeAre');
        break;
      case 'TechnicalSupport':
        navigation.navigate('TechnicalSupport');
        break;
      case 'ContactUs':
        navigation.navigate('ContactUs');
        break;
      case 'Vacation':
        navigation.navigate('Vacation');
        break;
      case 'ListAddress':
        navigation.navigate('ListAddress');
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{padding: 16}}>
          <Text
            style={{
              fontSize: 24,
              marginBottom: 16,
              textAlign: 'center',
              color: '#000000',
              fontWeight: 'bold',
            }}>
            {' '}
            {strings.profile_title}
          </Text>
          <ProfileCard
            name={userData?.name || 'User'}
            phoneNumber={userData?.phoneNumber || '0597128218'}
          />
          <Text
            style={{
              fontSize: 18,
              marginBottom: 16,
              color: '#000000',
              fontWeight: 'bold',
            }}>
            {' '}
            {strings.profile_section_title}
          </Text>
          <View
            style={{backgroundColor: '#ffffff', padding: 10, borderRadius: 30}}>
            <OptionCard
              title={strings.add_address_title}
              onPress={() => handleOptionPress('ListAddress')}
              icon={require('../../Image/more/1.png')}
            />
            <OptionCard
              title={strings.add_vacation_title}
              onPress={() => handleOptionPress('Vacation')}
              icon={require('../../Image/more/2.png')}
            />
          </View>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 16,
              marginTop: 16,
              color: '#000000',
              fontWeight: 'bold',
            }}>
            {' '}
            {strings.privacy_section_title}
          </Text>
          <View
            style={{
              backgroundColor: '#ffffff',
              padding: 10,
              borderRadius: 30,
              marginBottom: 60,
            }}>
            <OptionCard
              title={strings.language_title}
              onPress={() => handleOptionPress('LanguageSwith')}
              icon={require('../../Image/more/3.png')}
            />
            <OptionCard
              title={strings.terms_and_conditions_title}
              onPress={() => handleOptionPress('TermsAndCondition')}
              icon={require('../../Image/more/4.png')}
            />
            <OptionCard
              title={strings.about_app_title}
              onPress={() => handleOptionPress('WhoWeAre')}
              icon={require('../../Image/more/5.png')}
            />
            <OptionCard
              title={strings.technical_support_title}
              onPress={() => handleOptionPress('TechnicalSupport')}
              icon={require('../../Image/more/6.png')}
            />
            <OptionCard
              title={strings.contact_us_title}
              onPress={() => handleOptionPress('ContactUs')}
              icon={require('../../Image/more/7.png')}
            />
          </View>
          <View style={{marginBottom: 16, paddingBottom: 10}}>
            {isAuthenticated && (
              <TouchableOpacity
                onPress={handleLogout}
                style={{
                  padding: 16,
                  borderRadius: 16,
                  backgroundColor: '#FFFFFF',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', fontSize: 18}}>
                  {strings.logout_button_text}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreScreen;
