import type {RecipeMetadata} from "@/models/RecipeMetadata";

export const recipeCategoryOptions = ['Breakfast', 'Lunch', 'Dinner', 'Light', 'Main', 'Side', 'Snack', 'Dessert', 'Baked']

export const dummyRecipeMetadata: RecipeMetadata[] = [
    {
        author: "chadajsquare@gmail.com",
        id: 0,
        likes: [1],
        name: "Bacon and Eggs",
        private: false,
        recipeId: 0,
        thumbnailPath: "/generic-food-img.png",
        categories: ['Breakfast', 'Main'],
        cookingTime: '30 minutes'
    },
    {
        author: "chadajsquare@gmail.com",
        id: 1,
        likes: [],
        name: "Toasted Cheese",
        private: false,
        recipeId: 1,
        thumbnailPath: "/generic-food-img.png",
        categories: ['Light', 'Lunch', 'Dinner', 'Main'],
        cookingTime: '20 minutes'
    },
    {
        author: "chadajsquare@gmail.com",
        id: 2,
        likes: [],
        name: "Chicken salad",
        private: false,
        recipeId: 2,
        thumbnailPath: "/generic-food-img.png",
        categories: ['Main', 'Lunch', 'Dinner'],
        cookingTime: '1 hour'
    },
    {
        author: "dave@gmail.com",
        id: 3,
        likes: [1, 2],
        name: "Roast Chicken",
        private: false,
        recipeId: 3,
        thumbnailPath: "/generic-food-img.png",
        categories: ['Lunch', 'Dinner', 'Main'],
        cookingTime: '2 hours'
    },
    {
        author: "dave@gmail.com",
        id: 4,
        likes: [2],
        name: "Rusks",
        private: false,
        recipeId: 4,
        thumbnailPath: "/generic-food-img.png",
        categories: ['Baked', 'Snack'],
        cookingTime: '5 hours'
    },
    {
        author: "sarah@gmail.com",
        id: 5,
        likes: [2],
        name: "Chocolate Cake",
        private: false,
        recipeId: 5,
        thumbnailPath: "/generic-food-img.png",
        categories: ['Dessert', 'Baked'],
        cookingTime: '2 hours'
    },
    {
        author: "test@gmail.com",
        id: 6,
        likes: [2],
        name: "Blah Blah huh",
        private: false,
        recipeId: 6,
        thumbnailPath: "/generic-food-img.png",
        categories: ['Dessert', 'Baked','deij','iuyowe','asdwq','mklmoef','deij','iuyowe','asdwq','mklmoef'],
        cookingTime: '2 hours'
    },
]
