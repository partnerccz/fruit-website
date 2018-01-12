<template>
  <div class="product">
    <Slideshow></Slideshow>
    <!--<img src="../assets/images/ad_01.jpg" class="show_img"/>-->
    <Search></Search>
    <div class="display_fruit">
      <div class="fruit_place" v-for="(fruitsClass, index) in fruitsSetting">
        <h2 class="fruit_title">{{fruitsClass.title}}</h2>
        <table class="tableClass">
          <div v-for="(fruitsTr, index) in fruitsClass.fruits">
            <tr>
              <td class="truit_item" v-for="(fruitsTd, index) in fruitsTr">
                <img class="fruit_img" :key="index" :src="fruitsTd.img_url" alt="">
                <p class="fruit_name_str" v-text="fruitsTd.fruits_name"></p>
              </td>
            </tr>
          </div>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Slideshow from './common/header/Slideshow'
  import Search from './common/header/Search'

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
                  img_url: require('../assets/images/product/import/智利车厘子-z.jpg'),
                  fruits_name: '智利车厘子'
                },
                {
                  img_url: require('../assets/images/product/import/越南红心火龙果-z.jpg'),
                  fruits_name: '越南红心火龙果'
                },
                {
                  img_url: require('../assets/images/product/import/印尼山竹-z.jpg'),
                  fruits_name: '印尼山竹'
                },
                {
                  img_url: require('../assets/images/product/import/干尧-z.jpg'),
                  fruits_name: '越南干尧榴莲'
                }
              ],
              [
                {
                  img_url: require('../assets/images/product/import/进口蓝莓-z.jpg'),
                  fruits_name: '进口蓝莓'
                },
                {
                  img_url: require('../assets/images/product/import/哥伦比亚燕窝果-z.jpg'),
                  fruits_name: '哥伦比亚燕窝果'
                },
                {
                  img_url: require('../assets/images/product/import/台湾高端柠檬-z.jpg'),
                  fruits_name: '进口柠檬'
                },
                {
                  img_url: require('../assets/images/product/import/草莓-z.jpg'),
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
                  img_url: require('../assets/images/product/domestic/齐峰翠香猕猴桃-z.jpg'),
                  fruits_name: '齐峰翠香猕猴桃'
                },
                {
                  img_url: require('../assets/images/product/domestic/不知火丑橘-z.jpg'),
                  fruits_name: '不知火丑橘'
                },
                {
                  img_url: require('../assets/images/product/domestic/冰糖木瓜-z.jpg'),
                  fruits_name: '冰糖木瓜'
                },
                {
                  img_url: require('../assets/images/product/domestic/广西脆皮金桔-z.jpg'),
                  fruits_name: '广西脆皮金桔'
                }
              ],
              [
                {
                  img_url: require('../assets/images/product/domestic/新疆无籽红提-z.jpg'),
                  fruits_name: '新疆无籽红提'
                },
                {
                  img_url: require('../assets/images/product/domestic/百香果-z.jpg'),
                  fruits_name: '百香果'
                },
                {
                  img_url: require('../assets/images/product/domestic/老树冰糖血橙-z.jpg'),
                  fruits_name: '老树冰糖血橙'
                },
                {
                  img_url: require('../assets/images/product/domestic/阿克苏苹果-z.jpg'),
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
    width: 100%;
    .show_img {
      width: 100%;
    }
    .display_fruit {
      margin-bottom: 150px;
      .fruit_place {
        padding: 10px;
        margin: 20px 0px 0px 0px;
        background-color: rgb(244,244,244);
        .fruit_title {
        }
        .tableClass {
          margin: 30px auto 0px auto;
          width: 100%;
          .truit_item {
            padding: 0px 10px;
            .fruit_img {
              width: 100%;
            }
            .fruit_name_str {

            }
          }
        }
      }

    }
  }


</style>
