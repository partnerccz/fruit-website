import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['./../components/Home.vue'], resolve)
const About = resolve => require(['../components/About.vue'], resolve)
const Product = resolve => require(['../components/Product.vue'], resolve)

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: '指猴互联网科技有限公司'
      }
    }, {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: '关于我们'
      }
    }, {
      path: '/product',
      name: 'Product',
      component: Product,
      meta: {
        title: '产品服务'
      }
    }
  ]
})
