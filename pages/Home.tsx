import { SafeAreaView, Text, View, Platform, StyleSheet, FlatList } from "react-native"


import { MaterialCommunityIcons } from '@expo/vector-icons';
import PostCard from "../components/PostCard";

//Android View
const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? 50 : 0
    }
});

const posts = [
    {
        id: "1",
        user: {
            name: "John Doe",
            username: "@johndoe",
            image: "https://picsum.photos/200/300"
        },
        content: "Lorem ipsum dolor sit amet"
    },
    {
        id: "2",
        user: {
            name: "John Doe",
            username: "@johndoe",
            image: "https://picsum.photos/200/300"
        },
        content: "Lorem ipsum dolor sit amet"
    },
    {
        id: "3",
        user: {
            name: "John Doe",
            username: "@johndoe",
            image: "https://picsum.photos/200/300"
        },
        content: "Lorem ipsum dolor sit amet"
    }
]

const Home = () => {
    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View className="flex flex-row items-center justify-center">
                <MaterialCommunityIcons name="penguin" size={45} color="#3498BF" />
                <Text className="font-bold text-4xl" style={{ color: "#3498BF" }}>Pingwin</Text>
            </View>

            {posts.length > 0 ? (
                <FlatList
                    data={posts}
                    renderItem={({item}) => <PostCard post={item} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <Text className="text-center my-4 text-white">Aucun post</Text>
            )}
        </SafeAreaView>
    )
}

export default Home