import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import AsyncStorage from 'react-native-encrypted-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text, LogBox } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, setUserData  } from './slices/authSlice';

// Import Screens
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import LoginCodeScreen from './Screen/LoginCodeScreen';
import ProfileSetScreen from './Screen/ProfileSetScreen';
import ConfirmCodeScreen from './Screen/ConfirmCodeScreen';
import GoalScreen from './Screen/GoalScreen';
import GenderScreen from './Screen/GenderScreen';
import HWScreen from './Screen/HWScreen';
import DobScreen from './Screen/DobScreen';

//Imported Home Tab Sub-Screens
import ChoosePlanScreen from './Screen/Subscription/ChoosePlanScreen';
import PlanDetailsScreen from './Screen/Subscription/PlanDetailsScreen';
import PlanDaysScreen from './Screen/Subscription/PlanDaysScreen';
import PayNowScreen from './Screen/Subscription/PayNowScreen';


// Imported Static Screens
import LanguageSwithScreen from './Screen/Statics/LanguageSwithScreen';
import TermsAndConditionScreen from './Screen/Statics/TermsAndConditionScreen';
import WhoWeAreScreen from './Screen/Statics/WhoWeAreScreen';
import TechnicalSupportScreen from './Screen/Statics/TechnicalSupportScreen';
import ContactUsScreen from './Screen/Statics/ContactUsScreen';
import VacationScreen from './Screen/Statics/VacationScreen';
import EditInfoScreen from './Screen/EditInfoScreen';
import AddAddressScreen from './Screen/AddAddressScreen';
import ListAddress from './Screen/Components/ListAddress';
import RegisterScreen from './Screen/RegisterScreen';
import HomeScreen from './Screen/MainScreens/HomeScreen3';
import CartScreen from './Screen/MainScreens/CartScreen';
import MoreScreen from './Screen/MainScreens/MoreScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

LogBox.ignoreAllLogs();

// Custom Tab Icon component
const TabIcon = ({ icon, color, size, focused }) => (
  <View style={{ alignItems: 'center' }}>
    <View
      style={{
        width: size + 12,
        height: size + 12,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {focused && (
        <View
          style={{
            width: size + 16,
            height: size + 16,
            borderRadius: (size + 14) / 2, // Make it round
            backgroundColor: '#067737', // Background color when tab is active
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={icon}
            style={{
              width: size,
              height: size,
              tintColor: '#fff', // Icon color when tab is active
            }}
          />
        </View>
      )}
      {!focused && (
        <Image
          source={icon}
          style={{
            width: size,
            height: size,
            tintColor: '#000', // Icon color when tab is not active
          }}
        />
      )}
    </View>
  </View>
);

function MoreStack() {
  return (
    <Stack.Navigator
      initialRouteName="More"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="More"
        component={MoreScreen}
        options={{title: 'More Option'}}
      />
      <Stack.Screen
        name="TermsAndCondition"
        component={TermsAndConditionScreen}
        options={{headerShown: true , title: ''}}
      />
      <Stack.Screen
        name="LanguageSwith"
        component={LanguageSwithScreen}
        options={{headerShown: true , title: ''}}
      />
      <Stack.Screen
        name="WhoWeAre"
        component={WhoWeAreScreen}
        options={{headerShown: true , title: ''}}
      />
      <Stack.Screen
        name="TechnicalSupport"
        component={TechnicalSupportScreen}
        options={{headerShown: true , title: ''}}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUsScreen}
        options={{headerShown: true , title: ''}}
      />

      <Stack.Screen
        name="Vacation"
        component={VacationScreen}
        options={{headerShown: true , title: ''}}
      />

      <Stack.Screen
        name="ListAddress"
        component={ListAddress}
        options={{headerShown: true , title: ''}}
      />

      <Stack.Screen
        name="AddAddress"
        component={AddAddressScreen}
        options={{headerShown: true , title: ''}}
      />

      <Stack.Screen
        name="EditInfo"
        component={EditInfoScreen}
        options={{headerShown: true , title: ''}}
      />

    </Stack.Navigator>
  );
}


function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home Tab'}}
      />

      <Stack.Screen 
      name="ChoosePlan"
      component={ChoosePlanScreen}
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        title: 'ختيار الباقة',
      }}
      />

      <Stack.Screen 
      name="PlanDetails"
      component={PlanDetailsScreen}
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        title: 'الكيتو',
      }}
      />

      <Stack.Screen 
      name="PlanDays"
      component={PlanDaysScreen}
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        title: 'اختيار الايام',
      }}
      />
      
      <Stack.Screen 
      name="PayNow"
      component={PayNowScreen}
      options={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20, 
          fontWeight: 'bold',
        },
        title: 'إتمام الطلب',
      }}
      />

    </Stack.Navigator>
  );
}

// Bottom Tab Navigator for Home and Settings screens
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderRadius: 18,
          height: 60,
          elevation: 10,
          shadowColor: '#067737',
          shadowOpacity: 0.4,
          shadowOffset: { width: 0, height: -3 },
          shadowRadius: 4,
          marginVertical: 10,
          marginHorizontal: 10,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon
              icon={require('./Image/icon/home.png')}
              color={color}
              size={size}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon
              icon={require('./Image/icon/cart.png')}
              color={color}
              size={size}
              focused={focused}
            />
          ),
        }}
      />

<Tab.Screen
          name="MoreStack"
          component={MoreStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size, focused }) => (
              <TabIcon
                icon={require('./Image/icon/more.png')}
                color={color}
                size={size}
                focused={focused}
              />
            ),
          }}
        />
    </Tab.Navigator>
  );
};

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="LoginScreen">
      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
       <AuthStack.Screen
              name="LoginCode"
              component={LoginCodeScreen}
                options={{ headerShown: false }}
            />

       <AuthStack.Screen
              name="ProfileSet"
              component={ProfileSetScreen}
                options={{ headerShown: false }}
            />

       <AuthStack.Screen
              name="ConfirmCode"
              component={ConfirmCodeScreen}
                options={{ headerShown: false }}
            />

       <AuthStack.Screen
              name="Goal"
              component={GoalScreen}
                options={{ headerShown: false }}
            />
       <AuthStack.Screen
              name="Gender"
              component={GenderScreen}
                options={{ headerShown: false }}
            />
       <AuthStack.Screen
              name="HW"
              component={HWScreen}
                options={{ headerShown: false }}
            />
       <AuthStack.Screen
              name="Dob"
              component={DobScreen}
                options={{ headerShown: false }}
            />

      <AuthStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: '#307ecc',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </AuthStack.Navigator>
  );
};


const App = () => {

  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <RootNavigation />
      </PersistGate>
    </Provider>
  );
};


const RootNavigation = () => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  console.log('shanto', isAuthenticated);


  
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
          dispatch(setUserData(JSON.parse(userData)));
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadUserData();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="SplashScreen"> */}
      <Stack.Navigator initialRouteName={isAuthenticated ? 'MainApp' : 'SplashScreen'}>
    
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
              name="Auth"
              component={isAuthenticated ? BottomTabNavigator : AuthStackScreen}
              options={{ headerShown: false }}
            />

        <Stack.Screen
          name="MainApp"
          component={BottomTabNavigator}
          options={{
            headerTitle: '',
            headerStyle: {
              // backgroundColor: '#067737', 
            },
            headerTintColor: '#fff', // Set Header text color
            headerLeft: () => (
              <Image
                source={require('./Image/headphone.png')}
                style={{ width: 30, height: 30, marginLeft: 10 }}
                resizeMode="contain"
              />
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                <Text style={{ color: '#000000', fontSize: 20, fontWeight: 'bold', marginRight: 5 }}>أهلًا بك </Text>
                <Text style={{ color: '#F67600', fontSize: 20, fontWeight: 'bold' }}>محمد!</Text>
                <Image
                  source={require('./Image/hi.png')}
                  style={{ width: 50, height: 50 }}
                  resizeMode="contain"
                />
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
