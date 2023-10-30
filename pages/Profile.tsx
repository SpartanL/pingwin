import { SafeAreaView, Text, View, Image, ScrollView } from "react-native"
import React from "react"
import { StyleSheet, Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 50 : 0
    }
});

const Home = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea} className="">
            <ScrollView>
                <Text className="text-center text-4xl font-bold">My Profile</Text>
                <View className="flex flex-wrap justify-center items-center p-2 mx-auto">
                    <Image className="rounded-full" source={{ uri: "https://i.imgflip.com/7nwv7w.jpg", width: 150, height: 150 }} />
                    <View className="mt-4">
                        <Text className="text-center text-2xl">KissAHomie</Text>
                        <Text className="text-center text-base text-gray-500">@kissaomie</Text>
                    </View>
                </View>
                <Text className="mx-6 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nam labore ad sapiente unde nobis, voluptates facere, blanditiis itaque voluptatibus provident quod id beatae sed eaque iste, molestiae maxime dignissimos.</Text>
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
                <View>
                    <View className="shadow-xl bg-white m-4 rounded-lg">
                        <View className="p-2">
                            <View className="flex flex-row items-center">
                            <Image className="rounded-full" source={{ uri: "https://i.imgflip.com/7nwv7w.jpg", width: 80, height: 80 }} />
                                <View className="mx-2">
                                    <Text className="font-bold text-lg">Pseudo</Text>
                                    <Text className="text-gray-500">@userName</Text>
                                </View>
                            </View>
                            <View className="p-4">
                                <Text>dwssqebscugxsicurhvndoirhfnhoqe,wxwsukqsbcwsgjkbskduyqjrvqysuizrjdufyejsdè_euiyuhj</Text>
                            </View>
                            <View className="p-4 flex flex-row items-center">
                                <Ionicons name="ios-cube-outline" size={24} color="#30D9D9" />
                                <Text className="pl-2 font-semibold">600</Text>
                            </View>
                        </View>
                    </View>
                    <View className="shadow-xl bg-white m-4 rounded-lg">
                        <View className="p-2">
                            <View className="flex flex-row items-center">
                                <Image className="rounded-full" source={{ uri: "https://i.imgflip.com/7nwv7w.jpg", width: 80, height: 80 }} />
                                <View className="mx-2">
                                    <Text className="font-bold text-lg">Pseudo</Text>
                                    <Text className="text-gray-500">@userName</Text>
                                </View>
                            </View>
                            <View className="p-4">
                                <Text>dwssqebscugxsicurhvndoirhfnhoqe,wxwsukqsbcwsgjkbskduyqjrvqysuizrjdufyejsdè_euiyuhj</Text>
                            </View>
                            <View className="p-4 flex flex-row items-center">
                                <Ionicons name="ios-cube-outline" size={24} color="#30D9D9" />
                                <Text className="pl-2 font-semibold">600</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
)}
  

export default Home

