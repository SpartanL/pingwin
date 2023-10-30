import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Pages
import Home from './pages/Home';

// Types
import { StackAuthType, StackType, TabType } from './types/RouteTypes';

// Icons
import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react';
import Auth from './pages/Auth/Auth';

// Navigation
const Tab = createBottomTabNavigator<TabType>()
const Stack = createNativeStackNavigator<StackType>()
const StackAuth = createNativeStackNavigator<StackAuthType>()

const HomeStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default function App() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <NavigationContainer>
      {isLogin ? (
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
            }}
          />
        </Tab.Navigator>
      ) : (
        <StackAuth.Navigator initialRouteName='Auth'>
          <StackAuth.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        </StackAuth.Navigator>
      )}
    </NavigationContainer>
  );
}