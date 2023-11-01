export type UserType = {
    id: string
    username: string
    full_name: string
    avatar_url: string
    bio: string
}

export type PostType = {
    id: string
    content: string
    //user: UserType
}