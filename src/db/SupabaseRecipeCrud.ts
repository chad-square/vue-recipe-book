import type {RecipeCrud} from "@/db/recipeCrud";
import type {RecipeMetadata} from "@/models/RecipeMetadata";
import {supabase} from "@/lib/supabaseClient";
import type {Recipe} from "@/models/Recipe";

export class SupabaseRecipeCrud implements RecipeCrud {

    async createRecipe(recipe: Recipe, recipeMetadata: RecipeMetadata){
        try {
            const recipeRes = await this.insertRecipe(recipe);

            if (recipeRes.data) {
                console.log("successfully created new recipe: ", recipeRes.data[0]);
            } else {
                console.warn('An error occurred while creating new recipe: ', recipeRes.error);
                return
            }

            recipeMetadata.recipeId = recipeRes.data[0]['id'];
            const metadataRes = await this.insertRecipeMetadata(recipeMetadata);

            if (metadataRes.data) {
                console.log("metadataRes SUCCESS: ", recipeRes.data);
                console.log('metadataRes ID: ', metadataRes.data[0]['id']);
            } else {
                console.warn('An error occurred while creating new recipe metadata: ', metadataRes.error);
            }

        } catch (e) {
            console.warn("An error occurred inserting the recipe: ", e)
            throw e;
        }
    }

    async insertRecipe(recipe: Recipe): Promise<any> {
        return supabase
            .from('recipes')
            .insert(recipe)
            .select()
    }

    async insertRecipeMetadata(recipeMetadata: RecipeMetadata): Promise<any> {
        return supabase
            .from('recipeMetadata')
            .insert(recipeMetadata)
            .select()
    }

    async selectAllRecipeMetadata(): Promise<RecipeMetadata[]> {
        console.log('retrieving AllRecipeMetadata from db...')
        const res = await supabase.from('recipeMetadata').select()

        if (res.error) {
            console.log('no metadata found')
            return [];
        }

        return res.data.map(metadata => {
           return {
               ...metadata,
               likes: JSON.parse(metadata['likes']),
               categories: JSON.parse(res.data[0]['categories'])
           } as RecipeMetadata
        })

    }

    async selectRecipeMetadataByRecipeId(id: string | number): Promise<RecipeMetadata> {
        console.log('retrieving RecipeMetadata from db...')
        const res = await supabase.from('recipeMetadata').select("*").eq('recipeId', id)

        if (res.error) {
            console.warn('no metadata found')
            throw res.error;
        }

        return {... res.data[0], likes: JSON.parse(res.data[0]['likes']), categories: JSON.parse(res.data[0]['categories'])} as RecipeMetadata;
    }






}
