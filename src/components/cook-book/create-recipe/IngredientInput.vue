<script setup lang="ts">

import type {Ingredient} from "@/models/Ingredient";
import {ref} from "vue";

const ingredients = defineModel<Ingredient[]>()
const ingredientInput = ref('')
const quantityInput = ref(0)
const selectedMeasurement = ref();
const measurementOptions = ref([
  {name: 'teaspoon', code: 'ts'},
  {name: 'tablespoon', code: 'Tbs'},
  {name: 'gram', code: 'g'},
  {name: 'kilogram', code: 'Kg'},
  {name: 'millilitre', code: 'ml'},
  {name: 'litre', code: 'L'},
]);

const onAddIngredient = function () {
  const ingredient: Ingredient = {
    name: ingredientInput.value,
    quantity: quantityInput.value,
    measurement: selectedMeasurement.value
  }
  ingredients.value?.unshift(ingredient)
}

</script>

<template>

  <div class="form-control ingredients-control-container">
    <div class="inputs-container">
      <InputText placeholder="ingredient" v-model="ingredientInput"/>
      <InputNumber placeholder="quantity" v-model="quantityInput" inputId="quantityInput" :useGrouping="false"
                   :maxFractionDigits="2"/>
      <Dropdown v-model="selectedMeasurement" :options="measurementOptions" optionLabel="name"
                placeholder="Select a Measurement" class=""/>
      <Button @click="onAddIngredient" class="pi pi-plus"></Button>
    </div>
    <ul class="recipe-input-list">
      <li v-for="(ingredient,  index) in ingredients" :key="index">
        <p>{{ ingredient.name }} <span>{{ ingredient.quantity }}<span class="measurement">{{ ingredient.measurement['code'] }}</span></span></p>
      </li>
    </ul>
  </div>


</template>

<style lang="scss" scoped>
@import "../../../shared/form/recipe-form";

.ingredients-control {

  .measurement {
    font-size: small;
    //font-weight: 200;
    font-style: italic;
  }



  //.recipe-list {
  //  list-style: none;
  //}
}

.recipe-input-list {
  //margin: 0;

  p {
    margin: 0;
  }
}


</style>
