import { SafeAreaView, Text, View, Image, ScrollView, Pressable, FlatList } from "react-native";
import { StyleSheet, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from "react";
import { supabase } from "../supabase";

// Hooks
import { useAuth } from "../hooks/useAuth";

// Icons 
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 50 : 0
    }
});

const Home = () => {
    const [user, setUser] = useState<any>();
    const [posts, setPosts] = useState([]);

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <ScrollView>
                <View className="flex flex-row items-center justify-between p-4 ">
                    <Pressable>
                        <Ionicons name="ios-arrow-back" size={24} color="black"
                            onPress={() => navigation.goBack()}
                        />
                    </Pressable>
                    <Text className="text-center text-3xl font-bold">My Profile</Text>
                    <Pressable>
                        <AntDesign name="logout" size={24} color="black"
                            onPress={() => supabase.auth.signOut()}
                        />
                    </Pressable>
                </View>
                {user && (
                    <View className="flex flex-wrap justify-center items-center p-2 mx-auto">
                        {user.avatar_url ? (
                            <Image className="rounded-full" source={{ uri: user.avatar_url, width: 150, height: 150 }} />
                        ) : (
                            <Image className="rounded-full" source={require('../assets/profilPicture.jpg')} style={{width: 150, height: 150}} />
                        )}
                        <View className="my-2">
                            <Text className="text-center text-2xl">{user.full_name}</Text>
                            <Text className="text-center text-base text-gray-500">{user.username}</Text>
                            <Text className="text-center my-2">{user.bio}</Text>
                        </View>
                    </View>
                )}
                <View className="flex flex-row justify-center items-center gap-x-8 p-2">
                    <View className="flex flex-wrap items-center gap-2">
                        <Text className="text-gray-500">Photos</Text>
                        <Text className="text-2xl">0</Text>
                    </View>
                    <View className="flex flex-wrap items-center gap-2">
                        <Text className="text-gray-500">Followers</Text>
                        <Text className="text-2xl">0</Text>
                    </View>
                    <View className="flex flex-wrap items-center gap-2">
                        <Text className="text-gray-500">Follows</Text>
                        <Text className="text-2xl">0</Text>
                    </View>
                </View>
            <Text className="text-center text-2xl font-bold">Posts</Text>

            {/* TODO : flatlist with user posts */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home