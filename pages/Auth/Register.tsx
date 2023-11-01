import { Pressable, SafeAreaView, Text, View } from "react-native"
import { LoginNavigationProp } from "../../types/RouteTypes";
import { useNavigation } from "@react-navigation/native";

import RegisterForm from "../../components/Auth/RegisterForm";


const Register = () => {
    const navigation = useNavigation<LoginNavigationProp>();

    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <Text className="font-bold text-2xl">Inscription</Text>
            <Text className="text-center">Inscrivez-vous à Pingwin</Text>

            <RegisterForm />

            <View className="flex flex-row justify-center items-center my-2">
                <Text className="text-center">Vous avez déjà un compte ?</Text>
                <Pressable className="ml-1" onPress={() => navigation.navigate('Login')}>
                    <Text className="text-blue-500">Connectez-vous</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default Register