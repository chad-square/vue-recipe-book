<script setup lang="ts">

import AppHeaderComponent from "@/components/AppHeaderComponent.vue";
</script>

<template>
  <AppHeaderComponent/>

  <main class="main-area">
    <RouterView />
  </main>

</template>

<style scoped>

.main-area {
  position: relative;
  top: 90px;
  height: calc(100vh - 90px);
  margin-right: 15px;
  margin-left: 15px;
  padding: 0 10px 0 10px;
}

</style>
