<script setup lang="ts">

import {useAuthStore} from "@/stores/auth";
import {ref} from "vue";
import {RouterService} from "@/router/RouterService";

const router = new RouterService()
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
        label: 'Recipes',
        icon: 'pi pi-table',
        command: () => {router.navigateToRecipes()}
      },
      {
        label: 'Sign-out',
        icon: 'pi pi-sign-out',
        command: () => {useAuthStore().signOut()}
      },
      // {
      //   label: 'Change Theme',
      //   icon: 'pi pi-user',
      //   command:  () => switchTheme()
      // }
    ]
  }
]);

// const usePrimeVue1 = usePrimeVue();

// const switchTheme = function() {
//   // const config = usePrimeVue().config;
//   // console.log(config)
//   usePrimeVue1.changeTheme('aura-light-amber', 'aura-dark-amber', 'darkThemeLink', () => {});
// }

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
