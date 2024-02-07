<script setup lang="ts">
import { ref } from 'vue';
import { supabase, user } from '@/supabase';

</script>

<template>
    <h1>Page de connexion</h1>
    <div>
        <button v-if="user" @pointerdown="supabase.auth.signOut()">
            Se déconnecter ({{ user.email }})
        </button>
        <button v-else @pointerdown="supabase.auth.signInWithOAuth({provider: 'github'})" class="border p-2 hover:shadow-md">
            Se connecter avec Github
        </button>
    </div>
  </template>
