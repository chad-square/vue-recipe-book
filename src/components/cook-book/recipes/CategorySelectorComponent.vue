<script setup lang="ts">

import {ref} from "vue";

const categoryOptions = ref<string[]>(['Breakfast', 'Lunch', 'Dinner', 'Light', 'Main', 'Side', 'Snack', 'Dessert', 'Baked']);

const selectedCategories = defineModel<string[]>()

const toggleCategorySelect = function(category: string) {
  if (selectedCategories.value?.find(str => str == category)) {
    selectedCategories.value = selectedCategories.value?.filter(str => str !== category)
  } else {
    selectedCategories.value?.push(category)
  }
}

const isSelected = function(option: string): boolean | undefined {
  return selectedCategories.value?.includes(option)
}

</script>

<template>

  <ul class="category-selector">
    <li v-for="(category, index) in categoryOptions" :key="index" class="category-item" :class="{selected: isSelected(category)}" @click="toggleCategorySelect(category)">
      {{ category }}
    </li>
  </ul>

</template>

<style lang="scss" scoped>
.category-selector {
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
    //border: 1px solid black;
    border-radius: 6px;
    padding: 5px;
    background-color: var(--orange-100);
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover {
      cursor: pointer;
    }
  }

  .selected {
    background-color: var(--orange-400);
  }
}
</style>
