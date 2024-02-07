<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "@/supabase";
import { useRoute, useRouter } from "vue-router/auto";
import AfficheMaison from "./AfficheMaison.vue";

const maison = ref({});
const router = useRouter();

async function upsertMaison(dataForm, node) {
    const { data, error } = await supabase.from("Maisons").upsert(dataForm).select();
    if (error) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push({name: "/maisons/edit/[id]", params: {id: data[0].id} });
    }
}

const route = useRoute("/maisons/edit/[id]");
if (route.params.id) {
    let { data, error } = await supabase.from("Maisons").select("*").eq("id", route.params.id);
    if (error) console.log("error", error);
    else maison.value = (data as any[]) [0];
}

</script>

<template>
    <div>
        <div class="pt-2">
            <h2 class="text-2xl">Résultat</h2>
            <AfficheMaison v-bind="maison" />
        </div>
        <div class="pt-2">
            <FormKit type="form" v-model="maison" @submit="upsertMaison"
                :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600',
                    },
                }"
                :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }"
            >
                <FormKit name="nomMaison" label="Nom" />
                <FormKit name="adresse" label="Adresse" />
                <FormKit name="prix" label="Prix" type="number" />
                <FormKit name="nbrChambres" label="Nombre de chambre" type="number" />
                <FormKit name="nbrSdb" label="Nombre de salle de bain" type="number" />
                <FormKit name="surface" label="Surface" type="number"/>
                <FormKit name="image" label="Photo" type="file"/>
                <FormKit name="favori" label="Mettre en favori" type="checkbox" />
            </FormKit>
        </div>
    </div>
</template>