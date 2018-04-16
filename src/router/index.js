import Vue from 'vue'
import Router from 'vue-router'
import LoginRegistro from '@/components/LoginRegistro'
import Principal from '@/components/Principal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Principal',
      component: Principal
    },
    {
      path: '/Login',
      name: 'LoginRegistro',
      component: LoginRegistro
    }
  ]
})
