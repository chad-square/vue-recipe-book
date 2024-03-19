import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupComponent from "@/components/auth/SignupComponent.vue";
import SignInComponent from "@/components/auth/SignInComponent.vue";
import {useAuthStore} from "@/stores/auth";
import AboutView from "@/views/AboutView.vue";

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
    if (loggedIn) return {name: 'main'}
    if (!loggedIn) return true
  }
}



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: isLoggedAndRedirect(),
      children: [
        {
          path: '/',
          name: 'signup',
          component: SignupComponent,
        },
        {
          path: '/signup',
          redirect: '/'
        },
        {
          path: '/sign-in',
          name: 'sign-in',
          component: SignInComponent,
        },
      ]
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/book',
      name: 'main',
      // lazy-loaded route when visited.
      component: () => import('../views/MainView.vue'),
      beforeEnter: isLoggedInGuard()
    }
  ]
})



export default router
