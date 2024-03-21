export interface RecipeMetadata {
    id: number
    recipeId: number;
    name: string;
    author: string;
    likes: number;
    thumbnailPath: string;
    private: boolean;
    categories: string[]
}
