import { View, Text, Image } from 'react-native'

//Icons
import { Ionicons } from '@expo/vector-icons'
import { PostType } from '../types/types';

type PostCardProps = {
    post: PostType
};

const PostCard = ({ post }: PostCardProps) => {
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
                    <Ionicons name="ios-cube-outline" size={24} color="#30D9D9" />
                    <Text className="pl-2 font-semibold">600</Text>
                </View>
            </View>
        </View>
    )
}

export default PostCard