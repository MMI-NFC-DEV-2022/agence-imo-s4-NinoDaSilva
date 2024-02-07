<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import FormulaireOffreMaison from '@/components/FormulaireOffreMaison.vue';
import { supabase } from '@/supabase';

let { data: tableauMaisons, error } = await supabase
  .from('Maisons')
  .select('*')

</script>

<template>
    <div>
        <h2 class="text-3xl">Formulaire de création d'offre id</h2>
        <FormulaireOffreMaison />
    </div>
</template>