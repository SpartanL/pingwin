import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native"
import { auth } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Entypo } from '@expo/vector-icons';

const LoginForm = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View className="p-4 w-full">
            <View className="mb-4">
                <View className="relative">
                    <View className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10">
                        <Entypo name="email" size={20} color="lightgray" />
                    </View>

                    <TextInput
                        className="text-sm sm:text-base pl-10 pr-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400"
                        placeholder="Entrez votre adresse mail"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
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
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
            </View>

            <Pressable onPress={login} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md">
                <Text className="text-center text-white font-semibold">Connexion</Text>
            </Pressable>
        </View>
    )
}

export default LoginForm