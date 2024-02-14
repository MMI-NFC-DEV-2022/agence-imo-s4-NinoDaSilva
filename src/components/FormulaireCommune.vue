<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "@/supabase";
import { useRoute, useRouter } from "vue-router/auto";
import { Tables } from '@/supabase-types';

const commune = ref<Tables<'quartiercommune'>>({});
const router = useRouter();

// Envoie des donnees du formulaire
async function upsert(dataForm, node) {
    const { data, error } = await supabase.from("commune").upsert(dataForm).select();
    if (error) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push({name: "/communes/edit/[id]", params: {id: data[0].id} });
    }
}

// Redirection vers la commune de modifiee
const route = useRoute("/communes/edit/[id]");
if (route.params.id) {
    let { data, error } = await supabase.from("commune").select("*").eq("id", route.params.id);
    if (error) console.log("error", error);
    else commune.value = (data as any[]) [0];
}

// Suppression
async function supprimerCommune() {
  const { data, error } = await supabase
    .from("commune")
    .delete()
    .match({ id: commune.value.id });
  if (error) {
    console.error(
      "Erreur à la suppression de ", 
      commune.value,
      "erreur :", 
      error
    );
  } else {
    router.push("/communes");
  }
}

</script>

<template>
    <div>
        <h1 class="text-3xl">Modification de la commune</h1>
        <div class="pt-2">
            <FormKit type="form" v-model="commune" @submit="upsert"
                :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600',
                    },
                }"
                :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded my-2' } }"
            >
                <FormKit name="nom_commune" label="Nom" />
                <FormKit name="code_postal" label="Code postal" type="number" step="10" />
            </FormKit>
        </div>
        <!-- Bouton de suppression -->
        <button
            type="button"
            v-if="commune.id"
            @click="($refs.dialogSupprimer as any).showModal()"
            class="focus-style justify-self-end rounded-md bg-red-500 p-2 my-2 shadow-sm"
        >
            Supprimer
        </button>
        <dialog ref="dialogSupprimer" @click="($event.currentTarget as any).close()">
            <button type="button" class="focus-style justify-self-end rounded-md bg-blue-300 p-2 shadow-sm">
                Annuler
            </button>
            <button type="button" @click="supprimerCommune()" class="focus-style rounded-md bg-red-500 p-2 shadow-sm">
                Confirmer suppression
            </button>
        </dialog>
    </div>
</template>