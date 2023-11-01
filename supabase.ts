import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tcildqcwkwkcpfkwphdn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjaWxkcWN3a3drY3Bma3dwaGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4Mzk0MjAsImV4cCI6MjAxNDQxNTQyMH0.y6d8qEE2jSdPQHmrFbmoLj1J-7WK-9zJWlj48jo_WQA'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})