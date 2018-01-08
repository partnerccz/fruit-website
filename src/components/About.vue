<template>
  <div class="fruit-display">
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
        <p>诚信友善,务实高效</p>
      </div>
    </div>
    <h2 style="width: 70%;margin:0 auto">
      ————在没有标准产品和服务的水果行业里,我们用心提供优质服务,运用互联网技术和行业知识,为提升用户竞争力做各种努力,并坚信科技牵手果业一定可以改变未来</h2>
    <bottom></bottom>
  </div>
</template>

<script>
  import Bottom from './Bottom'

  export default {
    name: 'fruit-display',
    data: function () {
      return {
        Bottom
      }
    },
    components: {}
  }
</script>

<style scoped>
  .text_conten {
    text-align: center;
    line-height: 30px;
  }

  .text_itme {
    margin-bottom: 50px;
  }
</style>
