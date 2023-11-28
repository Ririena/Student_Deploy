import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://tyowyyypegepdwmdaqxc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5b3d5eXlwZWdlcGR3bWRhcXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4ODI5NzMsImV4cCI6MjAxNjQ1ODk3M30.F8--v3PNtfb6wc1rAX0C9ZyGOcp2TYJuXhGZMalljWk')