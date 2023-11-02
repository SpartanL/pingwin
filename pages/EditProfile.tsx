import React from 'react';
import { View, StyleSheet, Text, ScrollView, Pressable, Platform, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../supabase';
import { UserType } from '../types/types';
import { useAppDispatch } from '../store/store';
import { UpdateProfile } from '../store/userSlice';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUser } from '../store/userSlice';

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 50 : 0
    }
});


const Home = () => {

    const navigation = useNavigation();
    const user = useSelector((state: RootState) => state.user.user)
    const dispatch = useAppDispatch()

    const [fullName, setFullName] = React.useState<string>(user.full_name)
    const [username, setUsername] = React.useState<string>(user.username)
    const [bio, setBio] = React.useState<string>(user.bio)
    const [avatarUrl, setAvatarUrl] = React.useState<string>(user.avatar_url)

    const HandleUpdate = async (user: UserType) => {
        try {
          await dispatch(UpdateProfile({
            id: user.id,
            username,
            avatar_url: avatarUrl,
            full_name: fullName,
            bio: bio,
          }));
          await dispatch(setUser(user))
          navigation.navigate('Profile')
        } catch (error) {
          console.error('Erreur lors de la mise à jour du profil :', error);
        }
      }
      
      

    return (
        <ScrollView style={styles.AndroidSafeArea}>
            <View className="flex flex-row justify-between items-center w-3/4 p-4">
                <Pressable>
                    <Ionicons name="ios-arrow-back" size={24} color="black"
                        onPress={() => navigation.goBack()}
                    />
                </Pressable>
                <Text className="text-3xl font-bold">Edit Profile</Text>
            </View>

            <View className="flex flex-col justify-center items-center p-2 mx-auto">
                <View className="my-2">
                    <View className="w-full mb-4">
                        <View className="relative">
                            <TextInput
                                className="text-sm sm:text-base px-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400"
                                placeholder="Entrez votre nom"
                                value={fullName}
                                style={{width: 300}}
                                onChangeText={(text) => setFullName(text)}
                                autoCapitalize={'none'}
                            />
                        </View>
                    </View>
                    <View className="w-full mb-4">
                        <View className="relative">
                            <TextInput
                                className="text-sm sm:text-base px-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400"
                                placeholder="Entrez votre pseudo"
                                value={username}
                                style={{width: 300}}
                                onChangeText={(text) => setUsername(text)}
                                autoCapitalize={'none'}
                            />
                        </View>
                    </View>
                    <View className="w-full mb-4">
                        <View className="relative">
                            <TextInput
                                className="text-sm sm:text-base px-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400"
                                placeholder="Je suis un pinguin"
                                value={bio}
                                style={{height: 100, width: 300}}
                                onChangeText={(text) => setBio(text)}
                                autoCapitalize={'none'}
                            />
                        </View>
                    </View>
                    <View className="w-full mb-4">
                        <View className="relative">
                            <TextInput
                                className="text-sm sm:text-base px-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400"
                                placeholder="Entrez un lien ici"
                                value={avatarUrl}
                                style={{width: 300}}
                                onChangeText={(text) => setAvatarUrl(text)}
                                autoCapitalize={'none'}
                            />
                        </View>

                    </View>
                    <Pressable
                    
                        onPress={() => HandleUpdate({
                            id: user.id,
                            username: username,
                            avatar_url: avatarUrl,
                            full_name: fullName,
                            bio: bio,
                        })}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md">
                        <Text className="text-center text-white font-semibold">Modifier</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};

export default Home;
