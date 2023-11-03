import { SafeAreaView, Text, View, Platform, StyleSheet, FlatList, RefreshControl } from "react-native"
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { useCallback, useEffect, useState } from "react";

import { fetchPosts } from "../store/postSlice";

import PostCard from "../components/PostCard";

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
    const posts = useSelector((state: RootState) => state.posts.posts)
    const dispatch = useAppDispatch()
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true)

        setTimeout(() => {
            setRefreshing(false)
            dispatch(fetchPosts())
        }, 800)
    }, [])

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <View className="flex flex-row items-center justify-center">
                <MaterialCommunityIcons name="penguin" size={45} color="#3498BF" />
                <Text className="font-bold text-4xl" style={{ color: "#3498BF" }}>Pingwin</Text>
            </View>

            {posts.length > 0 ? (
                <FlatList
                    data={posts}
                    renderItem={({ item }) => <PostCard post={item} />}
                    keyExtractor={(item) => item.id}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    }
                />
            ) : (
                <Text className="text-center my-4">Aucun post</Text>
            )}
        </SafeAreaView>
    )
}

export default Home