<script setup lang="ts">
import { ref } from "vue";
import AfficheMaison from "./AfficheMaison.vue";

const maison = ref({});

</script>

<template>
    <div>
        <div class="pt-2">
            <h2 class="text-2xl">Résultat</h2>
            <AfficheMaison v-bind="maison" />
        </div>
        <div class="pt-2">
            <FormKit type="form" v-model="maison" >
                <FormKit name="nom" label="nom" />
                <FormKit name="prix" label="prix" type="number" />
                <FormKit name="favori" label="mettre en favori" type="checkbox" />
            </FormKit>
        </div>
    </div>
</template>