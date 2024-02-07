<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import { supabase } from '@/supabase';

let { data: tableauMaisons, error } = await supabase
  .from('Maisons')
  .select('*')

</script>

<template>
  <h1 class="text-3xl pb-4">Liste des offres</h1>
  <div class="grid gap-10">
    <div v-for="maison in tableauMaisons" :key="maison.id">
      <RouterLink :to="{name: '/maisons/edit/[id]', params: {id: maison.id} }">  
        <AfficheMaison v-bind="maison"/>
      </RouterLink>
    </div>
  </div>
</template>