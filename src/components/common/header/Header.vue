<template>
  <div class="header_app_bar">
    <tr>
      <td>
        <router-link to="/"><p><img src="../../../assets/images/menu_icon.png" class="header_icon"/>&nbsp;嘻果首页</p>
        </router-link>
      </td>
      <td>
        <router-link to="/"><img src="../../../assets/images/logo.png" class="logo"/></router-link>
      </td>
      <td>
        <router-link to="/about"><p>关于我们</p></router-link>
      </td>
      <td>
        <router-link to="/product"><p>产品服务</p></router-link>
      </td>
    </tr>
  </div>

  <!--<div class="header_text">-->
  <!--<h1>text123456</h1>-->
  <!--</div>-->
</template>


<script>
  export default {
    name: 'header_app_bar'
  }
</script>

<style scoped lang="scss">
  .header_app_bar {
    clear: both;
    background-color: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 5;
    /*width: 80%;*/
    width:1263px;
    margin: 0 auto;
    tr {
      margin: 0px auto;
      width: 50%;
      display: flex;
      box-sizing: border-box;
      font-size: 20px;
      td {
        /*border: 1px solid #000;*/
        margin: 0px auto;
        /*flex: 1;*/
        a,router-link {
          text-decoration: none;
          color: #fcf5d7;
          p {
            text-align: center;
            vertical-align:middle;
          }
          .logo {
            margin-top: 12px;
            vertical-align:middle;
          }
          .header_icon {
            vertical-align: middle;
            margin-top: -3px;
          }
        }
      }
    }
  }
</style>
