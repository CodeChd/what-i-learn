
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ebpnruaiihixslzzvksu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVicG5ydWFpaWhpeHNsenp2a3N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0OTk4OTQsImV4cCI6MTk5MzA3NTg5NH0.O3LxLPNemQaJRJyakIIL8UggFZBgY9YhrlLCDIoP0R8"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase