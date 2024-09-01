import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://ygunvgvymxtbaqfmydmf.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlndW52Z3Z5bXh0YmFxZm15ZG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMzMDk5MjAsImV4cCI6MjAxODg4NTkyMH0.3She6a3Pf7xM41t5N1tcmC8fRO1uU9Btz4vKMyqFCXw'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
// https://ygunvgvymxtbaqfmydmf.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
