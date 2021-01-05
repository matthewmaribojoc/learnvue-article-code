import { createRouter, createWebHistory } from 'vue-router'
import VueTransitionAnimation from '../components/vue-transition-animation/VueTransitionAnimation.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: VueTransitionAnimation
    },
  ]
})

export default router