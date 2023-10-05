<script setup lang="ts">
import axios from "axios";
import type {Users} from "@/types/users.type";
import {reactive} from "vue";

const users = reactive<Users>(
    {
      username: "",
      password: ""
    }
)
const handleSubmit = (e) => {
  console.log('submit')
  e.preventDefault();
  axios.post('http://localhost:3001/auth/login', users)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
}

</script>

<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="pseudo" >Pseudo : </label>
        <input type="text" placeholder="pseudo" v-model="users.username">
      </div>
      <div>
        <label for="password">Password : </label>
        <input type="password" placeholder="password" v-model="users.password">
      </div>
      <button>Submit</button>
    </form>
    <p>pas de compte ? <a href="register">register</a></p>
  </div>
</template>

<style scoped>

</style>