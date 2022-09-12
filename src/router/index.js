import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '../views/Login/Login.vue'
import Home from '../views/Index/Index.vue'

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router