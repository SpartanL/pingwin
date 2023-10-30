import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Pages
import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Types
import { StackAuthType, StackType, TabType } from './types/RouteTypes';

// Icons
import { FontAwesome5 } from '@expo/vector-icons'
import { useState } from 'react';
import { useAuth } from './hooks/useAuth';

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
  //const [isLogin, setIsLogin] = useState(false)
  const { user } = useAuth()

  return (
    <NavigationContainer>
      {user ? (
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
        <StackAuth.Navigator initialRouteName='Login'>
          <StackAuth.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <StackAuth.Screen name="Register" component={Register} options={{ headerShown: false }} />
        </StackAuth.Navigator>
      )}
    </NavigationContainer>
  );
}