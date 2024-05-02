import {defineStore} from "pinia";
import {ref, watch} from "vue";
import {appName} from "@/data";
import type {Recipe} from "@/models/Recipe";
import type {RecipeMetadata} from "@/models/RecipeMetadata";
import {supabase} from "@/lib/supabaseClient";

const localAuthKey = `${appName}-authCred`

export const useRecipeBookStore = defineStore('recipeBook', () => {

    const filteredCategories = ref<string[]>([]);
    const recipeSearchValue = ref<string>('');

    watch(recipeSearchValue, () => {
        console.log('recipeSearchValue: ', recipeSearchValue.value)
    })

    function setRecipeSearchValue() {
        recipeSearchValue.value = 'asdfasd'
    }

    async function insertRecipeMetadata(recipeMetadata: RecipeMetadata) {
        return supabase
            .from('recipeMetadata')
            .insert(recipeMetadata)
            .select()
    }

    async function insertRecipe(recipe: Recipe) {
        return  supabase
            .from('recipes')
            .insert(recipe)
            .select()
    }

    async function createRecipe(recipe: Recipe, recipeMetadata: RecipeMetadata){
        try {
            const recipeRes = await insertRecipe(recipe);

            if (recipeRes.data) {
                console.log("successfully created new recipe: ", recipeRes.data[0]);
            } else {
                console.warn('An error occurred while creating new recipe: ', recipeRes.error);
                return
            }

            recipeMetadata.recipeId = recipeRes.data[0]['id'];
            const metadataRes = await insertRecipeMetadata(recipeMetadata);

            if (metadataRes.data) {
                console.log("metadataRes SUCCESS: ", recipeRes.data);
                console.log('metadataRes ID: ', metadataRes.data[0]['id']);
            } else {
                console.warn('An error occurred while creating new recipe metadata: ', metadataRes.error);
            }

        } catch (e) {
            console.warn("An error occurred inserting the recipe: ", e)
        }
    }



    return {filteredCategories, recipeSearchValue, setRecipeSearchValue, insertRecipe, insertRecipeMetadata, createRecipe}
})
