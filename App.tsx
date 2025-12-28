import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

// Screens
import SplashScreen from './src/screens/SplashScreen';
import OnboardingScreen from './src/screens/OnboardingScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import HomeScreen from './src/screens/HomeScreen';
import MonitorScreen from './src/screens/MonitorScreen';
import ActivitiesScreen from './src/screens/ActivitiesScreen';
import QuestionnaireScreen from './src/screens/QuestionnaireScreen';
import PlayGameScreen from './src/screens/PlayGameScreen';
import GameResultScreen from './src/screens/GameResultScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import InsightsScreen from './src/screens/InsightsScreen';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  MainTabs: undefined;
  Questionnaire: undefined;
  PlayGame: undefined;
  GameResult: { time: number; score: number; stressLevel: string };
};

export type TabParamList = {
  Home: undefined;
  Monitor: undefined;
  Activities: undefined;
  Insights: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Monitor') {
            iconName = 'heart-outline';
          } else if (route.name === 'Activities') {
            iconName = 'game-controller-outline';
          } else if (route.name === 'Insights') {
            iconName = 'stats-chart-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          } else {
            iconName = 'home';
          }

          return focused ? (
            <View style={{ 
              backgroundColor: '#4A90E2', 
              borderRadius: 12, 
              padding: 10,
              width: 60,
              height: 60,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Ionicons name={iconName} size={28} color="white" />
            </View>
          ) : (
            <Ionicons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
      })}
    >
      <Tab.Screen name="Monitor" component={MonitorScreen} />
      <Tab.Screen name="Activities" component={ActivitiesScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Insights" component={InsightsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
        <Stack.Screen name="PlayGame" component={PlayGameScreen} />
        <Stack.Screen name="GameResult" component={GameResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
