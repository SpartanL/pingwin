import { SafeAreaView, Text, View, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { RegisterNavigationProp } from "../../types/RouteTypes";

import LoginForm from "../../components/Auth/LoginForm"

const Login = () => {
    const navigation = useNavigation<RegisterNavigationProp>();

    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <Text className="font-bold text-2xl">Connexion</Text>
            <Text className="text-center">Connectez-vous à Pingwin</Text>

            <LoginForm />

            <View className="flex flex-row justify-center items-center my-2">
                <Text className="text-center">Vous n'avez pas de compte ?</Text>
                <Pressable className="ml-1" onPress={() => navigation.navigate('Register')}>
                    <Text className="text-blue-500">Inscrivez-vous</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Login