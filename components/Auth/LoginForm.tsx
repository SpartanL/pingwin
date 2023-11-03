import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native"
import { supabase } from "../../supabase";

import { Entypo } from '@expo/vector-icons';

const LoginForm = () => {
    const [email, setEmail] = useState<string>('')
    const [emailError, setEmailError] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordError, setPasswordError] = useState<string>('')
    const [error, setError] = useState<string>('')

    const login = async () => {
        setError('')
        setEmailError('')
        setPasswordError('')

        if (email.length === 0) {
            setEmailError('Veuillez entrer votre adresse mail');
            return
        }

        if (password.length === 0) {
            setPasswordError('Veuillez entrer votre mot de passe');
            return
        }

        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) setError(error.message)
    };

    return (
        <View className="p-4 w-full">
            <View className="mb-4">
                <View className="relative">
                    <View className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10">
                        <Entypo name="email" size={20} color="lightgray" />
                    </View>

                    <TextInput
                        className={"text-sm sm:text-base pl-10 pr-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400" + (emailError ? ' border-red-500' : '')}
                        placeholder="Entrez votre adresse mail"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        autoCapitalize={'none'}
                    />
                </View>
                {emailError && <Text className="text-red-500 my-1">{emailError}</Text>}
            </View>

            <View className="w-full mb-4">
                <View className="relative">
                    <View className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10">
                        <Entypo name="lock" size={20} color="lightgray" />
                    </View>

                    <TextInput
                        secureTextEntry={true}
                        className={"text-sm sm:text-base pl-10 pr-4 rounded-lg border border-gray-300 w-full py-3 focus:border-gray-400" + (passwordError ? ' border-red-500' : '')}
                        placeholder="Entrez votre mot de passe"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        autoCapitalize={'none'}
                    />
                </View>
                {passwordError && <Text className="text-red-500 my-1">{passwordError}</Text>}
            </View>

            {error && <Text className="text-red-500 mb-4">{error}</Text>}

            <Pressable onPress={login} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md">
                <Text className="text-center text-white font-semibold">Connexion</Text>
            </Pressable>
        </View>
    )
}

export default LoginForm