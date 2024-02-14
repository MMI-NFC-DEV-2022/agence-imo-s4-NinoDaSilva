<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "@/supabase";
import { useRoute, useRouter } from "vue-router/auto";
import { Tables } from '@/supabase-types';

const quartier = ref<Tables<'quartiercommune'>>({});
const router = useRouter();

// Envoie des donnees du formulaire
async function upsert(dataForm, node) {
    const { data, error } = await supabase.from("quartier").upsert(dataForm).select();
    if (error) node.setErrors([error.message]);
    else {
        node.setErrors([]);
        router.push({name: "/quartiers/edit/[id]", params: {id: data[0].id} });
    }
}

// Redirection vers le quartier de modifiee
const route = useRoute("/quartiers/edit/[id]");
if (route.params.id) {
    let { data, error } = await supabase.from("quartier").select("*").eq("id", route.params.id);
    if (error) console.log("error", error);
    else quartier.value = (data as any[]) [0];
}

// Charger les données des communes
const { data: listeCommune, error } = await supabase
  .from("commune")
  .select("*");
if (error) console.log("n'a pas pu charger la table Commune :", error);
// Les convertir par `map` en un tableau d'objets {value, label} pour FormKit
const optionsCommune = listeCommune?.map((commune) => ({
  value: commune.id,
  label: commune.nom_commune,
}));

// Suppression quartiers
async function supprimerQuartier() {
  const { data, error } = await supabase
    .from("quartier")
    .delete()
    .match({ id: quartier.value.id });
  if (error) {
    console.error(
      "Erreur à la suppression de ", 
      quartier.value,
      "erreur :", 
      error
    );
  } else {
    router.push("/quartiers");
  }
}

</script>

<template>
    <div>
        <!-- <div class="pt-2">
            <h2 class="text-2xl">Prévisualisation</h2>
            <div>Quartier : {{ quartier.nom_quartier }}</div>
            <div>Commune : {{ quartier.id_Commune }}</div>
        </div> -->
        <h1 class="text-3xl">Modification du quartier</h1>
        <div class="pt-2">
            <FormKit type="form" v-model="quartier" @submit="upsert"
                :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600',
                    },
                }"
                :submit-attrs="{ classes: { input: 'bg-red-300 p-1 rounded my-2' } }"
            >
                <FormKit name="nom_quartier" label="Nom" />
                <FormKit name="id_Commune" label="Commune" type="select" :options="optionsCommune" />
            </FormKit>
        </div>
        <!-- Bouton de suppression -->
        <button
            type="button"
            v-if="quartier.id"
            @click="($refs.dialogSupprimer as any).showModal()"
            class="focus-style justify-self-end rounded-md bg-red-500 p-2 my-2 shadow-sm"
        >
            Supprimer
        </button>
        <dialog ref="dialogSupprimer" @click="($event.currentTarget as any).close()">
            <button type="button" class="focus-style justify-self-end rounded-md bg-blue-300 p-2 shadow-sm">
                Annuler
            </button>
            <button type="button" @click="supprimerQuartier()" class="focus-style rounded-md bg-red-500 p-2 shadow-sm">
                Confirmer suppression
            </button>
        </dialog>
    </div>
</template>