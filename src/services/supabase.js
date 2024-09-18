import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://djmhkhazglrotomkjlaz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbWhraGF6Z2xyb3RvbWtqbGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU0Nzc2NzUsImV4cCI6MjA0MTA1MzY3NX0.6eLkzBrrcsOfjpjPPLwuiuTjf9Z84gr1HfWA9jfW2IE';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
