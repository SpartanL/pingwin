import { Pressable, Text, TextInput, View } from "react-native"
import { Entypo } from '@expo/vector-icons';

const RegisterForm = () => {
    return (
        <View className="p-4 w-full">
            <View className="mb-4">
                <View className="relative">
                    <View className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10">
                        <Entypo name="user" size={20} color="lightgray" />
                    </View>

                    <TextInput 
                        className="text-sm sm:text-base pl-10 pr-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400" 
                        placeholder="Entrez votre nom d'utilisateur"
                    />
                </View>
            </View>


            <View className="mb-4">
                <View className="relative">
                    <View className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10">
                        <Entypo name="email" size={20} color="lightgray" />
                    </View>

                    <TextInput 
                        className="text-sm sm:text-base pl-10 pr-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400" 
                        placeholder="Entrez votre adresse mail"
                    />
                </View>
            </View>

            <View className="w-full mb-4">
                <View className="relative">
                    <View className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10">
                        <Entypo name="lock" size={20} color="lightgray" />
                    </View>

                    <TextInput 
                        secureTextEntry={true}
                        className="text-sm sm:text-base pl-10 pr-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400" 
                        placeholder="Entrez votre mot de passe" 
                    />
                </View>
            </View>

            <Pressable className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md">
                <Text className="text-center text-white font-semibold">Inscription</Text>
            </Pressable>
        </View>
    )
}

export default RegisterForm