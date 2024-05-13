<script setup lang="ts">

import RecipeListComponent from "@/components/cook-book/recipes/RecipeListComponent.vue";
import {dummyRecipeMetadata} from "@/mockDatabase";
import {computed, type ComputedRef, onMounted, ref} from "vue";
import type {RecipeMetadata} from "@/models/RecipeMetadata";
import CockpitComponent from "@/components/cook-book/recipes/cockpit/CockpitComponent.vue";
import {useRecipeBookStore} from "@/stores/recipeBook";

const allRecipeMetadata = ref<RecipeMetadata[]>([])

onMounted(() => {
  useRecipeBookStore().selectAllRecipeMetadata()
      .then((data) => {
        allRecipeMetadata.value = data;
      })
      .catch((error) => {
        console.warn('An error occurred: ', error);
      })

})

const search: ComputedRef<RecipeMetadata[]> = computed(() => allRecipeMetadata.value.filter(metadata => {
  if (useRecipeBookStore().recipeSearchValue.length) {
    return metadata.name.toLowerCase().includes(useRecipeBookStore().recipeSearchValue.toLowerCase()!)
  }
  return allRecipeMetadata.value
}))

const combinedSearchAndCategoryFilter: ComputedRef<RecipeMetadata[]> = computed(() => search.value.filter(metadata => {
  if (useRecipeBookStore().filteredCategories?.length) {
    return metadata.categories.some(category => useRecipeBookStore().filteredCategories.includes(category))
  }
  return allRecipeMetadata.value
}))

</script>

<template>
  <div class="recipes-component">
    <CockpitComponent/>
    <RecipeListComponent :recipeMetadata="combinedSearchAndCategoryFilter"/>
  </div>
</template>

<style scoped>

.recipes-component {
}

</style>
