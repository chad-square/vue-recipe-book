<script setup lang="ts">

import NavbarComponent from "@/components/NavbarComponent.vue";
</script>

<template>

  <section class="header-component">
    <h1>Recipe Book</h1>

    <NavbarComponent/>
  </section>

</template>

<style lang="scss" scoped>

.header-component {
  border: 1px solid red;
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  background-color: var(--primary-color);
  /*background-color: var(--highlight-text-color);*/
  color: var(--text-color);
}

</style>
