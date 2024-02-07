//index.vue
<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import { supabase } from '@/supabase';

let { data: tableauMaisons, error } = await supabase
  .from('Maisons')
  .select('*')

</script>

<template>

    <div class="margin-auto justify-center">

    </div>
    <div class="grid grid-cols-3 gap-4">
    <AfficheMaison v-for="maison in tableauMaisons" v-bind="maison"/>
    </div>
</template>