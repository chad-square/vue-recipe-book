import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupComponent from "@/components/auth/SignupComponent.vue";
import SignInComponent from "@/components/auth/SignInComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/book',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MainView.vue'),
    }
  ]
})

export default router
