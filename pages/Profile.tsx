import { SafeAreaView, Text, View, Image, ScrollView, Pressable } from "react-native";
import { StyleSheet, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { supabase } from "../supabase";
import { PostType } from "../types/types";

// Components
import PostCard from "../components/PostCard";

// Icons 
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { EditProfileNavigationProp } from "../types/RouteTypes";

const styles = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? 50 : 0
    }
});

const Home = () => {
    const user = useSelector((state: RootState) => state.user.user)
    const posts = useSelector((state: RootState) => state.posts.posts)
    const userPosts = posts.filter((post: PostType) => post.profiles.id === user.id) 

    const navigation = useNavigation<EditProfileNavigationProp>();

    return (
        <SafeAreaView style={styles.AndroidSafeArea}>
            <ScrollView>
                <View className="flex flex-row items-center justify-between p-4 ">
                    <Pressable>
                        <Ionicons name="ios-arrow-back" size={24} color="black"
                            onPress={() => navigation.goBack()}
                        />
                    </Pressable>
                    <Text className="text-center text-3xl font-bold">Mon profil</Text>
                    <Pressable>
                        <AntDesign name="logout" size={24} color="black"
                            onPress={() => supabase.auth.signOut()}
                        />
                    </Pressable>
                </View>
                {user && (
                    <View className="flex flex-wrap justify-center items-center p-2 mx-auto">
                        {user.avatar_url ? (
                            <Image className="rounded-full" source={{ uri: user.avatar_url, width: 150, height: 150 }} />
                        ) : (
                            <Image className="rounded-full" source={require('../assets/profilPicture.jpg')} style={{width: 150, height: 150}} />
                        )}
                        <View className="my-2">
                            <Text className="text-center text-2xl">{user.full_name}</Text>
                            <Text className="text-center text-base text-gray-500">{user.username}</Text>
                            <Text className="text-center my-2">{user.bio}</Text>
                        </View>
                    </View>
                )}
                <Pressable 
                    className="bg-blue-500 rounded-lg p-2 m-2"
                    onPress={
                        () => navigation.navigate('EditProfile')
                }>
                    <Text className="text-center text-base text-white">Modifier votre profil</Text>
                </Pressable>
                <View className="flex flex-row justify-center items-center gap-x-8 p-2">
                    <View className="flex flex-wrap items-center gap-2">
                        <Text className="text-gray-500">Posts</Text>
                        <Text className="text-2xl">{posts.length}</Text>
                    </View>
                    <View className="flex flex-wrap items-center gap-2">
                        <Text className="text-gray-500">Followers</Text>
                        <Text className="text-2xl">0</Text>
                    </View>
                    <View className="flex flex-wrap items-center gap-2">
                        <Text className="text-gray-500">Follows</Text>
                        <Text className="text-2xl">0</Text>
                    </View>
                </View>

                <Text className="text-center text-2xl font-bold my-2">Mes posts</Text>
                {userPosts.map((post: PostType) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home