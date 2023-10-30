import { Button, SafeAreaView, Text } from "react-native"

const Auth = () => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center">
            <Text>Pingwin</Text>
            <Text>Inscrit toi</Text>
            <Button title="Connexion" />
            <Button title="Inscription" />
        </SafeAreaView>
    )
}

export default Auth