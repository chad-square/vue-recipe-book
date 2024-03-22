<script setup lang="ts">

import {recipeCategoryOptions} from "@/mockDatabase";

const selectedCategories = defineModel<string[]>()

</script>

<template>

  <div class="categories">
    <div v-for="(category, index) of recipeCategoryOptions" :key="index" class="category-option">
      <Checkbox v-model="selectedCategories" :inputId="index.toString()" name="category" :value="category"/>
      <label :for="index.toString()">{{ category }}</label>
    </div>
  </div>

</template>

<style scoped>

.categories {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5rem;
  grid-row-gap: 10px;

  .category-option {
    display: flex;
    flex-direction: row;
    gap: 5px;
    width: fit-content;
  }
}

</style>
