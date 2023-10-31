import { SafeAreaView, Text, View, Image, ScrollView, Pressable, FlatList } from "react-native";
import React from "react";
import { StyleSheet, Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { firebaseapp } from "../FirebaseConfig";
import { getAuth } from "firebase/auth";
import { db } from "../FirebaseConfig";
import { onValue, ref } from "firebase/database";
import { useState, useEffect } from "react";

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 50 : 0
    }
});

const Home = () => {
    const auth = getAuth(firebaseapp);
    const [data, setData] = useState(null); 
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const query = ref(db, 'Users/' + auth.currentUser?.uid);
        onValue(query, (snapshot) => {
            const userData = snapshot.val();
            if (userData) {
                setData(userData);
            }
        });

        const query2 = ref(db, 'Posts/');
        onValue(query2, (snapshot) => {
            const allPosts = snapshot.val();
            if (allPosts) {
                const currentUserPosts = Object.values(allPosts).filter((post : any) => post.Userid === auth.currentUser?.uid);
                setPosts(currentUserPosts);
            }
        });
    }, [auth.currentUser?.uid]);

    const handleSignOut = () => {
        auth.signOut()
    }

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
                            onPress={handleSignOut}
                        />
                    </Pressable>
                </View>
                {data && (
                    <View className="flex flex-wrap justify-center items-center p-2 mx-auto">
                        <Image className="rounded-full" source={{ uri: data.image, width: 150, height: 150 }} />
                        <View className="mt-4">
                            <Text className="text-center text-2xl">{data.nom}</Text>
                            <Text className="text-center text-base text-gray-500">{data.pseudo}</Text>
                        </View>
                    </View>
                )}
                {data && (
                    <Text className="mx-6 text-center">{data.bio}</Text>
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

            {posts.map((post : any, index) => (
                    <View className="shadow-xl bg-white m-4 rounded-lg" key={index}>
                        <View className="p-2">
                            <View className="flex flex-row items-center">
                                <Image className="rounded-full" source={{ uri: "https://i.imgflip.com/7nwv7w.jpg", width: 80, height: 80 }} />
                                <View className="mx-2">
                                    <Text className="font-bold text-lg">{data.nom}</Text>
                                    <Text className="text-gray-500">{data.pseudo}</Text>
                                </View>
                            </View>
                            <View className="p-4">
                                <Text>{post.txt}</Text>
                            </View>
                            <View className="p-4 flex flex-row items-center">
                                <Ionicons name="ios-cube-outline" size={24} color="#30D9D9" />
                                <Text className="pl-2 font-semibold">{post.ping}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home