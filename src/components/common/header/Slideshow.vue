<template>
  <div class="Slideshow">
    <!--slider-->
    <div class="slider">
      <el-carousel height="560px">
        <el-carousel-item>
          <img src="../../../assets/images/mainImg/reader1-1.jpg" width="100%"/>
          <div class="showStr">
            <span class="str">与合作伙伴携手共赢</span>
            <img class="str_img" src="../../../assets/images/m01.png"/>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <img src="../../../assets/images/mainImg/reader2-2.jpg" width="100%"/>
          <div class="showStr2">
            <div class="str2">
              <span style="display: block">整合全球优质资源，构建高效供应链，</span>
              <span style="display: block">推动现代农业的发展，实现产业报国。</span>
            </div>
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
  import 'element-ui/lib/theme-chalk/index.css'

  Vue.use(ElementUI)

  export default {
    name: 'slideshow',
    components: {
      ElementUI
    }
  }
</script>

<style scoped lang="scss">
  .Slideshow {
    .slider {
      .showStr {
        position: absolute;
        left: 50%;
        top: 380px;
        margin-left:-173px;
        z-index: 10000;
        font-size: 28px;
        color: #ffffff;
        letter-spacing: 5px;
        .str {
          display: block;
          border-top: 1px solid #ffffff;
          border-bottom: 1px solid #ffffff;
          padding: 5px 25px;
          margin-bottom: 20px;
          line-height: 34px;
        }
        .str_img {

        }
      }
      .showStr2 {
        position: absolute;
        left: 50%;
        top: 30px;
        z-index: 10000;
        font-size: 22px;
        color: #ffffff;
        letter-spacing: 5px;
        margin-left: -250px;
        .str2 {
          display: block;
          border-top: 1px solid #ffffff;
          border-bottom: 1px solid #ffffff;
          padding: 5px 25px;
          margin-bottom: 20px;
          line-height: 34px;
        }
      }
    }
  }


</style>
