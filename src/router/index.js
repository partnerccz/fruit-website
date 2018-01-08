import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)
const Home = resolve => require(['./../components/Home.vue'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
