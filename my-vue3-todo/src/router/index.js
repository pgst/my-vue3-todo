import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '@/views/AboutPage.vue'
import MainTodo from '@/views/MainTodo.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'top',
      component: MainTodo
    },
    {
      path: '/mainTodo',
      name: 'mainTodo',
      component: MainTodo
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
})

export default router
