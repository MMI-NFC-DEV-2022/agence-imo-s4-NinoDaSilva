<script setup lang="ts">
import groupBy from "lodash/groupBy";
import { supabase } from "../../supabase";

const { data, error } = await supabase.from("quartiercommune").select("*");
if (error) console.log("n'a pas pu charger la table quartiercommune :", error);

</script>

<template>
  <section class="flex flex-col">
    <h3 class="text-2xl">Liste des quartiers</h3>
    <ul>
      <li v-for="quartierObject in (data as any[])">
        {{ quartierObject.nom_commune }} -
        {{ quartierObject.nom_quartier }}
      </li>
    </ul>

    <Disclosure
        v-for="(listeQuartier, nom_commune) in groupBy(data, 'nom_commune')"
        :key="nom_commune"
    >
        <ul>
            <li
                v-for="quartierObject in listeQuartier"
                :key="quartierObject.id"
                >
            </li>
        </ul>
    </Disclosure>
  </section>
</template>