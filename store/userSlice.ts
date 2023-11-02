import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UserType } from '../types/types'
import { supabase } from '../supabase'

type UserInitialState = {
  user: UserType
}

type UpdateProfilePayload = {
  id: string
  username: string
  full_name: string
  avatar: string
  bio: string
}

const initialState: UserInitialState = {
  user: {} as UserType
}

export function UpdateProfile({
  id,
  username,
  full_name,
  avatar_url,
  bio
}: UserType) {
  return async (dispatch: any) => { 
    try {
      const updates = {
        id,
        username,
        full_name,
        avatar_url,
        bio
      }

      const { error } = await supabase.from('profiles').upsert(updates);

      if (error) {
        throw new Error('Une erreur est survenue lors de la mise à jour du profil.');
      }
    } catch (error) {
      throw error;
    }
  };
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