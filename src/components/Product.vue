<template>
  <div class="product">
    <Headers></Headers>
    <img src="../assets/images/ad_01.jpg"/>
    <Search></Search>
    <div class="display_fruit">-
      <div v-for="(fruitsClass, index) in fruitsSetting">
        <h2>{{fruitsClass.title}}</h2>
        <table class="tableClass">
          <div v-for="(fruitsTr, index) in fruitsClass.fruits">
            <tr>
              <td class="truit_item" v-for="(fruitsTd, index) in fruitsTr">
                <img :src="fruitsTd.img_url" alt="" class="fruit_img">
                <h3 class="fruit_name_str" v-text="fruitsTd.fruits_name"></h3>
              </td>
            </tr>
          </div>
        </table>
      </div>
    </div>
  <Bottom></Bottom>
  </div>
</template>

<script>
  import Headers from './common/header/Header.vue'
  import Bottom from './common/footer/Footer.vue'
  import Search from './common/header/Search'

  export default {
    name: 'product',
    components: {
      Bottom,
      Headers,
      Search
    },
    data: function () {
      return {
        fruitsSetting: [
          {
            title: '进口水果',
            fruits: [
              [
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货'
                },
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货'
                },
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货'
                },
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货'
                }
              ],
              [
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货'
                },
                {
                  img_url: 'http://pic13.nipic.com/20110301/2531170_082157389664_2.jpg',
                  fruits_name: '干货'
                },
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货'
                },
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货'
                }
              ]
            ]
          },
          {
            title: '国内精品水果',
            fruits: [
              [
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货00000000000000000000000000000'
                },
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货'
                },
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货'
                },
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货'
                }
              ],
              [
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货'
                },
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货'
                },
                {
                  img_url: 'http://file06.16sucai.com/2016/0502/19b572a189ec13d9cdcac82f579d680a.jpg',
                  fruits_name: '干货'
                },
                {
                  img_url: 'http://pic13.nipic.com/20110301/2531170_082157389664_2.jpg',
                  fruits_name: '干货'
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
    .display_fruit {
      .tableClass {
        margin: 0px auto;
        .truit_item {
          margin-left: 120px;
          img, h3 {
            margin-left: 10px;
            margin-right: 10px;
          }
          .fruit_img {
            width: 300px;
            height: 300px;
          }
        }
      }
    }
  }


</style>
