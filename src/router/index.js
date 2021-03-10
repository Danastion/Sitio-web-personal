import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/conversemos',
    name: 'Conversemos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Conversemos.vue')
  }, 
  {
    path: '/habilidades',
    name: 'Habilidades',
    component: () => import(/* webpackChunkName: "about" */ '../views/Habilidades.vue')
  } ,
  {
    path: '/experiencia',
    name: 'Experiencia',
    component: () => import(/* webpackChunkName: "about" */ '../views/Experiencia.vue')
  }, 
  {
    path: '/experiencia_b',
    name: 'Experiencia_b',
    component: () => import(/* webpackChunkName: "about" */ '../views/Experiencia_b.vue')
  }, 
  {
    path: '/educacion',
    name: 'Educacion',
    component: () => import(/* webpackChunkName: "about" */ '../views/Educacion.vue')
  }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
