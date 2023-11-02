import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PostType } from '../types/types'
import { supabase } from '../supabase'

type PostInitialState = {
  posts: PostType[]
}

const initialState: PostInitialState = {
  posts: []
}

// Get all posts
export const fetchPosts = createAsyncThunk<PostType[]>(
  'post/fetchPosts',
  async () => {
    const { data, error } = await supabase
      .from('posts')
      .select(`*, profiles(*)`)

    if (error) {
      throw error
    }

    return data as PostType[]
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
    }
})

export default postSlice.reducer