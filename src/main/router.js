import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('../page/index.vue')

Vue.use(Router)

const routes = [
  {
    name: 'index',
    path: '/',
    component: Index
  }
]

export default new Router({ routes })
