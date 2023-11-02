import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import postReducer from './postSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch