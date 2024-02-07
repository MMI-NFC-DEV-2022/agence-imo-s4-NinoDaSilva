import { ref } from 'vue';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code

// Identification user
const { data } = await supabase.auth.getUser()
export const user = ref(data.user)
supabase.auth.onAuthStateChange(async ()=>{
    const { data } = await supabase.auth.getUser()
    user.value = data.user
})