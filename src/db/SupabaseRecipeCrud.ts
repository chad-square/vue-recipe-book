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
            .upsert(recipe, {ignoreDuplicates: false})
            .select()
    }

    async insertRecipeMetadata(recipeMetadata: RecipeMetadata): Promise<any> {
        return supabase
            .from('recipeMetadata')
            .upsert(recipeMetadata, {ignoreDuplicates: false})
            .select()
    }

    async selectAllRecipeMetadata(): Promise<RecipeMetadata[]> {
        console.log('retrieving AllRecipeMetadata from db...')
        const res = await supabase.from('recipeMetadata').select()

        if (res.error) {
            console.warn('an error occurred retrieving the recipeMetadata: ', res.error)
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
            console.warn('an error occurred retrieving the recipeMetadata: ', res.error)
            throw res.error;
        }

        return {... res.data[0], likes: JSON.parse(res.data[0]['likes']), categories: JSON.parse(res.data[0]['categories'])} as RecipeMetadata;
    }

    async selectAllRecipeMetadataByAuthor(author: string): Promise<RecipeMetadata[]> {
        console.log('retrieving RecipeMetadata from db...')
        const res = await supabase.from('recipeMetadata').select("*").eq('author', author)

        if (res.error) {
            console.warn(`an error occurred retrieving the recipeMetadata for author ${author}: ${res.error}`)
            throw res.error;
        }

        return res.data.map(metadata => {
            return {
                ...metadata,
                likes: JSON.parse(metadata['likes']),
                categories: JSON.parse(res.data[0]['categories'])
            } as RecipeMetadata
        })

        // return {... res.data[0], likes: JSON.parse(res.data[0]['likes']), categories: JSON.parse(res.data[0]['categories'])} as RecipeMetadata;
    }

    async selectAllRecipes(): Promise<Recipe[]> {
        console.log('retrieving all recipes from db...')
        const res = await supabase.from('recipes').select()

        if (res.error) {
            console.warn('an error occurred retrieving the recipes: ', res.error)
            return [];
        }

        return res.data.map(metadata => {
            return {
                ...metadata,
                ingredients: JSON.parse(metadata['ingredients']),
                instructions: JSON.parse(res.data[0]['instructions'])
            } as Recipe
        })

    }


    async selectRecipeById(id: string | number): Promise<Recipe> {
        console.log('retrieving recipe by ID from db...')
        const res = await supabase.from('recipes').select("*").eq('id', id)

        if (res.error) {
            console.warn('an error occurred retrieving the recipe: ', res.error)
            throw res.error;
        }

        return {
            ... res.data[0],
            ingredients: JSON.parse(res.data[0]['ingredients']),
            instructions: JSON.parse(res.data[0]['instructions'])
        } as Recipe;
    }





}
