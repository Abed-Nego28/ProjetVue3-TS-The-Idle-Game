<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";

</script>

<template>
  <div v-if="1">
    <header>
      <HomeView />
    </header>
    <RouterView />
    <div id="app">
    </div>
  </div>
  <div v-else>
    <LoginView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
}

header div {
  display: block;
  margin-bottom: 10px;
}

header div h3 {
  cursor: pointer;
}

@media (min-width: 1024px) {
  header {
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
