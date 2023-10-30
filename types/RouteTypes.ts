import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type TabType = {
    HomeScreen: undefined
}

export type StackType = {
    Home: undefined
}

export type StackAuthType = {
    Login: undefined,
    Register: undefined,
}

export type RegisterNavigationProp = NativeStackNavigationProp<
    StackAuthType,
    'Register'
>

export type LoginNavigationProp = NativeStackNavigationProp<
    StackAuthType,
    'Login'
>