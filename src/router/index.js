import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import SignUp from '@/components/account/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/account/sign-up',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
