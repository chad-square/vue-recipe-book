// export interface RecipeMetadata {
//     id: number | undefined;
//     recipeId: number | undefined;
//     name: string;
//     author: string;
//     likes: [34, 27, 31, 8] | "[\"34\",\"27\",\"31\",\"8\"]";
//     thumbnailPath: string;
//     isPrivate: false;
//     categories: ["Dessert", "Side"] | "[\"Dessert\",\"Side\"]";
//     cookingTime: string;
// }



export interface RecipeMetadata {
    id: number | undefined;
    recipeId: number | undefined;
    name: string;
    author: string;
    likes: number[] | string;
    thumbnailPath: string;
    isPrivate: boolean;
    categories: string[];
    cookingTime: string;
}
