import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { PostType } from './types'
import { RouteProp } from '@react-navigation/native'

export type TabType = {
    HomeScreen: undefined,
    PostScreen: undefined,
    ProfileScreen: undefined,
}

export type StackType = {
    Home: undefined,
    Details: { post: PostType },
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

// Details
export type DetailsNavigationProp = NativeStackNavigationProp<
    StackType,
    'Details'
>

export type DetailsRouteProp = RouteProp<
    StackType,
    'Details'
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