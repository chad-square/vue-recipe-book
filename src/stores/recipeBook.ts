import {defineStore} from "pinia";
import {ref, watch} from "vue";
import {appName} from "@/data";
import type {Recipe} from "@/models/Recipe";
import type {RecipeMetadata} from "@/models/RecipeMetadata";
import {supabase} from "@/lib/supabaseClient";
import {SupabaseRecipeCrud} from "@/db/SupabaseRecipeCrud";

const localAuthKey = `${appName}-authCred`

export const useRecipeBookStore = defineStore('recipeBook', () => {

    const filteredCategories = ref<string[]>([]);
    const recipeSearchValue = ref<string>('');
    const allRecipeMetadata = ref<RecipeMetadata[]>()

    const supabaseCrud = new SupabaseRecipeCrud()

    watch(recipeSearchValue, () => {
        console.log('recipeSearchValue: ', recipeSearchValue.value)
    })

    function setRecipeSearchValue() {
        recipeSearchValue.value = 'asdfasd'
    }

    async function selectRecipeMetadataByRecipeId(id: string | number) {

        if (!allRecipeMetadata.value || !allRecipeMetadata.value?.some(metadata => metadata.id === id)) {
            return await supabaseCrud.selectRecipeMetadataByRecipeId(id)
        }

        return allRecipeMetadata.value?.find(metadata => metadata.id === id)
    }

    async function selectAllRecipeMetadata() {

        if (!allRecipeMetadata.value) {
            allRecipeMetadata.value = await supabaseCrud.selectAllRecipeMetadata();
            return allRecipeMetadata.value;
        }

        return allRecipeMetadata.value;
    }

    async function insertRecipeMetadata(recipeMetadata: RecipeMetadata) {
        return supabaseCrud.insertRecipeMetadata(recipeMetadata);
    }

    async function insertRecipe(recipe: Recipe) {
        return supabaseCrud.insertRecipe(recipe)
    }

    async function createRecipe(recipe: Recipe, recipeMetadata: RecipeMetadata) {
        await supabaseCrud.createRecipe(recipe, recipeMetadata)
    }


    return {
        filteredCategories,
        recipeSearchValue,
        setRecipeSearchValue,
        insertRecipe,
        insertRecipeMetadata,
        createRecipe,
        selectRecipeMetadataByRecipeId,
        selectAllRecipeMetadata
    }
})
