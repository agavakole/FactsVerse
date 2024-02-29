import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://tghwirkdxlywjaandczd.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnaHdpcmtkeGx5d2phYW5kY3pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg5ODEzNDgsImV4cCI6MjAyNDU1NzM0OH0.sE-dD6An9Yi0hcz68uXt7Th8UZ0HUDoNSPkUjP6xoLw';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
