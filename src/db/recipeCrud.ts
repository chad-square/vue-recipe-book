import type {RecipeMetadata} from "@/models/RecipeMetadata";
import type {Recipe} from "@/models/Recipe";

export interface RecipeCrud {


    selectRecipeMetadataByRecipeId(id: string | number): Promise<RecipeMetadata>
    selectAllRecipeMetadataByAuthor(author: string): Promise<RecipeMetadata[]>
    selectAllRecipeMetadata(): Promise<RecipeMetadata[]>
    insertRecipeMetadata(recipeMetadata: RecipeMetadata): Promise<any>
    insertRecipe(recipe: Recipe): Promise<any>

    /**
     * A combination of insertRecipe() and insertRecipeMetadata()
     */
    createRecipe(recipe: Recipe, recipeMetadata: RecipeMetadata): Promise<void>
}
