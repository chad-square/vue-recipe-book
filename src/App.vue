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
  top: 100px;
  /*height: calc(100vh - 100px);*/
  margin-right: var(--appHorizontalSpacing);
  margin-left: var(--appHorizontalSpacing);
  padding: 0 0 10px 0;
  background-color: var(--orange-50);
  /*border: 1px solid blue;*/
}

</style>
