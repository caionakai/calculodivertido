import Vue from 'vue'
import Router from 'vue-router'
import IndexDerivative from '@/components/content/derivative/Index'
import Question1Derivative from '@/components/content/derivative/Question1'
import Question2Derivative from '@/components/content/derivative/Question2'
import Question3Derivative from '@/components/content/derivative/Question3'
import Question4Derivative from '@/components/content/derivative/Question4'
import Question5Derivative from '@/components/content/derivative/Question5'
import Question6Derivative from '@/components/content/derivative/Question6'

import IndexIntegral from '@/components/content/integral/index'
import Question1Integral from '@/components/content/integral/Question1'
import Question2Integral from '@/components/content/integral/Question2'
import Question3Integral from '@/components/content/integral/Question3'

import Informations from '@/components/main/Informations'
import HomePage from '@/components/main/HomePage'

import Simulations from '@/components/content/simulations/index'
import GenericSimulationComponent from '@/components/content/simulations/generic_component_simulation'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/simulacoes',
      name: 'Simulations',
      component: Simulations
    },
    {
      path: '/simulationggb/:titulo',
      name: 'GenericSimulationComponent',
      component: GenericSimulationComponent
    },
    {
      path: '/derivative',
      name: 'IndexDerivative',
      component: IndexDerivative
    },
    {
      path: '/integralq1',
      name: 'Question1Integral',
      component: Question1Integral
    },
    {
      path: '/integralq2',
      name: 'Question2Integral',
      component: Question2Integral
    },
    {
      path: '/integralq3',
      name: 'Question3Integral',
      component: Question3Integral
    },
    {
      path: '/derivativeq1',
      name: 'Question1Derivative',
      component: Question1Derivative
    },
    {
      path: '/derivativeq2',
      name: 'Question2Derivative',
      component: Question2Derivative
    },
    {
      path: '/derivativeq3',
      name: 'Question3Derivative',
      component: Question3Derivative
    },
    {
      path: '/derivativeq4',
      name: 'Question4Derivative',
      component: Question4Derivative
    },
    {
      path: '/derivativeq5',
      name: 'Question5Derivative',
      component: Question5Derivative
    },
    {
      path: '/derivativeq6',
      name: 'Question6Derivative',
      component: Question6Derivative
    },
    {
      path: '/integral',
      name: 'IndexIntegral',
      component: IndexIntegral
    },
    {
      path: '/informacoes',
      name: 'Informations',
      component: Informations
    }
  ]
})
