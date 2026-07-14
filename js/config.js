/* Supabase project credentials.
   The anon key is safe to expose in frontend code — the database is protected
   by row-level security policies (see supabase/schema.sql).
   Until these are filled in, scores are kept in localStorage only. */

export const SUPABASE_URL = '';      // e.g. 'https://abcdefgh.supabase.co'
export const SUPABASE_ANON_KEY = ''; // 'Publishable' / anon key from Supabase project settings
