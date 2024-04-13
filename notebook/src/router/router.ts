import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { Routes } from './routes'

const NotesView = () => import('@/views/NotesView.vue')
const StatsView = () => import('@/views/StatsView.vue')

const routes: RouteRecordRaw[] = [
    {
      path: '/',
      name: Routes.Notes,
      component: NotesView
    },
    {
      path: '/stats',
      name: Routes.Stats,
      component: StatsView
    },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
