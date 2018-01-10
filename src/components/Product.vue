<template>
  <div class="product">
    <Slideshow></Slideshow>
    <!--<img src="../assets/images/ad_01.jpg" class="show_img"/>-->
    <Search></Search>
    <div class="display_fruit">
      <div v-for="(fruitsClass, index) in fruitsSetting">
        <h2 class="fruit_title">{{fruitsClass.title}}</h2>
        <table class="tableClass">
          <div v-for="(fruitsTr, index) in fruitsClass.fruits">
            <tr>
              <td class="truit_item" v-for="(fruitsTd, index) in fruitsTr">
                <img class="fruit_img" :key="index" :src="fruitsTd.img_url" alt="">
                <h3 class="fruit_name_str" v-text="fruitsTd.fruits_name"></h3>
              </td>
            </tr>
          </div>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from './common/header/Search'
  import Slideshow from './common/header/Slideshow'

  export default {
    name: 'product',
    components: {
      Search,
      Slideshow
    },
    data: function () {
      return {
        fruitsSetting: [
          {
            title: '进口水果',
            fruits: [
              [
                {
                  img_url: require('../assets/images/ProductShowImg/import/智利车厘子.jpg'),
                  fruits_name: '智利车厘子'
                },
                {
                  img_url: require('../assets/images/ProductShowImg/import/越南红心火龙果.jpg'),
                  fruits_name: '越南红心火龙果'
                },
                {
                  img_url: require('../assets/images/ProductShowImg/import/印尼山竹.jpg'),
                  fruits_name: '印尼山竹'
                },
                {
                  img_url: require('../assets/images/ProductShowImg/import/干尧.jpg'),
                  fruits_name: '越南干尧榴莲'
                }
              ],
              [
                {
                  img_url: require('../assets/images/ProductShowImg/import/进口蓝莓.jpg'),
                  fruits_name: '进口蓝莓'
                },
                {
                  img_url: require('../assets/images/ProductShowImg/import/哥伦比亚燕窝果.jpg'),
                  fruits_name: '哥伦比亚燕窝果'
                },
                {
                  img_url: require('../assets/images/ProductShowImg/import/台湾高端柠檬.jpg'),
                  fruits_name: '进口柠檬'
                },
                {
                  img_url: require('../assets/images/ProductShowImg/import/草莓.jpg'),
                  fruits_name: '进口草莓'
                }
              ]
            ]
          },
          {
            title: '国内精品水果',
            fruits: [
              [
                {
                  img_url: require('../assets/images/ProductShowImg/domestic/齐峰翠香猕猴桃.jpg'),
                  fruits_name: '齐峰翠香猕猴桃'
                },
                {
                  img_url: require('../assets/images/ProductShowImg/domestic/不知火丑橘.jpg'),
                  fruits_name: '不知火丑橘'
                },
                {
                  img_url: require('../assets/images/ProductShowImg/domestic/冰糖木瓜.jpg'),
                  fruits_name: '冰糖木瓜'
                },
                {
                  img_url: require('../assets/images/ProductShowImg/domestic/广西脆皮金桔.jpg'),
                  fruits_name: '广西脆皮金桔'
                }
              ],
              [
                {
                  img_url: require('../assets/images/ProductShowImg/domestic/新疆无籽红提.jpg'),
                  fruits_name: '新疆无籽红提'
                },
                {
                  img_url: require('../assets/images/ProductShowImg/domestic/百香果.jpg'),
                  fruits_name: '百香果'
                },
                {
                  img_url: require('../assets/images/ProductShowImg/domestic/老树冰糖血橙.jpg'),
                  fruits_name: '老树冰糖血橙'
                },
                {
                  img_url: require('../assets/images/ProductShowImg/domestic/阿克苏苹果.jpg'),
                  fruits_name: '阿克苏苹果'
                }
              ]
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .product {
    margin: 0px auto;
    width: 80%;
    .show_img {
      width: 100%;
    }
    .display_fruit {
      .fruit_title {
        margin-top: 60px;
      }
      .tableClass {
        margin: 30px auto 0px auto;
        width: 100%;
        .truit_item {
          width: 20%;
          .fruit_img {
            width: 100%;
          }
          .fruit_name_str {

          }
        }
      }
    }
  }


</style>
