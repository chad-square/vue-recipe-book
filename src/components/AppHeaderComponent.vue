<script setup lang="ts">

import NavbarComponent from "@/components/NavbarComponent.vue";
import UserMenuComponent from "@/components/auth/UserMenuComponent.vue";
import {useAuthStore} from "@/stores/auth";
import {ref} from "vue";

const authCred = ref(useAuthStore().auth);


</script>

<template>

  <section class="header-component">
    <div class="title-container">
      <h1>Recipe Book</h1>
      <UserMenuComponent v-if="authCred"/>
    </div>
    <NavbarComponent v-if="authCred"/>
  </section>

</template>

<style lang="scss" scoped>

.header-component {
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  height: 100px;
  background-color: var(--orange-500);
  color: var(--text-color);
  padding: 0 var(--appHorizontalSpacing) 0 var(--appHorizontalSpacing);
}

.title-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

NavbarComponent {
  margin-bottom: 10px;
}

</style>
