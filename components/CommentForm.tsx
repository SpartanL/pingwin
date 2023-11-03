import { useState } from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { useAppDispatch } from "../store/store"
import { addComment } from "../store/postSlice"

type CommentFormProps = {
    userId: string
    postId: string
}

const CommentForm = ({ userId, postId }: CommentFormProps) => {
    const [content, setContent] = useState<string>("")
    const dispatch = useAppDispatch()

    const handleComment = () => {
        dispatch(addComment({postId, userId, content: content}))
        setContent("")
    }

    return (
        <View className="p-2">
            <Text className="font-semibold my-1">Commenter ce post</Text>
            <TextInput
                className="border border-gray-300 rounded"
                multiline
                maxLength={180}
                style={{height: 70}}
                value={content}
                onChangeText={(content) => setContent(content)}
            />
            <Text>{content.length}/180</Text>

            <TouchableOpacity 
                className={"px-4 py-2 bg-blue-500 rounded-md my-4 " + (content.length === 0 ? 'bg-blue-200' : '')}
                onPress={handleComment}
                disabled={content.length === 0}
            >
                <Text className="text-center text-white font-semibold">Commenter</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CommentForm