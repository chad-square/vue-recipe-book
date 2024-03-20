<script setup lang="ts">

import CategorySelector from "@/components/cook-book/recipes/CategorySelectorComponent.vue";
import {ref} from "vue";
import RecipeList from "@/components/cook-book/recipes/RecipeListComponent.vue";

const filteredCategories = ref<string[]>([]);
const recipeSearchValue = ref<string[]>([]);
</script>

<template>
  <input placeholder="recipe name">
  <Button><i class="pi pi-plus"></i></Button>
  <CategorySelector v-model="filteredCategories"/>

  <RecipeList/>
</template>

<style scoped>

</style>
