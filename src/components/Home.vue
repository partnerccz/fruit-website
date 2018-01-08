<template>
<div class="home" style="margin:0px;">
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
    <ul style="width:50%;display: flex;box-sizing: border-box;flex-direction: row;list-style-type: none;font-size:14px;margin:0px auto;line-height: 50px;">
      <li style="flex:1;"><a href="#" style="color:#fcf5d7;text-underline: none;">嘻果首页</a></li>
      <li style="flex:1;"><a href="#" style="color:#fcf5d7;text-underline: none;">嘻果</a></li>
      <li style="flex:1;"><a href="#" style="color:#fcf5d7;text-underline: none;">关于我们</a></li>
      <li style="flex:1;"><a href="#" style="color:#fcf5d7;text-underline: none;">产品服务</a></li>
    </ul>
  </div>
  <div style="clear: both;display: flex;flex-direction: row;height: 45px;line-height: 50px;border-bottom:1px solid #eaeaea;">
    <div style="font-size:9px;color:#8f8f8f;flex:1;">热门关键字 有机水果 有机水果配送 水果配送加盟 有机水果供应商</div>
    <div style="flex:1;">
      <input class="search-input" spaceholder="" style="height: 16px;background-color: #d3d3d3;border:1px solid #d3d3d3;"/>
      <button class="search-btn" style="background-color: #fc9902;color:white;border:1px solid #fc9902;">搜索</button>
    </div>
  </div>

  <div class="content" style="background-color:deepskyblue;height:800px;width:100%;">
    <div class="about-us">
      <div></div>
      <div></div>
      <div> </div>
    </div>
  </div>

  <bottom></bottom>
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
  import Bottom from './Bottom'

  Vue.use(ElementUI)
  export default {
    name: 'home',
    components: {
      ElInput,
      ElCarouselItem,
      ElCarousel,
      Header,
      Bottom
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
.search-input:hover{
  border:1px solid #d3d3d3;
  border:0px;
}
.search-btn:hover{
  border:1px solid #fc9902;
}
/*  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }*/
</style>
