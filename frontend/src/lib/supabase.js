import { createClient } from '@supabase/supabase-js';

// Robust environment variable access for both client and server (SSR)
const getEnv = (key) => {
  // Try import.meta.env (Vite/Client)
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key]) {
    return import.meta.env[key];
  }
  // Try process.env (Node/Server)
  if (typeof process !== 'undefined' && process.env && process.env[key]) {
    return process.env[key];
  }
  return '';
};

const supabaseUrl = getEnv('VITE_SUPABASE_URL');
const supabaseAnonKey = getEnv('VITE_SUPABASE_ANON_KEY');

// Guard against invalid URL to prevent crash during SSR
const isValidUrl = (url) => {
  try {
    return url && (url.startsWith('http://') || url.startsWith('https://'));
  } catch {
    return false;
  }
};

if (!isValidUrl(supabaseUrl) || !supabaseAnonKey) {
  console.error(
    'CRITICAL: Supabase URL or Anon Key is missing or invalid.\n' +
    'URL: ' + (supabaseUrl || 'MISSING') + '\n' +
    'Check your .env file and Vercel Environment Variables.'
  );
}

// Only initialize if we have a valid URL to avoid "Invalid supabaseUrl" crash
export const supabase = isValidUrl(supabaseUrl)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        select: () => ({ 
          order: () => Promise.resolve({ data: [], error: null }), 
          eq: () => ({ 
            single: () => Promise.resolve({ data: null, error: null }) 
          }) 
        }),
        insert: () => ({ select: () => ({ single: () => Promise.resolve({ data: null, error: null }) }) }),
        update: () => ({ eq: () => ({ select: () => ({ single: () => Promise.resolve({ data: null, error: null }) }) }) }),
        delete: () => ({ eq: () => Promise.resolve({ error: null }) }),
      }),
      storage: {
        from: () => ({
          upload: () => Promise.resolve({ error: new Error('Supabase not configured') }),
          getPublicUrl: () => ({ data: { publicUrl: '' } }),
        }),
      },
      auth: {
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      }
    };
