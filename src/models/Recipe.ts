import type {Ingredient} from "@/models/Ingredient";

export interface Recipe {
    id: number | undefined;
    userId: string | undefined;
    ingredients: Ingredient[] | string;
    instructions: string[] | string;
    additionalComments: string[] | string;
}
