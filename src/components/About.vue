<template>
  <div class="fruit-display">
    <Headers></Headers>
    <img class="show_img" src="../assets/images/ad_01.jpg"/>
    <Search></Search>

    <div class="text_conten">
      <div class="text_itme">
        <h2>企业口号</h2>
        <p>科技牵手水果改变命运</p>
      </div>
      <div class="text_itme">
        <h2>企业愿景</h2>
        <p>成为客户最可靠的合作伙伴</p>
      </div>
      <div class="text_itme">
        <h2>企业使命</h2>
        <p>使用互联网技术改造我们的供应链服务,让水果经营更高效</p>
      </div>
      <div class="text_itme">
        <h2>企业精神</h2>
        <p>高效的运营,放心的服务</p>
      </div>
      <div class="text_itme">
        <h2>核心价值观</h2>
        <p>团结一致,奋发向上,礼节谦让,适应形势,感谢报恩</p>
      </div>
      <div class="text_itme">
        <h2>服务理念</h2>
        <p>诚信友善,务实高效<br/>
          在没有标准产品和服务的水果行业里,我们用心提供优质服务,运用互联网技术和行业知识,为提升用户竞争力做各种努力,并坚信科技牵手果业一定可以改变未来
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from './common/header/Search'

  export default {
    name: 'fruit-display',
    data: function () {
      return {}
    },
    components: {
      Search
    }
  }
</script>

<style scoped lang="scss">
  .fruit-display {
    margin: 0px auto;
    width: 80%;

    .show_img {
      width: 100%;
    }

    .text_conten {
      text-align: left;
      line-height: 30px;
      margin-left: 50px;
    }

    .text_itme {
      margin-bottom: 50px;
    }

    .end_str {
      border-left: 2px solid #66a812;
      padding-left: 10px;
    }
  }

</style>
