import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

export default new VueLazyload({
  preLoad: 1, // 预加载高度的比例
  error: require('../assets/images/loading/loading.gif'),  // 图像的src加载失败
  loading: require('../assets/images/loading/loading.gif'), // src的图像加载
  attempt: 1,  // 尝试计数
  listenEvents: ['scroll', 'mousewheel'] // 你想要监听的事件,我个人喜欢全部监听，方便.滚动条和鼠标滚动都监听
})
