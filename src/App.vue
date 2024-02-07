<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1 class="text-4xl pb-2">Test Agence imo</h1>

    <nav class="pb-10 *:text-red-500 *:text-xl flex flex-col *:pt-1 menu">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/simple">Simple Maison</RouterLink>
      <RouterLink to="/liste">Liste Maisons</RouterLink>
      <RouterLink to="/liste-fetch">Liste Maisons Fetch</RouterLink>
      <RouterLink to="/liste-supabase">Liste Maisons Supabase</RouterLink>

      <RouterLink to="/maisons/edit/FormkitPage">Fomulaire de création</RouterLink>
      <RouterLink to="/maisons/edit/">Liste des offres</RouterLink>
      <RouterLink to="/ConnexionPage">Connexion</RouterLink>
    </nav>
  </header>

  <main>
    <Suspense>
      <RouterView />
    </Suspense>
  </main>

  <footer>
    
  </footer>
</template>
