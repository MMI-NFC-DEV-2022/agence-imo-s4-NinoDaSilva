<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "@/supabase";
import { useRoute, useRouter } from "vue-router/auto";
import AfficheQuartier from "../components/AfficheQuartier.vue";

const quartier = ref({});
const router = useRouter();

async function upsert(dataForm, node) {
    const { data, error } = await supabase.from("quartier").upsert(dataForm).select();
    if (error) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push({name: "/quartiers/edit/[id]", params: {id: data[0].id} });
    }
}

const route = useRoute("/quartiers/edit/[id]");
if (route.params.id) {
    let { data, error } = await supabase.from("quartier").select("*").eq("id", route.params.id);
    if (error) console.log("error", error);
    else quartier.value = (data as any[]) [0];
}

</script>

<template>
    <div>
        <div class="pt-2">
            <h2 class="text-2xl">Prévisualisation</h2>
            <AfficheQuartier v-bind="quartier" />
        </div>
        <div class="pt-2">
            <FormKit type="form" v-model="quartier" @submit="upsert"
                :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600',
                    },
                }"
                :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded' } }"
            >
                <FormKit name="nom_quartier" label="Nom" />
                <FormKit name="id_Commune" label="Commune" type="select" />
            </FormKit>
        </div>
    </div>
</template>