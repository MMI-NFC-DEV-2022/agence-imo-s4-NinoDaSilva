<script setup lang="ts">
import { ref } from 'vue';
import { supabase, user } from '@/supabase';

async function signIn(data, node) {
  const { user, error } = await (nvlUtilisateur.value
    ? supabase.auth.signUp(data)
    : supabase.auth.signIn(data));
  if (error) {
    console.error(error);
    node.setErrors([error.message]);
  }
}
const nvlUtilisateur = ref(false);
</script>

<template>
    <h1>Page de connexion</h1>
    <div>
        <button v-if="user" @pointerdown="supabase.auth.signOut()">
            Se déconnecter ({{ user.email }})
        </button>
        <button v-else @pointerdown="supabase.auth.signInWithOAuth({provider: 'github'})" class="border p-2">
            Se connecter avec Github
        </button>
    </div>
  </template>
