import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://uugggaqtfnyhmxufhelk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1Z2dnYXF0Zm55aG14dWZoZWxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MTAyODIsImV4cCI6MjAyMzk4NjI4Mn0.-Uf7QwxMAgPcm-ym5ieEhvrjntewu5gViWg7Lk8aZZE'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;  