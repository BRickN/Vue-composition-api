import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore';
import { Routes } from './routes'

const NotesView = () => import('@/views/NotesView.vue')
const EditNoteView = () => import('@/views/EditNoteView.vue')
const StatsView = () => import('@/views/StatsView.vue')
const AuthView = () => import('@/views/AuthView.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: Routes.Notes,
    component: NotesView
  },
  {
    path: '/editnote/:id',
    name: Routes.EditNote,
    component: EditNoteView
  },
  {
    path: '/stats',
    name: Routes.Stats,
    component: StatsView
  },
  {
    path: '/auth',
    name: Routes.Auth,
    component: AuthView
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore();
  if (!authStore.user && to.name !== Routes.Auth) {
    return { name: Routes.Auth };
  }

  if (authStore.user && to.name === Routes.Auth) {
    return false;
  }
});

export default router
