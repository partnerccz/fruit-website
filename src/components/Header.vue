<template>
  <div>
  <div class="slider">
    <el-carousel height="400px">
      <el-carousel-item >
        <img src="../assets/images/title1.jpg"/>
      </el-carousel-item>
      <el-carousel-item >
        <img src="../assets/images/title2.jpg"/>
      </el-carousel-item>
      <el-carousel-item >
        <img src="../assets/images/title3.jpg"/>
      </el-carousel-item>
      <el-carousel-item >
        <img src="../assets/images/title4.jpg"/>
      </el-carousel-item>
      <el-carousel-item >
        <img src="../assets/images/title5.jpg"/>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="nav-menu" style="background-color: rgba(0,0,0,.3);height: 50px;position:absolute;top:0px;left:0px;z-index: 1000;width: 100%;">
    <ul style="width:50%;display: flex;box-sizing: border-box;flex-direction: row;list-style-type: none;font-size:18px;margin:0px auto;line-height: 50px;">
      <li style="flex:1;"><a href="#" style="color:#fcf5d7;">嘻果首页</a></li>
      <li style="flex:1;"><a href="#" style="color:#fcf5d7;">嘻果</a></li>
      <li style="flex:1;"><a href="#" style="color:#fcf5d7;">关于我们</a></li>
      <li style="flex:1;"><a href="#" style="color:#fcf5d7;">产品服务</a></li>
    </ul>
  </div>
  </div>
</template>


<script>
  import Vue from 'vue'
  import ElCarousel from 'element-ui/packages/carousel/src/main'
  import ElCarouselItem from 'element-ui/packages/carousel/src/item'
  import 'element-ui/lib/theme-chalk/index.css'
  import ElementUI from 'element-ui'
  import ElInput from 'element-ui/packages/input/src/input'
  import Header from './Header'

  Vue.use(ElementUI)
  export default {
    name: 'header',
    components: {
      ElInput,
      ElCarouselItem,
      ElCarousel,
      Header
    },
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
</style>
