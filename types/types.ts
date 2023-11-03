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
    comments: CommentType[]
}

export type LikeType = {
    id: string
    user: string
    post: {
        id: string
    }
}

export type CommentType = {
    id: string
    profiles: {
        id: string
        full_name: string
        username: string
        avatar_url: string
    }
    post: {
        id: string
    }
    content: string
    created_at: string
}