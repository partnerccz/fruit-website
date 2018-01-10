<template>
  <div>
    <div class="box">
      <div class="item">
        <p>1</p>
      </div>
      <div class="item">
        <p>2</p>
      </div>
      <div class="item">
        <p>3</p>
      </div>
      <div class="item">
        <p>4</p>
      </div>
      <div class="item">
        <p>5</p>
      </div>
      <div class="item">
        <p>6</p>
      </div>
      <div class="item">
        <p>7</p>
      </div>
      <div class="item">
        <p>8</p>
      </div>
    </div>
    <!--div[style='background-color: #676767']>div[style='background-color: red']*8-->
  </div>
</template>

<script>
  import ElementUI from 'element-ui'

  export default {
    name: 'test',
    data () {
      return {}
    },
    methods: {},
    components: {
      ElementUI
    }
  }
</script>

<style scoped>

  .box {
    background-color: #676767;
    width: 800px;
    height: 400px;
    display: -webkit-flex; /* Safari */
    display: flex;
    /*flex-direction: row;*/
    /*flex-wrap: wrap;*/
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
  }

  .item {
    background-color: red;
    border: 2px solid #000;
    width: 180px;
    height: 150px;
  }

</style>
