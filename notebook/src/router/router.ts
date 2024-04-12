import { createRouter, createWebHashHistory } from 'vue-router'
import { Routes } from './routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: Routes.Home,
    //   component: HomeView
    // },
  ]
})

export default router
