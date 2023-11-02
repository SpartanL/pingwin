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
    created_at: string
    profiles: UserType
    likes: LikeType[]
}

export type LikeType = {
    id: string
    user: string
    post: {
        id: string
    }
}