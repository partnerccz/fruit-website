<template>
  <div class="Slideshow">
    <!--slider-->
    <div class="slider">
      <el-carousel height="650px">
        <el-carousel-item>
          <img src="../../../assets/images/slider1.jpg" width="100%" height="100%"/>
          <div
            style="position: absolute;left:40%;top:430px;z-index: 10000;font-size:28px;color:#ffffff;letter-spacing: 5px;">
            <span
              style="display: block;border-top:1px solid #ffffff;border-bottom: 1px solid #ffffff;padding: 5px 25px;margin-bottom:20px;line-height: 34px; ">与合作伙伴写作共赢</span>
            <img src="../../../assets/images/m01.png"/>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../../assets/images/slider2.jpg" width="100%" height="100%"/>
          <div
            style="position: absolute;left:50%;top:430px;z-index: 10000;font-size:22px;color:#ffffff;letter-spacing: 5px;margin-left:-250px;">
          <span
            style="display: block;border-top:1px solid #ffffff;border-bottom: 1px solid #ffffff;padding: 5px 25px;margin-bottom:20px;line-height: 34px;">
            <span style="display: block">整合全球优质资源，构建高效供应链，</span>

            <span style="display: block">推动现代农业的发展，实现产业报国。</span>
          </span>
            <img src="../../../assets/images/m01.png"/>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
  import ElementUI from 'element-ui'
  import Vue from 'vue'

  Vue.use(ElementUI)

  export default {
    name: 'slideshow',
    components: {
      ElementUI
    }
  }
</script>

<style scoped>

</style>
