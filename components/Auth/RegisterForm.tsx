import { Pressable, Text, TextInput, View } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { firebaseapp, db } from "../../FirebaseConfig";
import { getAuth, onAuthStateChanged, User, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import React, { useState } from "react";
import { onValue, ref, set } from "firebase/database";

const RegisterForm = () => {

    const auth = getAuth(firebaseapp);
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [user, setUser] = useState<string>('')

    //Firebase

    let userid = ''
    const adddata = async (uid: string) => {
        set(ref(db, 'Users/' + uid), {
            image: "https://i.imgflip.com/7nwv7w.jpg",
            bio: "Je suis un pingouin",
            email: email,
            nom: user,
            pseudo: '@' + user.normalize('NFKD') 
                .replace(/[\u0300-\u036f]/g, '') 
                .trim() 
                .toLowerCase() 
                .replace(/[^a-z0-9 -]/g, '')
                .replace(/\s+/g, '-') 
                .replace(/-+/g, '-'),
        })
    }

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password).then((UserCredential) => {
                userid = UserCredential.user.uid;
            })
        }
        catch (error) {
            alert(error.message)
        }
        try {
            await adddata(userid)
        } catch (error) {
            alert('Nom d\'utilisateur incorrect')
        }
    }

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
                        value={user}
                        onChangeText={(text) => setUser(text)}
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

            <Pressable className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md" onPress={handleRegister}>
                <Text className="text-center text-white font-semibold">Inscription</Text>
            </Pressable>
        </View>
    )
}

export default RegisterForm