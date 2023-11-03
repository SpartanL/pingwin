import { Image, Text, View } from "react-native"
import { CommentType } from "../types/types"

type CommentProps = {
    comment: CommentType
}

const Comment = ({ comment }: CommentProps ) => {
    return (
        <View className="border-b-2 border-gray-200 p-4">
            <View className="flex flex-row items-center">
                {comment.profiles.avatar_url ? (
                    <Image className="rounded-full" source={{ uri: comment.profiles.avatar_url, width: 40, height: 40 }} />
                ) : (
                    <Image className="rounded-full" source={require('../assets/profilPicture.jpg')} style={{width: 40, height: 40}} />
                )}
                <View className="mx-2">
                    <View className="flex flex-row items-center gap-1 mb-2">
                        <Text className="font-bold text-lg">{comment.profiles.full_name}</Text>
                        <Text className="text-gray-500">{comment.profiles.username}</Text>
                    </View>
                    <Text>{comment.content}</Text>
                </View>
            </View>
        </View>
    )
}

export default Comment