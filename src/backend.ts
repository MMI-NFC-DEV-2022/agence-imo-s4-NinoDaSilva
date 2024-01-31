import PocketBase from 'pocketbase';
export const pb = new PocketBase('http://127.0.0.1:8090');

export async function allMaisonsSorted() {
    const records = await pb.collection('maison').getFullList() ;
    return records ;
    }

export async function allMaisonsFavori() {
    const records = await pb.collection('maison').getFullList({filter : 'favori = true', sort : 'favori'}) ;
    return records ;
    }

export async function OneMaison(id) {
    const record = await pb.collection('maison').getOne(id) ;
    return record ;
    }
