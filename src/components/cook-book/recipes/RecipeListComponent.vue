<script setup lang="ts">

import type {RecipeMetadata} from "@/models/RecipeMetadata";
import {watch} from "vue";

const props = defineProps<{recipeMetadata: RecipeMetadata[]}>()

watch(props, () => {
  console.log(props.recipeMetadata)
})

</script>

<template>

  <ul>
    <li>burger</li>
    <li>roast chicken</li>
    <li>Omelette</li>
  </ul>

</template>

<style scoped>

</style>
