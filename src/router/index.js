import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../views/Dashboard/DashBoard.vue')
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import('../views/Homepage/Homepage.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/Detailpage/Detailpage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Loginpage.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register/Registerpage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
