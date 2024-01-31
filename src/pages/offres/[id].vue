<script setup lang="ts">
  import MaisonCard from '@/components/MaisonCard.vue'
  import { OneMaison } from '@/backend'

  const props = defineProps<{
    id: string
  }>()
  const uneMaison = await OneMaison(props.id)
</script>

<template>
  <div>
    <h1 class="text-xl">Une maison</h1>
    <MaisonCard v-bind="{ ...uneMaison }" />
  </div>
</template>