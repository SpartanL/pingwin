import { useEffect, useState } from "react";
import { supabase } from '../supabase'
import { Session } from '@supabase/supabase-js'
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null)
  const dispatch = useDispatch()

  const getProfile = async (session: Session|null) => {
    const { data: user, error } = await supabase
      .from('profiles')
      .select(`id, username, full_name, bio, avatar_url`)
      .eq('id', session?.user.id)
      .single()

    if (error) {
      throw error
    }

    return user
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      if(session) {
        getProfile(session).then(user => dispatch(setUser(user)))
      }
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      if(session) {
        getProfile(session).then(user => dispatch(setUser(user)))
      }
    })
  }, [])

  return {
    session,
  };
}