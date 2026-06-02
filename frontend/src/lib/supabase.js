import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase URL or Anon Key is missing. Check your .env file. ' +
    'The app may not function correctly until these are provided.'
  );
}

export const supabase = createClient(
  supabaseUrl || '', 
  supabaseAnonKey || ''
);
