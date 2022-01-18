import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Attractions from "@/views/attractions"
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/attractions',
    name: 'attractions',
    component: Attractions
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
