import router from "@/router/index";

export class RouterService {



    navigateToSignIn() {
        return router.push('/sign-in')
    }

    navigateToRecipes() {
        return router.push('/recipes')
    }

    navigateToMyRecipes() {
        return router.push('/my-recipes')
    }

    navigateToCreateRecipe() {
        return router.push('/create')
    }



}
