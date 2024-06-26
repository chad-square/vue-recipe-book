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
  {name: 'whole', code: 'Whole'},
  {name: 'slice', code: 'Slices'},
  {name: 'cup', code: 'Cusp'},
]);

let ingredientEditId = ref<number | undefined>(undefined);

const onAddIngredient = function () {

  const ingredient: Ingredient = {
    name: ingredientInput.value,
    quantity: quantityInput.value,
    measurement: selectedMeasurement.value.code
  }

  if (ingredientEditId.value != undefined) {
    ingredients.value![ingredientEditId.value] = ingredient;
    ingredientEditId.value = undefined;
  } else {
    ingredients.value?.unshift(ingredient)
  }

  ingredientInput.value = '';
  quantityInput.value = 0;
  selectedMeasurement.value = {};
}

const onIngredientDelete = function(ingredient: Ingredient) {
  ingredients.value = ingredients.value?.filter(listedIngredient => listedIngredient != ingredient)
}

const onIngredientEdit = function(ingredient: Ingredient, index: number) {

  ingredientEditId.value = index
  ingredientInput.value = ingredient.name;
  quantityInput.value = ingredient.quantity;
  selectedMeasurement.value = {
    code: ingredient.measurement,
    name: measurementOptions.value.find(mea =>  mea.code == ingredient.measurement)?.name
  };
}

</script>

<template>

  <div class="form-control ingredients-control-container">
    <ul class="recipe-input-list listed-ingredients">
      <li v-for="(ingredient,  index) in ingredients" :key="index">
        <p>
          <span class="ingredient-name">{{ ingredient.name }} </span>
          <span class="quantity app-chip">{{ ingredient.quantity }}<span class="measurement">{{ ingredient.measurement }}</span></span>
          <span class="update-del-container">
            <span @click="onIngredientDelete(ingredient)"><i class="pi pi-trash"></i></span>
            |
            <span @click="onIngredientEdit(ingredient, index)"><i class="pi pi-file-edit"></i></span>
          </span>
        </p>
      </li>
    </ul>

    <div class="inputs-container">
       <InputText placeholder="ingredient" v-model="ingredientInput"/>
      <div class="input-group">
        <Dropdown v-model="selectedMeasurement" :options="measurementOptions" optionLabel="name"
                  placeholder="Measurement" class="" inputId="measurementSelect" />
        <InputNumber v-model="quantityInput" showButtons buttonLayout="horizontal" inputId="quantityInput"  :min="0">
          <template #incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
        </InputNumber>
      </div>
        <Button v-if="!ingredientEditId" @click="onAddIngredient" class="pi pi-plus"></Button>
        <Button v-if="ingredientEditId" @click="onAddIngredient" class="pi pi-save"></Button>
    </div>
  </div>


</template>

<style lang="scss" scoped>
@import "../../../shared/form/recipe-form";

.input-group {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.ingredients-control {

  .measurement {
    font-size: small;
    font-style: italic;
  }
}

.recipe-input-list {
  overflow-y: hidden;

  p {
    margin: 0;
  }

  .quantity {
    width: fit-content;
    display: inline-flex;
    margin: 5px;
  }

  .update-del-container {
    //margin-left: 10px;
    display: flex;
    gap: 5px;
  }
}

.listed-ingredients {
  height: 20vh;
  overflow-y: auto;
  list-style: none;
  border-radius: 5px;
  width: 100%;

  -webkit-box-shadow: 0px 0px 1px 1px rgba(177,115,95,0.52);
  -moz-box-shadow: 0px 0px 1px 1px rgba(177,115,95,0.52);
  box-shadow: 0px 0px 1px 1px rgba(177,115,95,0.52);

  li {
    overflow-x: auto;
    margin: 10px
  }

  p {
    text-wrap: nowrap;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .ingredient-name {
      display: inline-block;
      width: 30vw;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
}

:deep(#quantityInput) {
  width: 50px;
  padding: 0;
  text-align: center;
}

:deep(.p-inputnumber-button) {
  width: 2rem !important;
}

:deep(#measurementSelect) {
  width: 100px;


}




/* for larger than mobile */
@media (min-width: 450px) {
  .listed-ingredients {
    width: 40vw;

    li  {
      padding: 5px;

      &:hover {
        cursor: pointer;
        background-color: var(--orange-100);
        border-radius: var(--border-radius)
      }
    }
  }
}

</style>
