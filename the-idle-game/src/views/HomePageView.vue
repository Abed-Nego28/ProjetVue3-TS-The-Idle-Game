<template>
  <div>
    <div class="usine-container">
      <div class="usineor" @mouseover="showSquare('usineOr')" @mouseleave="hideSquare">
        usine or
        <div
          class="usine-square"
          :class="{ active: showUsineSquare && usineType === 'usineOr' }"
          @mouseleave="hideSquare"
        ></div>
      </div>
      <div
        class="usinefemme"
        @mouseover="showSquare('usineFemme')"
        @mouseleave="hideSquare"
      >
        usine femme
        <div
          class="usine-square"
          :class="{ active: showUsineSquare && usineType === 'usineFemme' }"
          @mouseleave="hideSquare"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showUsineSquare = ref(false);
const usineType = ref('');

function showSquare(type: string) {
  // Afficher le carré lorsque l'utilisateur survole une usine
  if (type === 'usineOr' || type === 'usineFemme') {
    usineType.value = type;
    showUsineSquare.value = true;
  }
}

function hideSquare() {
  // Cacher le carré lorsque l'utilisateur quitte une usine
  showUsineSquare.value = false;
}
</script>

<style scoped>
.usine-container {
  display: flex;
}

.usineor, .usinefemme {
  display: flex;
  flex-direction: column; /* Mettre les éléments en colonne */
  justify-content: center;
  align-items: center;
  width: 180px; /* Largeur de chaque usine */
  height: 50px;
  background-color: blue; /* Couleur de fond des usines */
  margin-left: 200px; /* Espacement de 10px autour de chaque usine */
  position: relative;
}

.usine-square {
  width: 50px;
  height: 50px;
  background-color: rgb(129, 129, 129); /* Couleur du carré à personnaliser */
  position: absolute;
  display: none;
  right: -80px; /* Décaler le carré légèrement vers la droite */
  bottom: 0; /* Placer le carré dans le coin en bas à droite */
}

/* Afficher le carré lorsque showUsineSquare est true */
.usine-square.active {
  display: block;
}
</style>