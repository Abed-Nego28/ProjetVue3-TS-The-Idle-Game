<script setup lang="ts">
import axios from "axios";
import {onMounted, ref} from "vue";
import type { Usine } from "@/types/usine.type";
import type {Users} from "@/types/users.type";

const usines = ref( [] as Usine[])
const getShopItem = () => {
  console.log('getShopItem')
  axios.get('http://localhost:3001/shop/usines')
      .then((response) => {
        console.log("response.data", response)
        usines.value = response.data
      })
      .catch((error) => {
        console.log("error.response.data", error)
      });
}
onMounted(() => {
  getShopItem()
})
let user = JSON.parse(localStorage.getItem('user') || '{}')
let userId = user.user.id
console.log("azeaeaz",user)
const getUsine = (usineId: string) => {
  axios.post(`http://localhost:3001/get/usines/${usineId}`, {
    userId : userId
  })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
}
</script>

<template>
  <div class="shop">
    <h1>Boutique</h1>
    <div>
      <ul v-for="usine in usines" :key="usine._id">
        <li>
          {{ usine.name }} - coût: {{ usine.cost }} - gain par sec: {{ usine.gain_per_seconde }} - lvl: {{ usine.level }}
        </li>
        <button @click="getUsine(usine._id)">Acheter</button>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>