import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
const supabaseUrl = 'https://lhgylzpqniagxhervkbn.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoZ3lsenBxbmlhZ3hoZXJ2a2JuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNzI1NjcwOCwiZXhwIjoyMDUyODMyNzA4fQ._A1gNnXAy2B8otApOs8kYdAxN5O082xHyPOKyRTezAQ'
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
