import { SafeAreaView, Text, View, Image, ScrollView, Platform, StyleSheet } from "react-native"
import React from 'react'

//Icons
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Android View
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
            <ScrollView className="">
                <View className="flex flex-row items-center justify-center">
                    <MaterialCommunityIcons name="penguin" size={45} color="#3498BF" />
                    <Text className="font-bold text-4xl" style={{ color: "#3498BF" }}>Pingwin</Text>
                </View>

                <View className="shadow-xl bg-white m-4 rounded-lg">
                    <View className="p-2">
                        <View className="flex flex-row items-center">
                            <Image source={require('../assets/profilPicture.jpg')} className="rounded-full" style={{ height: 80, width: 80 }} />
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
                            <Image source={require('../assets/profilPicture.jpg')} className="rounded-full" style={{ height: 80, width: 80 }} />
                            <View className="mx-2">
                                <Text className="font-bold text-lg">Pseudo</Text>
                                <Text className="text-gray-500">@userName</Text>
                            </View>
                        </View>
                        <View className="p-4">
                            <Text>dwssqebscugxsicurhvndoirhfnhoqe,wxwsukqsbcwsgjkbskduyqjrvqysuizrjdufyejsdè_euiyuhj</Text>
                        </View>
                        <View className="p-4 flex flex-row items-center">
                            <Ionicons name="ios-cube-outline" size={24} color="grey" />
                            <Text className="pl-2 font-semibold">600</Text>
                        </View>
                    </View>
                </View>
                <View className="shadow-xl bg-white m-4 rounded-lg">
                    <View className="p-2">
                        <View className="flex flex-row items-center">
                            <Image source={require('../assets/profilPicture.jpg')} className="rounded-full" style={{ height: 80, width: 80 }} />
                            <View className="mx-2">
                                <Text className="font-bold text-lg">Pseudo</Text>
                                <Text className="text-gray-500">@userName</Text>
                            </View>
                        </View>
                        <View className="p-4">
                            <Text>dwssqebscugxsicurhvndoirhfnhoqe,wxwsukqsbcwsgjkbskduyqjrvqysuizrjdufyejsdè_euiyuhj</Text>
                        </View>
                        <View className="p-4 flex flex-row items-center">
                            <Ionicons name="ios-cube-outline" size={24} color="grey" />
                            <Text className="pl-2 font-semibold">600</Text>
                        </View>
                    </View>
                </View>
                <View className="shadow-xl bg-white m-4 rounded-lg">
                    <View className="p-2">
                        <View className="flex flex-row items-center">
                            <Image source={require('../assets/profilPicture.jpg')} className="rounded-full" style={{ height: 80, width: 80 }} />
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
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home