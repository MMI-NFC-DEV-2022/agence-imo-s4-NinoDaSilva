<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import { type SchemaOffreMaison } from '@/types';

const res = await fetch('/maisons.json');
const maisons:SchemaOffreMaison[] = await res.json();
</script>

<template>
    <h1>Liste fetch</h1>
    <AfficheMaison v-for="maison in maisons" :key="maison.id" v-bind="maison" />
</template>