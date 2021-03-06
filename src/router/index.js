import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import template from '@/page/template'
import business from '@/page/business'
import document from '@/page/document'
import about from '@/page/about'
import contact from '@/page/contact'
import join from '@/page/join'
import detail from '@/page/detail'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component:index
    },
    {
      path:'/template',
      component:template,
      children:[
        {
          path:'detail/:id',
          component:detail
        }
      ]
    },
    {
      path:'/business',
      component:business
    },
    {
      path:'/document',
      component:document
    },
    {
      path:'/about',
      component:about
    },
    {
      path:'/contact',
      component:contact
    },
    {
      path:'/join',
      component:join
    },
    /* {
      path:'/detail/:id',
      component:detail
    } */
  ]
})
