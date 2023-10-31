import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react';

// Pages
import Home from './pages/Home';
import Post from './pages/Post';
import Profile from './pages/Profile';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

// Hooks
import { useAuth } from './hooks/useAuth';

// Types
import { StackAuthType, StackType, TabType } from './types/RouteTypes';

// Icons
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


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

const PostStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='Post'>
      <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
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
          <Tab.Screen
            name="PostScreen"
            component={PostStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="ios-cube-outline" size={size} color={color} />
              ),
              title: 'Post'
            }}
          />
          <Tab.Screen
            name="ProfileScreen"
            component={ProfileStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="penguin" size={size} color={color} />
              ),
              title: 'Profile'
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