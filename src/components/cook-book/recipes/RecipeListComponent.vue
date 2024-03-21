<script setup lang="ts">

import type {RecipeMetadata} from "@/models/RecipeMetadata";
import {watch} from "vue";

const props = defineProps<{ recipeMetadata: RecipeMetadata[] }>()

watch(props, () => {
  console.log(props.recipeMetadata)
})


</script>

<template>
  <section class="recipe-list-component">
    <DataView :value="recipeMetadata">

      <template #list="slotProps">
        <div class="recipes-container">
          <div v-for="(item, index) in slotProps.items" :key="index" class="recipe-item">
            <img class="" :src="`../../../public${item.thumbnailPath}`" :alt="item.name" style="max-width: 300px"/>
            <div class="summary">
              <div class="header">
                <p class="">{{ item.name }}</p>
                <div class="categories-container">
                  <p class="app-chip categories" v-for="(category, index) in item.categories" :key="index">{{category}}</p>
                </div>
              </div>
              <div class="footer" style="">
                <i class="pi pi-star-fill text-yellow-500" :style="{color: item.likes.length ? 'var(--orange-500)' : ''}"></i>
                <div class="">
                  <i class="pi pi-clock"></i>
                  {{ item.cookingTime }}
                </div>
                <div class="">
                  <i class="pi pi-user"></i>
                  {{ item.author }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

    </DataView>
  </section>




</template>

<style scoped>

.recipe-list-component {
  background-color: var(--orange-50);
}

.recipes-container {
  background-color: var(--orange-50);
  align-items: center;
  justify-content: center;
  margin: var(--appVerticalSpacing) auto var(--appVerticalSpacing) auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .recipe-item {
    display: flex;
    flex-direction: column;
    background-color: var(--orange-50);
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(212, 98, 19, 0.68);
    -moz-box-shadow: 0px 0px 5px 0px rgba(212, 98, 19, 0.68);
    box-shadow: 0px 0px 5px 0px rgba(212, 98, 19, 0.68);
    cursor: pointer;

    img {
      width: 100%;
      align-self: center;
      border-radius: 8px;
    }

  }
}

.categories-container {
  display: flex;
  flex-direction: row;
  gap: 5px;
  overflow: auto;
  width: 100%;
}

/* for larger than mobile */
@media (min-width: 450px) {
  .recipes-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    .recipe-item {
      width: calc((100vw - 120px) / 3);
      margin: auto;
    }
  }
}


</style>
