<script setup lang="ts">
import {RouterLink} from "vue-router";
</script>

<template>
  <main>
    <div class="wrapper">
      <div class="gold">
        <h3>Or possédé : </h3>
      </div>
      <div>
        <h3>Femmes possédé :</h3>
      </div>
      <div class="inventory">
        <h3><RouterLink to="/inventory">Inventaire</RouterLink></h3>
      </div>
      <div class="shop">
        <h3><RouterLink to="/shop">Boutique</RouterLink></h3>
      </div>
      <div class="challenges">
        <h3><RouterLink to="/challenges">Défis</RouterLink></h3>
      </div>
      <div class="history">
        <h3><RouterLink to="/history">Historique</RouterLink></h3>
      </div>
    </div>
  </main>
</template>
