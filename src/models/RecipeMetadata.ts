export interface RecipeMetadata {
    id: number | undefined
    recipeId: number | undefined;
    name: string;
    author: string;
    likes: number[] | string;
    thumbnailPath: string;
    isPrivate: boolean;
    categories: string[] | string;
    cookingTime: string;
}
