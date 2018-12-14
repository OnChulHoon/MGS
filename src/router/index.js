import Vue from 'vue'
import Router from 'vue-router'
import VueCarousel from '@chenfengyuan/vue-carousel'
import VueAgile from 'vue-agile'

import Home from '@/components/Home'
import SignUp from '@/components/account/SignUp'
import SignIn from '@/components/account/SignIn'
import SlideView1 from '@/components/testView/SlideView1'
import SlideView2 from '@/components/testView/SlideView2'

Vue.use(Router)
Vue.component(VueCarousel.name, VueCarousel)
Vue.use(VueAgile)

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
    },
    {
      path: '/account/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/test/slide-view1',
      name: 'SlideView1',
      component: SlideView1
    },
    {
      path: '/test/slide-view2',
      name: 'SlideView2',
      component: SlideView2
    }
  ]
})
