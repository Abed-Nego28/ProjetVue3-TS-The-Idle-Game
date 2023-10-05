<script setup lang="ts">
import axios from "axios";
import {reactive} from "vue";
import type {UserRegister} from "@/types/users.type";

const users = reactive<UserRegister>({
  username: "",
  password: "",
  confirmpassword: "",
})
const handleSubmit = (e) => {
  e.preventDefault()
  if(users.password !== users.confirmpassword){
    return;
  }
  axios.post("http://localhost:3001/auth/register", users)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })


}
</script>

<template>
  <h1>REGISTER</h1>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="pseudo" >Pseudo : </label>
      <input type="text" placeholder="pseudo" v-model="users.username">
    </div>
    <div>
      <label for="password">Password : </label>
      <input type="password" placeholder="password" v-model="users.password">
    </div>
    <div>
      <label for="confirmpassword">Confirm Password : </label>
      <input type="text" placeholder="confirm password" v-model="users.confirmpassword">
    </div>
    <button>Submit</button>
  </form>
  <p>already a account ? <a href="login">login</a></p>
</template>

<style scoped>

</style>