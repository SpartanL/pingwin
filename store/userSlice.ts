import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserType } from '../types/types'

type UserInitialState = {
  user: UserType
}

const initialState: UserInitialState = {
  user: {} as UserType
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      setUser: (state, action: PayloadAction<UserType>) => {
        state.user = action.payload
      },
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer