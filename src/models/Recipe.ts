import type {Ingredient} from "@/models/Ingredient";

export interface Recipe {
    id: number;
    ingredients: Ingredient[]
    cookingTime: string;
    instructions: string[]

}
