<template>
  <div id="app">
    <Header></Header>
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './components/common/footer/Footer'
  import Header from './components/common/header/Header.vue'

  export default {
    name: 'app',
    components: {
      Footer,
      Header
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0px;
  }
</style>
