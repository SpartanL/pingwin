import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';

// Pages
import Home from './pages/Home';
import Profile from './pages/Profile';


// Types
import { StackAuthType, StackType, TabType } from './types/RouteTypes';

// Icons
import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react';
import Auth from './pages/Auth/Auth';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Navigation
const Tab = createBottomTabNavigator<TabType>()
const Stack = createNativeStackNavigator<StackType>()
const StackAuth = createNativeStackNavigator<StackAuthType>()

const HomeStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}



export default function App() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <NavigationContainer>
      {isLogin ? (
        <>
        <Tab.Navigator initialRouteName='HomeScreen'>
          <Tab.Screen
            name="HomeScreen"
            component={HomeStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="igloo" size={size} color={color} />
              ),
              title: 'Accueil'
            }} />
            <Tab.Screen
              name="ProfileScreen"
              component={ProfileStackScreen}
              options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="penguin" size={size} color={color} />
                ),
                title: 'Profile'
              }} />
        </Tab.Navigator>
            
         </>
        
      ) : (
        <StackAuth.Navigator initialRouteName='Auth'>
          <StackAuth.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        </StackAuth.Navigator>
      )}
    </NavigationContainer>
  );
}