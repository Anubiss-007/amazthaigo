// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Forgot from './components/Forgot.vue'
import Verifycode from './components/Verifycode.vue'
import Setpassword from './components/Setpassword.vue'
import Landingpage from './components/Landingpage.vue'

const routes = [
  {
    path: '/',
    name: 'Landingpage',
    component: Landingpage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/verifycode',
    name: 'Verifycode',
    component: Verifycode
  },
    {
    path: '/setpassword',
    name: 'Setpassword',
    component: Setpassword
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router