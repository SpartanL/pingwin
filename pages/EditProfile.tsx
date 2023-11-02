import { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, Pressable, Platform, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../supabase';
import { useAppDispatch } from '../store/store';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUser } from '../store/userSlice';

import { ProfileNavigationProp } from '../types/RouteTypes';

import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 50 : 0
    }
});


const Home = () => {
    const user = useSelector((state: RootState) => state.user.user)
    const [fullName, setFullName] = useState<string>(user.full_name)
    const [username, setUsername] = useState<string>(user.username)
    const [bio, setBio] = useState<string>(user.bio)
    const [avatarUrl, setAvatarUrl] = useState<string>(user.avatar_url)

    const navigation = useNavigation<ProfileNavigationProp>()
    const dispatch = useAppDispatch()

    const handleUpdate = async () => {
        const { data, error } = await supabase
            .from('profiles')
            .update({
                full_name: fullName,
                username: username,
                bio: bio,
                avatar_url: avatarUrl,
            })
            .eq('id', user.id)
            .select()
            .single()

        if (error) {
            console.log(error)
        } else {
            dispatch(setUser(data))
            navigation.navigate('Profile')
        }

    }

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View className="flex flex-row justify-between items-center w-3/4 p-4">
                <Pressable>
                    <Ionicons name="ios-arrow-back" size={24} color="black"
                        onPress={() => navigation.goBack()}
                    />
                </Pressable>
                <Text className="text-2xl font-bold">Modifier votre profil</Text>
            </View>

            <View className="flex flex-col justify-center items-center p-2 mx-auto">
                <View className="my-2">
                    <View className="w-full mb-4">
                        <Text className='mb-1 text-gray-600'>Nom</Text>
                        <TextInput
                            className="text-sm sm:text-base px-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400"
                            placeholder="Entrez votre nom"
                            value={fullName}
                            style={{width: 300}}
                            onChangeText={(text) => setFullName(text)}
                            autoCapitalize={'none'}
                        />
                    </View>
                    <View className="w-full mb-4">
                        <Text className='mb-1 text-gray-600'>Nom d'utilisateur</Text>
                        <TextInput
                            className="text-sm sm:text-base px-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400"
                            placeholder="Entrez votre pseudo"
                            value={username}
                            style={{width: 300}}
                            onChangeText={(text) => setUsername(text)}
                            autoCapitalize={'none'}
                        />
                    </View>
                    <View className="w-full mb-4">
                        <Text className='mb-1 text-gray-600'>Bio</Text>
                        <TextInput
                            className="text-sm sm:text-base px-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400"
                            placeholder="Je suis un pinguin"
                            value={bio}
                            style={{height: 100, width: 300}}
                            onChangeText={(text) => setBio(text)}
                            autoCapitalize={'none'}
                        />
                    </View>

                    <View className="w-full mb-4">
                        <Text className='mb-1 text-gray-600'>Photo de profil (URL)</Text>
                        <TextInput
                            className="text-sm sm:text-base px-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400"
                            placeholder="Entrez un lien ici"
                            value={avatarUrl}
                            style={{width: 300}}
                            onChangeText={(text) => setAvatarUrl(text)}
                            autoCapitalize={'none'}
                        />
                    </View>

                    <Pressable
                    
                        onPress={handleUpdate}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md">
                        <Text className="text-center text-white font-semibold">Modifier</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
