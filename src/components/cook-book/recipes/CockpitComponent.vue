<script setup lang="ts">

import CategorySelector from "@/components/cook-book/recipes/CategorySelectorComponent.vue";
import {ref} from "vue";
import {useRecipeBookStore} from "@/stores/recipeBook";

const filteredCategories = ref(useRecipeBookStore().filteredCategories)
const recipeSearchValue = ref(useRecipeBookStore().recipeSearchValue)

</script>

<template>

  <div class="cockpit">
    <div class="top-section">
      <IconField class="control">
        <InputIcon class="pi pi-search"></InputIcon>
        <InputText v-model="useRecipeBookStore().recipeSearchValue" placeholder="Search for recipe name" />
      </IconField>
      <Button><i class="pi pi-plus"></i></Button>
    </div>
    <CategorySelector v-model="filteredCategories"/>
  </div>

</template>

<style scoped>

.cockpit {
  margin-top: var(--appVerticalSpacing);
  display: flex;
  flex-direction: column;
  gap: var(--appVerticalSpacing);

  .top-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .p-icon-field {
      width: 80%;
      /*border: 1px solid red;*/
      input {
        width: 100%;
      }
    }
  }
}

</style>
