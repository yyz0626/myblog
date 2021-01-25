import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Login from '../views/login.vue'
import blogDetail from '../views/blogDetail.vue'
import Regist from '../views/regist.vue'
import Publish from '../views/publish.vue'






Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/blog/detail/:blogId',
    name: 'blogDetail',
    component: blogDetail
  },
  {
    path: '/regist',
    name: 'Regist',
    component: Regist
  },
  {
    path: '/publish',
    name: 'Publish',
    component: Publish
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
