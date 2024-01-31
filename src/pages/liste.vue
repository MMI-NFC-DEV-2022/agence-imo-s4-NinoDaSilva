<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import maisons from '@/assets/maisons.json';

</script>

<template>
    <h1>Liste</h1>
    <AfficheMaison v-for="maison in maisons" :key="maison.id" :maison="maison" />
</template>
