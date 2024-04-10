import { createRouter, createWebHistory } from 'vue-router'
import { Routes } from './Routes'

const HomeView = () => import('@/views/HomeView.vue')
const PostsView = () => import('@/views/PostsView.vue')
const PostDetailView = () => import('@/views/PostDetailView.vue')
const ModalsView = () => import('@/views/ModalsView.vue')
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: Routes.Home,
      component: HomeView
    },
    {
      path: '/posts',
      name: Routes.Posts,
      component: PostsView
    },
    {
      path: '/posts/:id',
      name: Routes.PostDetail,
      component: PostDetailView
    },
    {
      path: '/modals',
      name: Routes.Modals,
      component: ModalsView
    }
  ]
})

export default router
