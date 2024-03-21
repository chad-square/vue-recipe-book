<script setup lang="ts">

import RecipeListComponent from "@/components/cook-book/recipes/RecipeListComponent.vue";
import {dummyRecipeMetadata} from "@/mockDatabase";
import {computed, type ComputedRef, ref} from "vue";
import type {RecipeMetadata} from "@/models/RecipeMetadata";
import CockpitComponent from "@/components/cook-book/recipes/CockpitComponent.vue";
import {useRecipeBookStore} from "@/stores/recipeBook";

const allRecipeMetadata = ref<RecipeMetadata[]>(dummyRecipeMetadata)

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


/* for larger than tablet */
@media (min-width: 1000px) {

}

/* for tablet */
@media (max-width: 1000px) {

}


/* for larger than mobile */
@media (min-width: 420px) {

}

/* for mobile */
@media (max-width: 420px) {

}

</style>
