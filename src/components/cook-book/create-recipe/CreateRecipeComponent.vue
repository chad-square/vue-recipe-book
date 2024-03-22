<script setup lang="ts">
import {ref} from "vue";
import {emailValidation, passwordValidation, requiredValidation} from "@/shared/form/formValidations";
import type {SignInDetails} from "@/models/SignInDetails";
import {useAuthStore} from "@/stores/auth";
import router from "@/router";
import type {Recipe} from "@/models/Recipe";
import type {RecipeMetadata} from "@/models/RecipeMetadata";
import {recipeCategoryOptions} from "@/mockDatabase";
import IngredientInput from "@/components/cook-book/create-recipe/IngredientInput.vue";
import InstructionsInput from "@/components/cook-book/create-recipe/InstructionsInput.vue";
import CategorySelector from "@/components/cook-book/create-recipe/CategorySelectorInput.vue";
import FormCategorySelector from "@/components/cook-book/create-recipe/CategorySelectorInput.vue";
import CategorySelectorInput from "@/components/cook-book/create-recipe/CategorySelectorInput.vue";

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
    value: ''
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

const onCreateRecipe = async function () {

  // requiredValidation(formData.value)
  // emailValidation(formData.value)
  // passwordValidation(formData.value)

  if (!formData.value.isValid) {
    return
  }

  const metadata: RecipeMetadata = {
    id: undefined,
    recipeId: undefined,
    author: '',
    likes: JSON.stringify([]),
    name: formData.value.name.value,
    thumbnailPath: formData.value.thumbnailPath.value,
    isPrivate: formData.value.isPrivate.value,
    categories: JSON.stringify(formData.value.categories.value),
    cookingTime: formData.value.cookingTime.value
  };

  const recipe: Recipe = {
    id: undefined,
    userId: undefined,
    ingredients: JSON.stringify(formData.value.ingredients.value),
    instructions: JSON.stringify(formData.value.instructions.value),
    additionalComments: JSON.stringify(formData.value.additionalComments.value)
  }

  try {
    console.log(formData.value.ingredients)
    console.log(selectedCategories.value)
    console.log('new recipe metadata created: ', metadata)
    console.log('new recipe created: ', recipe)
    // await useAuthStore().signIn(details);
    // await router.push('/recipes')

  } catch (error) {
    console.warn(error)
  }
}
</script>

<template>

  <section id="createEditRecipeComponent">
    <h1 class="header">Create a new Recipe</h1>

    <form class="new-recipe-form">

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

      <div class="form-control recipe-control categories-control">
        <label class="categories-control-label">Categories: </label>
        <CategorySelectorInput v-model="formData.categories.value"/>
        <p :class="{showError: formData.categories.error.length > 0}" class="control-error">{{
            formData.categories.error
          }}</p>
      </div>

      <div class="form-control recipe-control cooking-time-control">
        <div class="container">
          <label for="">Cooking Time:</label>
          <InputText placeholder="Cooking Time" v-model="formData.cookingTime.value"/>
        </div>
        <p :class="{showError: formData.cookingTime.error.length > 0}" class="control-error">{{
            formData.cookingTime.error
          }}</p>
      </div>


      <div class="form-control recipe-control ingredients-control">
        <label for="">Ingredients:</label>
        <IngredientInput v-model="formData.ingredients.value"/>
      </div>

      <div class="form-control recipe-control instructions-control">
        <label for="">Cooking Instructions:</label>
        <InstructionsInput v-model="formData.instructions.value"/>
      </div>

<!--      <div class="form-control recipe-control">-->
<!--        <label for="">Additional Comments:</label>-->
<!--        <InputText placeholder="Additional Comments" v-model="formData.additionalComments.value"/>-->
<!--        <p :class="{showError: formData.additionalComments.error.length > 0}" class="control-error">{{-->
<!--            formData.additionalComments.error-->
<!--          }}</p>-->
<!--      </div>-->

      <Button @click="onCreateRecipe">Create Recipe</Button>

    </form>
  </section>

</template>

<style lang="scss" scoped>
@import "../../../shared/form/recipe-form";

#createEditRecipeComponent {
  display: flex;
  flex-direction: column;
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

.categories-control {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.instructions-control {
  //margin-top: var(--appElementSpacing);
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

  Button {
    grid-area: button;
    //he
  }


  .new-recipe-form {
    display: grid;
    //grid-template-columns: 1fr 1fr;
    grid-template-areas: "nameControl isPrivateControl" "categoriesControl cookingTimeControl" "ingredientsControl instructionsControl" "button button";
    //grid-template-areas:
    //    "nameControl ."
    //    "isPrivateCobntrol categoriesControl cookingTimeControl"
    //    "ingredientsControl instructionsControl";
  }



  .recipe-control {
    //text-align: center;

    .container {
      display: flex;
      flex-direction: row;

      label {
        width: 115px;
      }

    }
  }
}


</style>
