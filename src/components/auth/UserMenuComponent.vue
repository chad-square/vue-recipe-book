<script setup lang="ts">

import {useAuthStore} from "@/stores/auth";


import {ref} from "vue";

const menu = ref();
const items = ref([
  {
    label: 'Options',
    items: [
      {
        label: 'Account',
        icon: 'pi pi-user'
      },
      {
        label: 'Sign-out',
        icon: 'pi pi-sign-out',
        command: () => {useAuthStore().signOut()}
      }
    ]
  }
]);

const toggle = (event: any) => {
  menu.value.toggle(event);
};

</script>

<template>
  <div class="card flex justify-content-center user-menu">
    <Button type="button" icon="pi pi-ellipsis-v" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" />
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" />
  </div>
</template>

<style scoped>

.user-menu Button {
  background-color: var(--orange-700);
  border: none
}
</style>
