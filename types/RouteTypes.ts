import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type TabType = {
    HomeScreen: undefined,
    PostScreen: undefined,
    ProfileScreen: undefined,
}

export type StackType = {
    Home: undefined,
    Post: undefined,
    Profile: undefined,
    EditProfile: undefined,
}

export type StackAuthType = {
    Login: undefined,
    Register: undefined,
}

// Home
export type HomeNavigationProp = NativeStackNavigationProp<
    StackType,
    'Home'
>

// Profile
export type ProfileNavigationProp = NativeStackNavigationProp<
    StackType,
    'Profile'
>

export type EditProfileNavigationProp = NativeStackNavigationProp<
    StackType,
    'EditProfile'
>

// Auth
export type RegisterNavigationProp = NativeStackNavigationProp<
    StackAuthType,
    'Register'
>

export type LoginNavigationProp = NativeStackNavigationProp<
    StackAuthType,
    'Login'
>