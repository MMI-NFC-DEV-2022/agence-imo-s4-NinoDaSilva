<script setup lang="ts">
import MaisonCard from '@/components/AfficheMaison.vue';
import { SchemaOffreMaison } from '@/types';
const offreMaison: SchemaOffreMaison = {
    id: 1,
    nomMaison: "Maison A",
    prix: 250000,
    favori: true,
    image: "maisonA.jpg",
    nbrChambres: 3,
    nbrSdb: 2,
    adresse: "123 Rue de la Maison A",
    surface: "150",
};
</script>

<template>
    <h1>Simple</h1>
    <MaisonCard v-bind="offreMaison"/>
</template>
