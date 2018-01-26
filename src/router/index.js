import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Goodsdetail from '@/views/goodsdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
    	path:'/goodsdetail',
    	name:'goodsdetail',
    	component:Goodsdetail
    }
    
    
  ]
})
