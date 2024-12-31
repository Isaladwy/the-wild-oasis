import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://djmhkhazglrotomkjlaz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqbWhraGF6Z2xyb3RvbWtqbGF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTQ3NzY3NSwiZXhwIjoyMDQxMDUzNjc1fQ.YyT6OoGTiAcAAOjuOzKeStDzdHfBjTPIx1lhsrE272Q';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
