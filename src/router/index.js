import { createRouter, createWebHistory } from '@ionic/vue-router';
import ListPage from '../pages/ListPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/list'
  },
  {
    path: '/list',
    component: ListPage
  },
  {
    path: '/list/:id',
    component: () => import ('../pages/ListDetailPage.vue')
  },
  {
    path: '/test/add',
    component: () => import ('../pages/AddLanguagePage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
