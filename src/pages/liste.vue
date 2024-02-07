<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';

const maisons = [
    {
        id: 1,
        nomMaison: "Maison A",
        prix: 250000,
        favori: true,
        image: "maisonA.jpg",
        nbrChambres: 3,
        nbrSdb: 2,
        adresse: "123 Rue de la Maison A",
        surface: "150",
    },
    {
        id: 2,
        nomMaison: "Maison B",
        prix: 300000,
        favori: false,
        image: "maisonB.jpg",
        nbrChambres: 4,
        nbrSdb: 3,
        adresse: "456 Rue de la Maison B",
        surface: "200",
    },
    {
        id: 3,
        nomMaison: "Maison C",
        prix: 200000,
        favori: true,
        image: "maisonC.jpg",
        nbrChambres: 2,
        nbrSdb: 1,
        adresse: "789 Rue de la Maison C",
        surface: "120",
    },
];
</script>

<template>
    <h1>Liste</h1>
    <AfficheMaison v-for="maison in maisons" :key="maison.id" v-bind="maison"/>
    
    <div class="my-4">
        <h2>Affichage individuel</h2>
        <AfficheMaison v-bind="maisons[0]" />
        <AfficheMaison v-bind="maisons[1]" />
        <AfficheMaison v-bind="maisons[2]" />
    </div>

</template>
