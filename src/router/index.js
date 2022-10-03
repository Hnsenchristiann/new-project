import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('../views/Homepage.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detailpage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
