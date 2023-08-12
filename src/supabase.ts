import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'
console.log(import.meta.env.SUPABASE_URL)
const supabaseUrl = import.meta.env.SUPABASE_URL
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)