import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text } from 'react-native';

// Import Screens
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import LoginCodeScreen from './Screen/LoginCodeScreen';
import ProfileSetScreen from './Screen/ProfileSetScreen';
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
import PrivacyPolicyScreen from './Screen/Statics/PrivacyPolicyScreen';
import TermsAndConditionScreen from './Screen/Statics/TermsAndConditionScreen';
import WhoWeAreScreen from './Screen/Statics/WhoWeAreScreen';
import TechnicalSupportScreen from './Screen/Statics/TechnicalSupportScreen';
import ContactUsScreen from './Screen/Statics/ContactUsScreen';
import VacationScreen from './Screen/Statics/VacationScreen';
import EditInfoScreen from './Screen/EditInfoScreen';

import ListAddress from './Screen/Components/ListAddress';

import RegisterScreen from './Screen/RegisterScreen';
import HomeScreen from './Screen/MainScreens/HomeScreen3';
import CartScreen from './Screen/MainScreens/CartScreen';
import MoreScreen from './Screen/MainScreens/MoreScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
        name="PrivacyPolicy"
        component={PrivacyPolicyScreen}
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
        headerTitleAlign: 'center', // Align title in the center
        headerTitleStyle: {
          fontSize: 20, // Adjust text size as needed
          fontWeight: 'bold', // Make text bold
        },
        title: 'ختيار الباقة', // Title without leading spaces
      }}
      />

      <Stack.Screen 
      name="PlanDetails"
      component={PlanDetailsScreen}
      options={{
        headerShown: true,
        headerTitleAlign: 'center', // Align title in the center
        headerTitleStyle: {
          fontSize: 20, // Adjust text size as needed
          fontWeight: 'bold', // Make text bold
        },
        title: 'الكيتو', // Title without leading spaces
      }}
      />

      <Stack.Screen 
      name="PlanDays"
      component={PlanDaysScreen}
      options={{
        headerShown: true,
        headerTitleAlign: 'center', // Align title in the center
        headerTitleStyle: {
          fontSize: 20, // Adjust text size as needed
          fontWeight: 'bold', // Make text bold
        },
        title: 'اختيار الايام', // Title without leading spaces
      }}
      />

      <Stack.Screen 
      name="PayNow"
      component={PayNowScreen}
      options={{
        headerShown: true,
        headerTitleAlign: 'center', // Align title in the center
        headerTitleStyle: {
          fontSize: 20, // Adjust text size as needed
          fontWeight: 'bold', // Make text bold
        },
        title: 'إتمام الطلب', // Title without leading spaces
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
        tabBarShowLabel: false, // Hide tab labels
        tabBarStyle: {
          backgroundColor: '#FFFFFF', // Background color of the tab bar
          borderRadius: 18, // Total border radius
          height: 60, // Increase tab bar height
          elevation: 10, // Shadow elevation
          shadowColor: '#067737', // Shadow color
          shadowOpacity: 0.4, // Shadow opacity
          shadowOffset: { width: 0, height: -3 }, // Shadow offset
          shadowRadius: 4, // Shadow radius
          marginVertical: 10, // Add vertical margin of 10
          marginHorizontal: 10, // Add horizontal margin of 10
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

// Stack Navigator for Login and Sign up Screen
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
          title: 'Register', // Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', // Set Header color
          },
          headerTintColor: '#fff', // Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', // Set Header text style
          },
        }}
      />
    </AuthStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{ headerShown: false }}
        />
        {/* Navigation for Home and Settings screens */}
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
