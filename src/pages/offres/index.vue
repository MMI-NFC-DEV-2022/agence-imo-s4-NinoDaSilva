<script setup lang="ts">
import { allMaisonsSorted } from '@/backend'
const maisonsListe = await allMaisonsSorted()
</script>

<template>
    <ul>
        <li v-for="uneMaison of maisonsListe" :v-key="uneMaison.id" v-bind="{ ...uneMaison }">
          <RouterLink
            :to="{
              name: 'offres-id',
              params: {
                id: uneMaison.id
              }
            }"
            class="text-red-400 hover:text-red-600"
          >
            {{ uneMaison.nomMaison }}
          </RouterLink>
        </li>
      </ul>
</template>