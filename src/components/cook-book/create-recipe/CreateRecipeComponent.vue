<script setup lang="ts">
import {ref} from "vue";
import {useAuthStore} from "@/stores/auth";
import type {Recipe} from "@/models/Recipe";
import type {RecipeMetadata} from "@/models/RecipeMetadata";
import IngredientInput from "@/components/cook-book/create-recipe/IngredientInput.vue";
import InstructionsInput from "@/components/cook-book/create-recipe/InstructionsInput.vue";
import CategorySelectorInput from "@/components/cook-book/create-recipe/CategorySelectorInput.vue";
import TimeInput from "@/shared/form/components/time-input.vue";
import {useScreenSizeStore} from "@/stores/screenSize";

const step1 = ref();
const step2 = ref();
const step3 = ref();
const step4 = ref();
const step5 = ref();

const selectedCategories = ref([]);
const formData = ref({
  name: {
    error: '',
    value: 'Taco Tuesday'
  },
  thumbnailPath: {
    error: '',
    value: '/some-img.png'
  },
  isPrivate: {
    error: '',
    value: false
  },
  categories: {
    error: '',
    value: []
  },
  cookingTime: {
    error: '',
    value: '13:6'
  },
  ingredients: {
    error: '',
    value: []
  },
  instructions: {
    error: '',
    value: []
  },
  additionalComments: {
    error: '',
    value: []
  },
  isValid: true
})

const ori = ref(useScreenSizeStore().orientation)

const onCreateRecipe = async function () {

  // requiredValidation(formData.value)

  if (!formData.value.isValid) {
    return
  }

  console.log(useAuthStore().auth?.email);
  const metadata: RecipeMetadata = {
    id: undefined,
    recipeId: undefined,
    author: useAuthStore().auth?.email!,
    likes: JSON.stringify([]),
    name: formData.value.name.value,
    thumbnailPath: formData.value.thumbnailPath.value,
    isPrivate: formData.value.isPrivate.value,
    categories: JSON.stringify(formData.value.categories.value),
    cookingTime: formData.value.cookingTime.value
  };

  console.log(useAuthStore().auth?.email);

  const recipe: Recipe = {
    id: undefined,
    userId: useAuthStore().auth?.uid,
    ingredients: JSON.stringify(formData.value.ingredients.value),
    instructions: JSON.stringify(formData.value.instructions.value),
    additionalComments: JSON.stringify(formData.value.additionalComments.value)
  }

  console.log('recipe: ', recipe, "metadata: ", metadata)

  // await useRecipeBookStore().createRecipe(recipe, metadata)
}
</script>

<template>

  <section class="for-small">
    <Stepper :orientation="useScreenSizeStore().orientation" :class="'recipe-crud-stepper'">
      <StepperPanel header="Recipe">
        <template #content="{ nextCallback }">
          <div class="flex flex-column h-12rem">
            <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">

              <div class="form-control recipe-control name-control">
                <div class="container">
                  <label>Recipe Name:</label>
                  <InputText placeholder="Email" required v-model="formData.name.value"/>
                </div>
                <p :class="{showError: formData.name.error.length > 0}" class="control-error">{{ formData.name.error }}</p>
              </div>

              <!--      <div class="form-control recipe-control">-->
              <!--        <div class="container">-->
              <!--          <label>Thumbnail:</label>-->
              <!--          <InputText placeholder="Password" v-model="formData.thumbnailPath.value"/>-->
              <!--        </div>-->
              <!--        <p :class="{showError: formData.thumbnailPath.error.length > 0}" class="control-error">{{-->
              <!--            formData.thumbnailPath.error-->
              <!--          }}</p>-->
              <!--      </div>-->

              <div class="form-control recipe-control is-private-control">
                <div class="container">
                  <label for="">isPrivate:</label>
                  <InputSwitch v-model="formData.isPrivate.value"/>
                </div>
                <p :class="{showError: formData.isPrivate.error.length > 0}" class="control-error">{{
                    formData.isPrivate.error
                  }}</p>
              </div>

            </div>
          </div>
          <div ref="step1" class="flex py-4 page-controls">
            <Button label="Next" @click="nextCallback" />
          </div>
        </template>
      </StepperPanel>
      <StepperPanel header="Categories">
        <template #content="{ prevCallback, nextCallback }">
          <div class="flex flex-column h-12rem">
            <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">

              <div class="form-control recipe-control categories-control">
                <label class="categories-control-label">Categories: </label>
                <CategorySelectorInput v-model="formData.categories.value"/>
                <p :class="{showError: formData.categories.error.length > 0}" class="control-error">{{
                    formData.categories.error
                  }}</p>
              </div>

            </div>
          </div>
          <div ref="step2" class="flex py-4 gap-2 page-controls">
            <Button label="Back" severity="secondary" @click="prevCallback" />
            <Button label="Next" @click="nextCallback" />
          </div>
        </template>
      </StepperPanel>
      <StepperPanel header="Cooking Time">
        <template #content="{ prevCallback, nextCallback }">
          <div class="flex flex-column h-12rem">
            <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">

              <div class="form-control recipe-control cooking-time-control">
                <div class="container">
                  <label for="">Cooking Time:</label>
                  <TimeInput v-model="formData.cookingTime.value" />
                </div>
                <p :class="{showError: formData.cookingTime.error.length > 0}" class="control-error">{{
                    formData.cookingTime.error
                  }}</p>
              </div>

            </div>
          </div>
          <div ref="step3" class="flex py-4 gap-2 page-controls">
            <Button label="Back" severity="secondary" @click="prevCallback" />
            <Button label="Next" @click="nextCallback" />
          </div>
        </template>
      </StepperPanel>
      <StepperPanel header="Ingredients">
        <template #content="{ prevCallback, nextCallback }">
          <div class="flex flex-column h-12rem">
            <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">

              <div class="form-control recipe-control ingredients-control">
                <label for="">Ingredients:</label>
                <IngredientInput v-model="formData.ingredients.value"/>
              </div>

            </div>
          </div>
          <div ref="step4" class="flex py-4 gap-2 page-controls">
            <Button label="Back" severity="secondary" @click="prevCallback" />
            <Button label="Next" @click="nextCallback" />
          </div>
        </template>
      </StepperPanel>
      <StepperPanel header="Instructions">
        <template #content="{ prevCallback }">
          <div class="flex flex-column h-12rem">
            <div class="border-2 border-dashed surface-border border-round surface-ground flex-auto flex justify-content-center align-items-center font-medium">

              <div class="form-control recipe-control instructions-control">
                <label for="">Cooking Instructions:</label>
                <InstructionsInput v-model="formData.instructions.value"/>
              </div>

            </div>
          </div>
          <div ref="step5" class="flex py-4 page-controls">
            <Button label="Back" severity="secondary" @click="prevCallback" />
          </div>
        </template>
      </StepperPanel>
    </Stepper>
  </section>

  <Button @click="onCreateRecipe" class="recipe-submit">Save Recipe</Button>

</template>

<style lang="scss" scoped>
@import "../../../shared/form/recipe-form";

.p-stepper {
  flex-basis: 50rem;
}

#createEditRecipeComponent {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.new-recipe-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.recipe-control {
  text-align: center;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px
  }
}

.categories-control, .instructions-control, .ingredients-control {
  label {
    margin-bottom: var(--appElementSpacing)
  }
}

.instructions-control, .ingredients-control {
    margin-bottom: var(--appElementSpacing)
}

.categories-control {
  display: flex;
  flex-direction: column;
  align-items: center;
}






/* for larger than mobile */
@media (min-width: 450px) {


  .name-control {
    grid-area: nameControl;
  }

  .is-private-control {
    grid-area: isPrivateControl;
  }

  .categories-control {
    grid-area: categoriesControl;
  }

  .cooking-time-control {
    grid-area: cookingTimeControl;
  }

  .ingredients-control {
    grid-area: ingredientsControl;
  }

  .instructions-control {
    grid-area: instructionsControl;
  }

  .new-recipe-form {
    display: grid;
    grid-template-areas: "nameControl isPrivateControl" "categoriesControl cookingTimeControl" "ingredientsControl instructionsControl";
    place-items: normal;
  }


  .recipe-control {
    .container {
      display: flex;
      flex-direction: row;

      label {
        width: 115px;
      }
    }
  }

  .cooking-time-control {
    .container {
      display: flex;
      flex-direction: column;
    }
  }

}

.recipe-crud-stepper {
  :deep(.p-stepper-action) {
    background: transparent;
  }
  :deep(.p-stepper-number) {
    background: transparent;
  }
  :deep(.p-stepper-panels) {
    background: transparent;
  }

  :deep(.p-stepper-panel) {
    background: transparent;
  }

  :deep(.p-stepper-toggleable-content ) {
    background: transparent;
  }

  .page-controls {
    display: flex;
    gap: 10px;

    justify-content: center;
  }
}

</style>
