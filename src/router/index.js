import Vue from 'vue'
import Router from 'vue-router'
import IndexDerivative from '@/components/content/derivative/Index'
import Question1Derivative from '@/components/content/derivative/Question1'
import Informations from '@/components/main/Informations'
import HomePage from '@/components/main/HomePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/derivative',
      name: 'IndexDerivative',
      component: IndexDerivative
    },
    {
      path: '/derivativeq1',
      name: 'Question1Derivative',
      component: Question1Derivative
    },
    {
      path: '/informacoes',
      name: 'Informations',
      component: Informations
    }
  ]
})
