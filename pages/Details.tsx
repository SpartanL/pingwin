import { StyleSheet, Text, Platform, View, TouchableOpacity, SafeAreaView, Image, ScrollView, RefreshControl } from "react-native"
import { useCallback, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../store/store"
import { addComment, addLike, removeLike } from "../store/postSlice"
import { supabase } from "../supabase"

import CommentForm from "../components/CommentForm"
import Comment from "../components/Comment"

import { DetailsNavigationProp, DetailsRouteProp } from "../types/RouteTypes"

import { Ionicons, FontAwesome } from '@expo/vector-icons'


const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 50 : 0
    }
})

const Details = () => {
    const navigation = useNavigation<DetailsNavigationProp>()
    const dispatch = useAppDispatch()
    const route = useRoute<DetailsRouteProp>()

    const user = useSelector((state: RootState) => state.user.user)
    const likeLoading = useSelector((state: RootState) => state.posts.likeLoading)
    const [refreshing, setRefreshing] = useState<boolean>(false)

    const { post } = route.params

    // Check if the user has liked the post
    const isLiked = post.likes.find((like) => like.user === user.id)

    // Handle like or unlike
    const handleLike = () => {
        isLiked ? dispatch(removeLike({ postId: post.id, userId: user.id })) : dispatch(addLike({ postId: post.id, userId: user.id }))
        refreshPost()
    }

    // Add comment
    const handleComment = (content: string) => {
        dispatch(addComment({ postId: post.id, userId: user.id, content: content }))
        refreshPost()
    }

    // Refresh post
    const refreshPost = async () => {
        const { data, error } = await supabase
            .from('posts')
            .select(`*, profiles(*), likes(*), comments(*, profiles(full_name, username, avatar_url))`)
            .eq('id', post.id)
            .order('created_at', { foreignTable: 'comments', ascending: false })
            .single()

        // Refresh navigation params
        navigation.setParams({
            post: data
        })
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true)

        setTimeout(() => {
            setRefreshing(false)
            refreshPost()
        }, 800)
    }, [])

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View className="p-2">
                    <TouchableOpacity>
                        <Ionicons name="ios-arrow-back" size={30} color="black"
                            onPress={() => navigation.goBack()}
                        />
                    </TouchableOpacity>
                </View>
                <View className="p-2">
                    <View className="flex flex-row items-center">
                        {post.profiles.avatar_url ? (
                            <Image className="rounded-full" source={{ uri: post.profiles.avatar_url, width: 80, height: 80 }} />
                        ) : (
                            <Image className="rounded-full" source={require('../assets/profilPicture.jpg')} style={{ width: 80, height: 80 }} />
                        )}
                        <View className="mx-2">
                            <Text className="font-bold text-lg">{post.profiles.full_name}</Text>
                            <Text className="text-gray-500">{post.profiles.username}</Text>
                        </View>
                    </View>
                    <View className="p-4">
                        <Text>{post.content}</Text>
                    </View>
                    <View className="flex flex-row">
                        <View className="p-4 flex flex-row items-center">
                            <TouchableOpacity onPress={handleLike} disabled={likeLoading}>
                                <Ionicons name="ios-cube-outline" size={24} color={isLiked ? '#30D9D9' : 'gray'} />
                            </TouchableOpacity>
                            <Text className="pl-2 font-semibold">{post.likes.length}</Text>
                        </View>
                        <View className="p-4 flex flex-row items-center">
                            <FontAwesome name="comment-o" size={24} color="gray" />
                            <Text className="pl-2 font-semibold">{post.comments.length}</Text>
                        </View>
                    </View>
                </View>

                <View className="border-t-2 border-gray-300">
                    <CommentForm handleComment={handleComment} />

                    {post.comments.length > 0 ?
                        post.comments.map((comment) => (
                            <Comment key={comment.id} comment={comment} />
                        ))
                        :
                        <Text className="text-center p-4">Aucun commentaire</Text>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Details