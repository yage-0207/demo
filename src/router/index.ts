import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: Index
    // }
  ]
})

export default router
