// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../src/assets/images/loading/find.png',
  loading: require('../src/assets/images/loading/loading.gif'),
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
})

Vue.config.productionTip = false
Vue.use(VueWechatTitle)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
