import { SafeAreaView, Text, View, Image } from "react-native"
import React from "react"
import { StyleSheet, Platform } from "react-native";


const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? 50 : 0
    }
});

const Home = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
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
        </SafeAreaView>
)}
  

export default Home

