import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupComponent from "@/components/auth/SignupComponent.vue";
import SignInComponent from "@/components/auth/SignInComponent.vue";
import {useAuthStore} from "@/stores/auth";
import AboutView from "@/views/AboutView.vue";
import RecipeList from "@/components/cook-book/recipes/RecipeList.vue";

const isLoggedInGuard = function() {
  return () => {
    const loggedIn = useAuthStore().checkLoggedIn();
    if (loggedIn) return true
    if (!loggedIn) return {name: 'sign-in'}
  }
}

const isLoggedAndRedirect = function() {
  return () => {
    const loggedIn = useAuthStore().checkLoggedIn();
    if (loggedIn) return {name: 'recipes'}
    if (!loggedIn) return {name: 'home'}
  }
}



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/recipes',
      beforeEnter: isLoggedAndRedirect(),
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'signup',
          component: SignupComponent,
        },
        {
          path: '/signup',
          name: 'signup',
          component: SignupComponent,
        },
        {
          path: '/sign-in',
          name: 'sign-in',
          component: SignInComponent,
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/recipes',
      name: 'recipes',
      // lazy-loaded route when visited.
      // component: () => import('../views/RecipesView.vue'),
      beforeEnter: isLoggedInGuard(),
      children: [
        {
          path: '/recipes',
          name: 'recipeList',
          component: RecipeList
        },
        {
          path: '/',
          redirect: '/recipes'
        },
      ]
    }
  ]
})



export default router
