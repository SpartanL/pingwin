import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../store/store'

import { PostType } from '../types/types'

//Icons
import { Ionicons } from '@expo/vector-icons'
import { addLike, removeLike } from '../store/postSlice'

type PostCardProps = {
    post: PostType
};

const PostCard = ({ post }: PostCardProps) => {
    const user = useSelector((state: RootState) => state.user.user)
    const likeLoading = useSelector((state: RootState) => state.posts.likeLoading)
    const dispatch = useAppDispatch()

    // Check if the user has liked the post
    const isLiked = post.likes.find((like) => like.user === user.id)

    // Handle like or unlike
    const handleLike = () => {
        isLiked ? dispatch(removeLike({ postId: post.id, userId: user.id })) : dispatch(addLike({ postId: post.id, userId: user.id }))
    }

    return (
        <View className="shadow-xl bg-white m-4 rounded-lg">
            <View className="p-2">
                <View className="flex flex-row items-center">
                    {post.profiles.avatar_url ? (
                            <Image className="rounded-full" source={{ uri: post.profiles.avatar_url, width: 80, height: 80 }} />
                        ) : (
                            <Image className="rounded-full" source={require('../assets/profilPicture.jpg')} style={{width: 80, height: 80}} />
                        )}
                    <View className="mx-2">
                        <Text className="font-bold text-lg">{post.profiles.full_name}</Text>
                        <Text className="text-gray-500">{post.profiles.username}</Text>
                    </View>
                </View>
                <View className="p-4">
                    <Text>{post.content}</Text>
                </View>
                <View className="p-4 flex flex-row items-center">
                    <TouchableOpacity onPress={handleLike} disabled={likeLoading}>
                        <Ionicons name="ios-cube-outline" size={24} color={isLiked ? '#30D9D9':'gray'} />
                    </TouchableOpacity>
                    <Text className="pl-2 font-semibold">{post.likes.length}</Text>
                </View>
            </View>
        </View>
    )
}

export default PostCard