<script setup lang="ts">

import axios from "axios";
import {onMounted, ref} from "vue";
import type { Usine } from "@/types/usine.type";
import type {ObjectId} from "mongodb";

const usines = ref( [] as Usine[])

const getUsines = () => {
  axios.get('http://localhost:3001/usines')
      .then((response) => {
        console.log(response.data);
        usines.value = response.data
      })
    .catch((error) => {
        console.log(error);
      });
}
onMounted(() => {
  getUsines();
})

const performLookUp = (usineId: string) => {
  axios.get(`http://localhost:3001/lookup/${usineId}`)
      .then((response) => {
        console.log(response.data);
      })
    .catch((error) => {
        console.log(error);
      });
}

const upgradeUsine = (usineId : ObjectId) => {
  axios.get(`http://localhost:3001/upgrade/${usineId}`)
      .then((response) => {
        console.log(response.data);
        usines.value = response.data
      })
    .catch((error) => {
        console.log(error);
      }
    );
}

</script>

<template>
  <div class="homepage">
    <h1>HomePage</h1>
    <div>
      <ul v-for="usine in usines" :key="usine._id">
        <li>
          {{ usine.name }} - coût: {{ usine.cost }} - gain par sec: {{ usine.gain_per_seconde }} - lvl: {{ usine.level }}
        </li>
        <button @click="">Acheter</button>
        <button @click="upgradeUsine(usine._id)">Amélioré</button>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>