import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PostType } from '../types/types'
import { collection, getDocs } from 'firebase/firestore'
import { firestore } from '../FirebaseConfig'

type PostInitialState = {
  posts: PostType[]
}

const initialState: PostInitialState = {
  posts: []
}

// Get all posts
export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async () => {
    const querySnapshot = await getDocs(collection(firestore, 'posts'));
    /*const posts = querySnapshot.docs.map((doc)=>({
      id: doc.id,
      ...doc.data(),

    }))*/
    querySnapshot.forEach((doc) => {
      const post = doc.data()
      console.log(post)
      post.userRef.get().then((user) => {
        post.user = user.data()
      })
      console.log(post)
    });
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