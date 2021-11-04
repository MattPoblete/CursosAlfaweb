import Vue from 'vue'
import VueRouter from 'vue-router'
import Firebase from 'firebase/compat/app'

import Login from '../views/Login.vue'

const Home = ()=>import('../views/Home.vue')
const Register = ()=> import('../views/Register.vue')
const Administracion = ()=> import('../views/Administracion.vue')
const Editar = ()=> import('../views/Editar.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      login: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/administracion',
    name: 'administracion',
    component: Administracion,
    meta:{
      login: true
    }
  },
  {
    path: '/editar/:id',
    name: 'editar',
    component: Editar,
    props: true,
    meta:{
      login: true
    }
  },
  {
    path: '/*',
    redirect: '/login'
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach(async(to, from, next) => {
  const user = Firebase.auth().currentUser
  let authRequired = to.matched.some(route => route.meta.login);
  if (!user && authRequired) {
  next('login');
  } 
  else {
  next();
  }
})

export default router
