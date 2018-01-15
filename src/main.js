// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueWechatTitle from 'vue-wechat-title'

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516026883956&di=3b9d303567c254f3780d05a2eae5ae0d&imgtype=0&src=http%3A%2F%2Fico.ooopic.com%2Ficonset02%2Fivista%2Fgif%2F27563.gif',
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
