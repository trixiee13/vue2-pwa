import Vue from 'vue'
import Router from 'vue-router'
import PwaDemo from '@/components/PwaDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PwaDemo',
      component: PwaDemo
    }
  ]
})
