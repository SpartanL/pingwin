import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type TabType = {
    HomeScreen: undefined,
    PostScreen: undefined,
    ProfileScreen: undefined
}

export type StackType = {
    Home: undefined,
    Post: undefined,
    Profile: undefined,
}

export type StackAuthType = {
    Login: undefined,
    Register: undefined,
}

export type HomeNavigationProp = NativeStackNavigationProp<
    StackType,
    'Home'
>

export type RegisterNavigationProp = NativeStackNavigationProp<
    StackAuthType,
    'Register'
>

export type LoginNavigationProp = NativeStackNavigationProp<
    StackAuthType,
    'Login'
>