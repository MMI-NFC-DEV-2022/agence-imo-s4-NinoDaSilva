<script setup lang="ts">
import FormulaireQuartier from "../../../components/FormulaireQuartier.vue";
import { useRoute } from 'vue-router/auto'

const route = useRoute('/quartiers/edit/[id]')

</script>

<template>
  <div class="p-2">
    <FormulaireQuartier :id="route.params.id" />
  </div>
</template>