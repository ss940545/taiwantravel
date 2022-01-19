import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Attractions from "@/views/attractions"
import Activity from "@/views/activity"
import Restaurant from "@/views/restaurant"

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
  {
    path: '/activity',
    name: 'activity',
    component: Activity
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: Restaurant
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
