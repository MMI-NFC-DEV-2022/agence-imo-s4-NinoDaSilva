<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import { type SchemaOffreMaison } from '@/types';
import { supabase } from "../supabase";
console.log("supabase :", supabase); // pour vérifier et "garder" supabase dans le code

const tableauMaisons:SchemaOffreMaison[] = [];
</script>


<template>
    <h1>Liste fetch</h1>
    <AfficheMaison v-for="maison in tableauMaisons" :key="maison.id" v-bind="maison" />
</template>