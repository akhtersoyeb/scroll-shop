
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pfstmzvvmnberculejbq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmc3RtenZ2bW5iZXJjdWxlamJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTc3Nzc4MTksImV4cCI6MTk3MzM1MzgxOX0.iM3InmgRMA_xC1xmnDlV1aZ3fhyNQ6n2UVYFM7GxMp4'

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage as any,
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: false,
});