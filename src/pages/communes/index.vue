<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { supabase } from '../../supabase'

const { data: listeCommune, error } = await supabase.from('commune').select('*')
if (error) console.log("n'a pas pu charger la table commune :", error)
</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des communes</h3>
    <ul class="text-xl py-2">
      <li v-for="uneCommune in listeCommune" class="py-1">
        <RouterLink :to="{ name: '/communes/edit/[id]', params: { id: uneCommune.id } }" class="hover:text-green-600">
            {{ uneCommune.nom_commune }}
        </RouterLink>
      </li>
    </ul>
  </section>
</template>
