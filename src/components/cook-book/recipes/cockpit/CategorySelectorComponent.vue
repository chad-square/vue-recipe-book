<script setup lang="ts">

import {ref} from "vue";
import {recipeCategoryOptions} from "@/mockDatabase";
import {useRecipeBookStore} from "@/stores/recipeBook";

const categoryOptions = ref<string[]>(recipeCategoryOptions);

const toggleCategorySelect = function(category: string) {
  if (useRecipeBookStore().filteredCategories?.find(str => str == category)) {
    useRecipeBookStore().filteredCategories = useRecipeBookStore().filteredCategories?.filter(str => str !== category)
  } else {
    useRecipeBookStore().filteredCategories.unshift(category)
  }
}

const isSelected = function(option: string): boolean | undefined {
  return useRecipeBookStore().filteredCategories?.includes(option)
}

</script>

<template>

  <ul class="category-selector">
    <li v-for="(category, index) in categoryOptions" :key="index" class="app-chip category-item" :class="{'app-chip-selected': isSelected(category)}" @click="toggleCategorySelect(category)">
      {{ category }}
    </li>
  </ul>

</template>

<style lang="scss" scoped>
.category-selector {
  align-self: center;
  width: 100%;
  max-width: fit-content;
  overflow-X: auto;
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 10px;
  margin-block: 0;
  margin-inline: 0;
  padding-inline: 0;
  padding: 5px;
  border-radius: 6px;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(212,98,19,1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(212,98,19,1);
  box-shadow: 0px 0px 5px 0px rgba(212,98,19,1);


  .category-item {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
