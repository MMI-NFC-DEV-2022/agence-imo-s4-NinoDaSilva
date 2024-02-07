<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import { supabase } from "@/supabase";

let { data: tableauMaisons, error } = await supabase
  .from('Maisons')
  .select('*')
</script>


<template>
    <h1>Liste fetch</h1>
    <AfficheMaison v-for="maison in tableauMaisons" :key="maison.id" v-bind="maison" />
</template>