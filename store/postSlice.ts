import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PostType } from '../types/types'
import { supabase } from '../supabase'

type PostInitialState = {
  posts: PostType[]
  postLoading: boolean
  likeLoading: boolean
  commentLoading: boolean
}

type CreatePostPayload = {
  content: string
  userId: string
}

type LikePostPayload = {
  postId: string
  userId: string
}

type AddCommentPayload = {
  postId: string
  userId: string
  content: string
}

const initialState: PostInitialState = {
  posts: [],
  postLoading: false,
  likeLoading: false,
  commentLoading: false
}

// Get all posts
export const fetchPosts = createAsyncThunk<PostType[]>(
  'post/fetchPosts',
  async () => {
    const { data, error } = await supabase
      .from('posts')
      .select(`*, profiles(*), likes(*), comments(*, profiles(full_name, username, avatar_url))`)
      .order('created_at', { ascending: false })
      .order('created_at', { foreignTable: 'comments', ascending: false })

    if (error) {
      throw error
    }

    return data as PostType[]
  }
)

// Create a post
export const createPost = createAsyncThunk<PostType, CreatePostPayload>(
  'post/createPost',
  async (payload) => {
    const { data, error } = await supabase.from('posts').insert({
      content: payload.content,
      user: payload.userId
    }).select(`*, profiles(*), likes(*), comments(*, profiles(full_name, username, avatar_url))`)

    if (error) {
      throw error
    }

    if (data === null) {
      throw new Error('Data is null')
    }

    return data[0] as PostType
  }
)

// Like a post
export const addLike = createAsyncThunk<PostType, LikePostPayload>(
  'post/addLike',
  async (payload) => {
    const { data: likeData, error: likeError } = await supabase
      .from('likes')
      .insert({
        post: payload.postId,
        user: payload.userId
      })

    const { data, error } = await supabase
      .from('posts')
      .select(`*, profiles(*), likes(*), comments(*, profiles(full_name, username, avatar_url))`)
      .eq('id', payload.postId)

    if (error) {
      throw error
    }

    if (data === null || data.length === 0) {
      throw new Error('Post not found')
    }

    return data[0] as PostType
  }
)

// Unlike a post
export const removeLike = createAsyncThunk<PostType, LikePostPayload>(
  'post/removeLike',
  async (payload) => {
    const { data: likeData, error: likeError } = await supabase
      .from('likes')
      .delete()
      .eq('post', payload.postId)
      .eq('user', payload.userId)

    const { data, error } = await supabase
      .from('posts')
      .select(`*, profiles(*), likes(*), comments(*, profiles(full_name, username, avatar_url))`)
      .eq('id', payload.postId)

    if (error) {
      throw error
    }

    if (data === null || data.length === 0) {
      throw new Error('Post not found')
    }

    return data[0] as PostType
  }
)

// Add comment to a post
export const addComment = createAsyncThunk<PostType, AddCommentPayload>(
  'post/addComment',
  async (payload) => {
    const { data: commentData, error: commentError } = await supabase
      .from('comments')
      .insert({
        post: payload.postId,
        user: payload.userId,
        content: payload.content
      })

    const { data, error } = await supabase
      .from('posts')
      .select(`*, profiles(*), likes(*), comments(*, profiles(full_name, username, avatar_url))`)
      .eq('id', payload.postId)

    if (error) {
      throw error
    }

    if (data === null || data.length === 0) {
      throw new Error('Post not found')
    }

    return data[0] as PostType
  }
)

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload
      })
      .addCase(createPost.pending, (state, action) => {
        state.postLoading = true
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.postLoading = false
        state.posts = [action.payload, ...state.posts]
      })
      .addCase(addLike.pending, (state, action) => {
        state.likeLoading = true
      })
      .addCase(addLike.fulfilled, (state, action) => {
        state.likeLoading = false
        const index = state.posts.findIndex(post => post.id === action.payload.id)
        if (index !== -1) {
          state.posts[index] = action.payload
        }
      })
      .addCase(removeLike.pending, (state, action) => {
        state.likeLoading = true
      })
      .addCase(removeLike.fulfilled, (state, action) => {
        state.likeLoading = false
        const index = state.posts.findIndex(post => post.id === action.payload.id)
        if (index !== -1) {
          state.posts[index] = action.payload
        }
      })
      .addCase(addComment.pending, (state, action) => {
        state.commentLoading = true
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.commentLoading = false
        const index = state.posts.findIndex(post => post.id === action.payload.id)
        if (index !== -1) {
          state.posts[index] = action.payload
        }
      })
  }
})

export default postSlice.reducer