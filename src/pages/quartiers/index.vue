<script setup lang="ts">
import groupBy from 'lodash/groupBy'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { supabase } from '../../supabase'

const { data, error } = await supabase.from('quartiercommune').select('*')
if (error) console.log("n'a pas pu charger la table quartiercommune :", error)
</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des quartiers selon la commune</h3>
    <div class="py-4">
      <Disclosure
        v-for="(listeQuartier, libelleCommune) in groupBy(data, 'nom_commune')"
        :key="libelleCommune"
      >
        <DisclosureButton class="block py-1 text-green-900 text-xl">{{ libelleCommune }}</DisclosureButton>
        <DisclosurePanel>
          <ul class="text-gray-700">
            <li v-for="quartierObject in listeQuartier" :key="quartierObject.id_quartier">
              <RouterLink :to="{ name: '/quartiers/edit/[id]', params: { id: quartierObject.id_quartier } }" class="hover:text-green-600 hover:text-xl">
                {{ quartierObject.nom_quartier }}
              </RouterLink>
            </li>
          </ul>
        </DisclosurePanel>
      </Disclosure>
    </div>

    <!-- <h3 class="text-2xl">Liste des quartiers et des communes</h3>
    <ul>
      <li v-for="(listeQuartier, libelleCommune) in Object.groupBy(data, v=> v.nom_commune)">
        {{ libelleCommune }}
        <div class="ml-4" v-for="quartiercommune in listeQuartier">
          <RouterLink :to="{ name: '/quartiers/edit/[id]', params: { id: quartiercommune.id_quartier } }" class="hover:text-green-600 hover:text-xl">
            {{ quartiercommune.nom_quartier }}
          </RouterLink>
        </div>
      </li>
    </ul> -->
  </section>
</template>
