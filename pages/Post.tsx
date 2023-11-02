import { SafeAreaView, Text, View, StyleSheet, Platform, TextInput, Pressable } from "react-native"
import { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { HomeNavigationProp } from "../types/RouteTypes";
import { RootState, useAppDispatch } from "../store/store";
import { createPost } from "../store/postSlice";
import { useSelector } from "react-redux";

//Android View
const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? 50 : 0
    }
});

const Post = () => {
    const user = useSelector((state: RootState) => state.user.user)
    const [text, setText] = useState<string>('')
    const navigation = useNavigation<HomeNavigationProp>()
    const dispatch = useAppDispatch()

    const handlePost = async () => {
        dispatch(createPost({content: text, userId: user.id}))
        setText('')

        navigation.navigate('Home')
    }

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View className="p-4">
                <Text className="my-4">Poster quelque chose</Text>
                <TextInput
                    className="border border-gray-300 rounded shadow"
                    multiline
                    maxLength={240}
                    style={{height: 100}}
                    value={text}
                    onChangeText={(text) => setText(text)}
                />
                <Pressable 
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md my-4"
                    onPress={handlePost}
                    disabled={text.length === 0}
                >
                    <Text className="text-center text-white font-semibold">Poster</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Post