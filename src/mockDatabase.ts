import type {RecipeMetadata} from "@/models/RecipeMetadata";

export const recipeCategoryOptions = ['Breakfast', 'Lunch', 'Dinner', 'Light', 'Main', 'Side', 'Snack', 'Dessert', 'Baked']

export const dummyRecipeMetadata: RecipeMetadata[] = [
    {
        author: "chadajsquare@gmail.com",
        id: 0,
        likes: 3,
        name: "Bacon and Eggs",
        private: false,
        recipeId: 0,
        thumbnailPath: "/blah/blah/img.png",
        categories: ['Breakfast', 'Main']
    },
    {
        author: "chadajsquare@gmail.com",
        id: 1,
        likes: 5,
        name: "Toasted Cheese",
        private: false,
        recipeId: 1,
        thumbnailPath: "/blah/blah/img.png",
        categories: ['Light', 'Lunch', 'Dinner', 'Main']
    },
    {
        author: "chadajsquare@gmail.com",
        id: 2,
        likes: 9,
        name: "Chicken salad",
        private: false,
        recipeId: 2,
        thumbnailPath: "/blah/blah/img.png",
        categories: ['Main', 'Lunch', 'Dinner']
    },
    {
        author: "dave@gmail.com",
        id: 3,
        likes: 13,
        name: "Roast Chicken",
        private: false,
        recipeId: 3,
        thumbnailPath: "/blah/blah/img.png",
        categories: ['Lunch', 'Dinner', 'Main']
    },
    {
        author: "dave@gmail.com",
        id: 4,
        likes: 10,
        name: "Rusks",
        private: false,
        recipeId: 4,
        thumbnailPath: "/blah/blah/img.png",
        categories: ['Baked', 'Snack']
    },
    {
        author: "sarah@gmail.com",
        id: 5,
        likes: 10,
        name: "Chocolate Cake",
        private: false,
        recipeId: 5,
        thumbnailPath: "/blah/blah/img.png",
        categories: ['Dessert', 'Baked']
    },
]
