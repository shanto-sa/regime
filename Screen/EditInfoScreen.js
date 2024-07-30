import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserProfile} from '../slices/userProfileSlice'; // Adjust the import path as needed

const EditInfoScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.userProfile);
  const {strings} = useSelector(state => state.commonData);
  const [selectedGender, setSelectedGender] = useState(null);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [goal, setGoal] = useState('');

  const handleGenderSelection = gender => {
    setSelectedGender(gender);
  };

  const handleSubmit = () => {
    const profileData = {
      name,
      phoneNumber,
      height,
      weight,
      activityLevel,
      goal,
      gender: selectedGender,
    };

    dispatch(updateUserProfile(profileData));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1, padding: 20}}>
          <Text
            style={{
              fontSize: 24,
              color: '#000000',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 16,
            }}>
            {strings.edit_profile}
          </Text>
          <View
            style={{
              alignItems: 'center',
              marginBottom: 30,
              padding: 15,
              backgroundColor: '#ffffff',
              borderRadius: 15,
            }}>
            <Image
              source={require('../Image/profile.png')}
              style={{width: 90, height: 90, borderRadius: 60, marginBottom: 8}}
            />
            <TextInput
              placeholder={strings.name}
              value={name}
              onChangeText={setName}
              style={{
                borderWidth: 1,
                borderColor: '#CCCCCC',
                borderRadius: 5,
                paddingHorizontal: 10,
                marginBottom: 8,
                width: windowWidth - 70,
              }}
            />
            <TextInput
              placeholder={strings.phone_number}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              style={{
                borderWidth: 1,
                borderColor: '#CCCCCC',
                borderRadius: 5,
                paddingHorizontal: 10,
                marginBottom: 8,
                width: windowWidth - 70,
              }}
            />
            <TextInput
              placeholder={strings.height}
              value={height}
              onChangeText={setHeight}
              style={{
                borderWidth: 1,
                borderColor: '#CCCCCC',
                borderRadius: 5,
                paddingHorizontal: 10,
                marginBottom: 8,
                width: windowWidth - 70,
              }}
            />
            <TextInput
              placeholder={strings.weight}
              value={weight}
              onChangeText={setWeight}
              style={{
                borderWidth: 1,
                borderColor: '#CCCCCC',
                borderRadius: 5,
                paddingHorizontal: 10,
                marginBottom: 8,
                width: windowWidth - 70,
              }}
            />
            <TextInput
              placeholder={strings.activity_level}
              value={activityLevel}
              onChangeText={setActivityLevel}
              style={{
                borderWidth: 1,
                borderColor: '#CCCCCC',
                borderRadius: 5,
                paddingHorizontal: 10,
                marginBottom: 8,
                width: windowWidth - 70,
              }}
            />
            <TextInput
              placeholder={strings.goal}
              value={goal}
              onChangeText={setGoal}
              style={{
                borderWidth: 1,
                borderColor: '#CCCCCC',
                borderRadius: 5,
                paddingHorizontal: 10,
                marginBottom: 8,
                width: windowWidth - 70,
              }}
            />

            <View
              style={{flexDirection: 'row', width: '100%', marginBottom: 20}}>
              <TouchableOpacity
                onPress={() => handleGenderSelection('male')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: '#ffffff',
                  borderWidth: 1,
                  borderColor: '#CCCCCC',
                  borderRadius: 15,
                  padding: 10,
                  alignItems: 'center',
                  marginRight: 5,
                  flex: 1,
                }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    backgroundColor:
                      selectedGender === 'male' ? '#006F34' : '#CCCCCC',
                    marginRight: 5,
                  }}
                />
                <Text style={{color: 'black'}}>{strings.male}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleGenderSelection('female')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 1,
                  borderColor: '#CCCCCC',
                  backgroundColor: '#ffffff',
                  borderRadius: 15,
                  padding: 10,
                  alignItems: 'center',
                  marginLeft: 5,
                  flex: 1,
                }}>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 10,
                    backgroundColor:
                      selectedGender === 'female' ? '#006F34' : '#CCCCCC',
                    marginRight: 5,
                  }}
                />
                <Text style={{color: 'black'}}>{strings.female}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: loading ? '#CCCCCC' : '#006F34',
                borderRadius: 5,
                paddingVertical: 10,
                paddingHorizontal: 20,
                width: windowWidth - 70,
              }}
              onPress={handleSubmit}
              disabled={loading}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  fontSize: 18,
                }}>
                {loading ? strings.saving : strings.save}
              </Text>
            </TouchableOpacity>

            {error && (
              <Text style={{color: 'red', marginTop: 10}}>{error}</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditInfoScreen;
