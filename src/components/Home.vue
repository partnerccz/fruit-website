<template>
  <div class="home">
    <!--slider-->
    <Slideshow></Slideshow>

    <!--search-->
    <Search></Search>

    <!--内容-->
    <div class="content">
      <div class="about-us" style="position: relative;">
        <div class="about-us-zh">
          <span class="about-us-zh-about">关 于</span>
          <span class="about-us-zh-us">我 们</span>
        </div>
        <div class="about-us-en">
          ABOUT US
        </div>
        <div class="about-us-img"><img src="../assets/images/main/reader1-3.jpg" width="1010px"
                                       height="250"/><span></span>
        </div>
        <div>
          <!--<img src="../assets/images/about.jpg" width="70%;" height="300"/>-->
        </div>
        <div class="about-us-detail-container">
          <div class="about-us-detail">
            <b><span class="green-color">广州指猴互联网科技有限公司</span>，深耕水果行业,致力于整合全球优质的水果资；
              构建高效水果供应服务链；使用移动互联网技术，为合作伙伴提供高质量、高价值、高效率的新零售服务。
              我们将兼具线上和线下的能力。线上，能研发、运营新零售供应链系统；线下，能搭建分销,直销渠道和提供冷链流通能力.目前我们已经在中国中部、南部、西南建立线下服务.
              我们的文化为"学校"文化，成长为主线，强调开放、高效、沟通。
            </b>
          </div>
        </div>
        <div class="quality-service">
          <img src="../assets/images/else/m01.png"/>
        </div>
        <div class="service-standard">
          <dl style="flex:1;">
            <dt><img src="../assets/images/else/icon01.png"/></dt>
            <dd>售后服务</dd>
            <dd>完善的售后服务，专人、全程跟进，节约人力、物力、财力成本，保证服务质量。</dd>
          </dl>
          <dl style="flex:1;">
            <dt><img src="../assets/images/else/icon02.png"/></dt>
            <dd>采购与销售</dd>
            <dd>全球化的采购网络，引进国外高品质水果，甄选国内优势水果，基于开发的心零售供应链系统，高效的分销、直销体系，为合作伙伴提供专业的水果服务。</dd>
          </dl>
          <dl style="flex:1;">
            <dt><img src="../assets/images/else/icon03.png"/></dt>
            <dd>冷链物流</dd>
            <dd>我们建立了采购到终端的全程冷链运输提体系，从干线到支线的轴辐式流通网络，产生集群效益，带动区域的水果行业的发展。</dd>
          </dl>
        </div>
      </div>


      <div class="home-middle-container">
        <div style="flex:0.35;">
          <img src="../assets/images/main/za-z.jpg" height="400" width="100%"/>
        </div>
        <div class="home-middle-right">
          <div class="home-middle-right-title">高效供应链</div>
          <div class="home-middle-right-middle">
            <img src="../assets/images/else/lc.png"/>
          </div>
          <div class="home-middle-right-content">
            <div class="video-container">
              <video id="myvideo1" :src="video[0].videoSrc" :poster="video[0].videoImg" :muted="video[0].muteStatus"
                     height="100%" width="100%">
                your browser does not support the video tag
              </video>
              <!--<img :src="playStatus" width="80" height="80" style="position:absolute;left:23%;top:30%;"/>--><!--
            <span class="ico ico-sound" :class="{ active: video[0].isMute }" v-on:click="closeSoundClick(0)">静音</span>-->

              <span class="ico ico-skip"></span>
              <span class="" v-on:click="showFullScreen(0)" class="full-screen-container"><img
                src="../assets/images/else/fullscreem.jpg" height="22"
                width="22"
                class="full-screen-text"/>&nbsp;全屏</span>
              <span class="ico ico-video" :class="{ hide: video[0].isPlay }" v-on:click="playClick(0)">{{video[0].playOrPause}}</span>

            </div>
            <div class="video-container">
              <video id="myvideo2" :src="video[1].videoSrc" :poster="video[1].videoImg" :muted="video[1].muteStatus"
                     height="100%" width="100%">
                your browser does not support the video tag
              </video><!--
            <span class="ico ico-sound" :class="{ active: video[1].isMute }" v-on:click="closeSoundClick(1)">静音</span>-->
              <span class="ico ico-skip"></span>
              <span class="" v-on:click="showFullScreen(1)"><img src="../assets/images/else/fullscreem.jpg" height="22"
                                                                 width="22"
                                                                 class="full-screen-text"/>&nbsp;全屏</span>
              <span class="ico ico-video" :class="{ hide: video[1].isPlay }" v-on:click="playClick(1)">{{video[1].playOrPause}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="teamwork-container">
        <div><img src="../assets/images/else/m02.png"/></div>
        <el-carousel :interval="3000" class="teamwork">
          <!-- <el-carousel-item v-for="item in 10" :key="item" style="width:140px;height: 140px;border-radius: 70px;margin-left:100px;">
             <h3 style="line-height:140px;">{{ item }}</h3>
           </el-carousel-item>-->
          <el-carousel-item class="teamwork-child" style="background-color:transparent">
            <img src="../assets/images/else/teamwork01.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork02.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork03.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork04.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork05.jpg" class="teamwork-child-img"/>
          </el-carousel-item>
          <el-carousel-item class="teamwork-child" style="background-color:transparent">
            <img src="../assets/images/else/teamwork02.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork03.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork04.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork05.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork06.jpg" class="teamwork-child-img"/>
          </el-carousel-item>
          <el-carousel-item class="teamwork-child" style="background-color:transparent">
            <img src="../assets/images/else/teamwork03.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork04.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork05.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork06.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork01.jpg" class="teamwork-child-img"/>
          </el-carousel-item>
          <el-carousel-item class="teamwork-child" style="background-color:transparent">
            <img src="../assets/images/else/teamwork04.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork05.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork06.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork01.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork02.jpg" class="teamwork-child-img"/>
          </el-carousel-item>
          <el-carousel-item class="teamwork-child" style="background-color:transparent">
            <img src="../assets/images/else/teamwork05.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork06.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork01.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork02.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork03.jpg" class="teamwork-child-img"/>
          </el-carousel-item>
          <el-carousel-item class="teamwork-child" style="background-color:transparent">
            <img src="../assets/images/else/teamwork06.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork01.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork02.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork03.jpg" class="teamwork-child-img"/>
            <img src="../assets/images/else/teamwork04.jpg" class="teamwork-child-img"/>
          </el-carousel-item>

        </el-carousel>
      </div>
    </div>

    <div id="showFullScreen" class="closeFullScreen">
      <div class="over-video-container">
        <video id="myvideo3" :src="video[fullscreen].videoSrc" :poster="video[fullscreen].videoImg"
               :muted="video[fullscreen].muteStatus" height="450px"
               width="600px">
          your browser does not support the video tag
        </video>
        <!--<img :src="playStatus" width="80" height="80" style="position:absolute;left:23%;top:30%;"/>--><!--
      <span class="ico ico-sound" :class="{ active: video[0].isMute }" v-on:click="closeSoundClick(0)">静音</span>-->

        <span class="ico ico-skip"></span>
        <span v-on:click="closeFullScreen()"><img src="../assets/images/else/normalscreen.jpg" height="22" width="22"
                                                  style="vertical-align: middle;margin-top:-3px;"/>&nbsp;小屏</span>
        <span class="ico ico-video" :class="{ hide: video[fullscreen].isPlay }" v-on:click="playClick(fullscreen+2)">{{video[fullscreen].playOrPause}}</span>

      </div>
    </div>

  </div>
</template>

<script>
  import ElCarousel from 'element-ui/packages/carousel/src/main'
  import ElCarouselItem from 'element-ui/packages/carousel/src/item'
  import 'element-ui/lib/theme-chalk/index.css'
  import ElInput from 'element-ui/packages/input/src/input'
  import Slideshow from './common/header/Slideshow'
  import Search from './common/header/Search'

  export default {
    name: 'home',
    components: {
      ElInput,
      ElCarouselItem,
      ElCarousel,
      Slideshow,
      Search
    },
    data: function () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        tbIndex: 0,
        video: [
          {
            _dom: '',
            videoSrc: require('../assets/vedio/9ed6bc6dbf3b8aaf8c188ac53d6e3908.mp4'),
            videoImg: require('../assets/vedio/vedio01.png'),
            playStatus: '',
            muteStatus: '',
            isMute: false,
            isPlay: false,
            playOrPause: '播放'
          },
          {
            _dom: '',
            videoSrc: require('../assets/vedio/b034c42a57e1ff0c595ccc8ad6d9ab8a.mp4'),
            videoImg: require('../assets/vedio/vedio02.png'),
            playStatus: '',
            muteStatus: '',
            isMute: false,
            isPlay: false,
            playOrPause: '播放'
          }
        ],
        fullscreen: 0
      }
    },
    methods: {
      handleSelect: function (key, keyPath) {
      },
      playClick: function (val) {
        if (val === 0) {
          this._dom = document.getElementById('myvideo1')
        } else if (val >= 2) {
          this._dom = document.getElementById('myvideo3')
          val -= 2
        } else {
          this._dom = document.getElementById('myvideo2')
        }
        this.video[val].isPlay = !this.video[val].isPlay
        if (this.video[val].isPlay) {
          this._dom.play()
          this.video[val].playOrPause = '暂停'
        } else {
          this._dom.pause()
          this.video[val].playOrPause = '播放'
        }
      },
      closeSoundClick: function () {
        this.isMute = !this.isMute
        if (this.isMute) {
          this.muteStatus = ''
        } else {
          this.muteStatus = 'muted'
        }
      },
      showOtherVideo: function () {
        let _this = this
        setInterval(function () {
          if (typeof (_this._dom) !== 'undefined') {
            _this.flag = _this._dom.paused
            if (_this.flag) {
              this.playOrPause = '播放'
            }
          } else {
          }
        }, 1000)
      },
      showFullScreen: function (val) {
        this.fullscreen = val
        var sfs = document.getElementById('showFullScreen')
        sfs.style.display = 'block'
      },
      closeFullScreen: function () {
        var sfs = document.getElementById('showFullScreen')
        sfs.style.display = 'none'
      }
    },
    mounted: function () {
      this._dom = document.getElementById('myvideo1')
    }
  }
</script>

<style scoped>
  .home {
    background-color: white;
    margin: 0 auto;
    /*width:80%;*/
    width: 1263px;
  }

  .content {
    width: 100%;
    margin-top: 40px;
  }

  @-webkit-keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
  }

  #showFullScreen {
    display: none;
    -webkit-animation-name: fadeInOut;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 10s;
    -webkit-animation-direction: alternate;
    height: 3600px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    background-color: rgba(0, 0, 0, 1);
    z-index: 100000;
    overflow: hidden;
  }

  .over-video-container {
    width: 600px;
    height: 450px;
    background-color: white;
    position: fixed;
    left: 50%;
    top: 50px;
    margin-left: -250px;
    color: white;
    text-align: right;
  }

  @-webkit-keyframes fadeOutIn {
    0% {
      opacity: 1;
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .search-input:hover {
    border: 1px solid #d3d3d3;
    border: 0px;
  }

  .search-btn:hover {
    border: 1px solid #fc9902;
  }

  .quality-service {
    margin-top: 60px;
  }

  .service-standard dl dt, dd {
    margin-top: 20px;
  }

  .service-standard dl dt {

  }

  .service-standard dl dd:nth-child(2) {
    margin-left: 0px;
    font-size: 22px;
  }

  .service-standard dl dd:nth-child(3) {
    line-height: 32px;
    text-align: left;
    font-size: 16px;
  }

  .team-brand {
    width: 60%;
    margin: 0 auto;
  }

  .team-brand ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .team-brand ul li {
    width: 100px;
    height: 100px;
    line-height: 100px;
    background-color: aqua;
    border-radius: 50px;
    list-style-type: none;
    display: none;
  }

  .teamwork {
    width: 80%;
    margin: -20px auto 0;
  }

  .teamwork-child {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    justify-content: space-evenly;
    -webkit--moz-box-pack: space-evenly;
    box-pack: space-evenly;
    background-color: red;
  }

  .teamwork-child-img {
    width: 130px;
    height: 130px;
    border-radius: 65px;
    border: 1px solid #e3e3e3;
    box-shadow: 5px 5px 2px #888888;
    margin-top: 75px;
  }

  .about-us-img {
  }

  .about-us-zh {
    width: 80px;
    height: 80px;
    background-color: #7cb930;
    color: white;
    font-size: 22px;
    position: absolute;
    left: 15%;
    z-index: 1000;
    margin-left: 5%;
    margin-top: -5px;
  }

  .about-us-zh-about {
    display: block;
    margin-top: 7px;
  }

  .about-us-zh-us {
    display: block;
    margin-top: 2px;
  }

  .about-us-en {
    font-size: 34px;
    color: #d0d0d0;
    text-align: left;
    margin-left: 345px
  }

  .about-us-detail-container {
    font-size: 18px;
    width: 100%;
    text-align: left;
    display: flex;
    line-height: 32px;
  }

  .about-us-detail {
    width: 920px;
    margin: 20px auto 0;
    color: #1f1f1f;
    font-weight: 500;
  }

  .green-color {
    color: #7cb930;
  }

  .service-standard {
    width: 1010px;
    display: flex;
    flex-direction: row;
    margin: 0px auto;
    justify-content: space-evenly;
  }

  .home-middle-container {
    margin-top: 60px;
    display: flex;
    flex-direction: row;
  }

  .home-middle-right {
    flex: 0.65;
    display: flex;
    flex-direction: column;
    align-content: center;
    background-color: #f4f4f4;
    height: 400px;
  }

  .home-middle-right-title {
    flex: 0.24;
    font-size: 24px;
    font-weight: bold;
    align-content: center;
    line-height: 300%;
  }

  .home-middle-right-middle {
    flex: 0.24;
    margin-top: -30px;
  }

  .home-middle-right-content {
    flex: 0.52;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0px;
    position: relative;
  }

  .video-container {
    width: 38%;
    height: 95%;
    border: 0;
    background-color: white;
    margin-top: -18px;
    text-align: right;
  }

  .full-screen-container {
    display: inline-block;
    margin-top: -32px;
  }

  .full-screen-text {
    vertical-align: middle;
    margin-top: -3px;
  }

  .teamwork-container {
    clear: both;
    margin-top: 50px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /*  .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

      .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
      }*/
</style>
