<script setup lang="ts">

import AppHeaderComponent from "@/components/AppHeaderComponent.vue";
</script>

<template>
  <AppHeaderComponent/>

  <main class="main-area">

  </main>

  <RouterView />
</template>

<style scoped>

.main-area {
  position: relative;
  top: 90px;
  height: 100vh;
  width: 100vw;
  border: 1px solid black
}

</style>
