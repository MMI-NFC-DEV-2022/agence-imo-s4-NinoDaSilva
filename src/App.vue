<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Test Agence imo</h1>

    <nav class="*:text-red-500 flex flex-col">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/simple">Simple Maison</RouterLink>
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
