import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    component:() => import('../views/Main.vue'),
    // redirect:'/user',
    children:[
    ]
  },
  {
    path:'/login',
    name:'login',
    component:() => import('../views/login/login.vue')
  },
  {
    path:'/register',
    name:'register',
    component:() => import('../views/register/register.vue')
  }
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue')
  // },
  // {
  //   path: '/Mycontent',
  //   name: 'MyContent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/content/Mycontent.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes
})

export default router
