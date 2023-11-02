import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PostType } from '../types/types'
import { supabase } from '../supabase'

type PostInitialState = {
  posts: PostType[]
}

const initialState: PostInitialState = {
  posts: []
}

type CreatePostPayload = {
  content: string
  userId: string
}

// Get all posts
export const fetchPosts = createAsyncThunk<PostType[]>(
  'post/fetchPosts',
  async () => {
    const { data, error } = await supabase
      .from('posts')
      .select(`*, profiles(*)`)
      .order('created_at', { ascending: false })

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
    }).select(`*, profiles(*)`)

    if (error) {
      throw error
    }

    if (data === null) {
      throw new Error('Data is null')
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
        .addCase(createPost.fulfilled, (state, action)=>{
          state.posts = [action.payload, ...state.posts]
        })
    }
})

export default postSlice.reducer