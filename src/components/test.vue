<template>
  <div ref="container">
    <ul>
      <li v-for="item in imgUrl">
        <img v-lazy="item.src" alt="" width="300" height="150"/>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data: function () {
      return {
        imgUrl: [
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')},
          {src: require('../assets/images/product/import/越南红心火龙果-z.jpg')}
        ]
      }
    },
    methods: {},
    components: {
    }
  }
</script>

<style scoped>
  img[lazy=loading]{
  /*your code*/
  }
  img[lazy=loaded]{
  /* your code*/
  animation:fade 0.5s;
  }
  @keyframes fade {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
</style>
