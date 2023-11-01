import { View, Text, Image } from 'react-native'

//Icons
import { Ionicons } from '@expo/vector-icons'

const PostCard = ({ post }) => {
    return (
        <View className="shadow-xl bg-white m-4 rounded-lg">
            <View className="p-2">
                <View className="flex flex-row items-center">
                    <Image source={require('../assets/profilPicture.jpg')} className="rounded-full" style={{ height: 80, width: 80 }} />
                    <View className="mx-2">
                        <Text className="font-bold text-lg">{post.user.name}</Text>
                        <Text className="text-gray-500">{post.user.username}</Text>
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