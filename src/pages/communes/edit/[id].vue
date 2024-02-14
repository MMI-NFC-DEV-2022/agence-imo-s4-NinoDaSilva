<script setup lang="ts">
import FormulaireCommune from "../../../components/FormulaireCommune.vue";
import { useRoute } from 'vue-router/auto'

const route = useRoute('/communes/edit/[id]')

</script>

<template>
  <div class="p-2">
    <FormulaireCommune :id="route.params.id" />
  </div>
</template>