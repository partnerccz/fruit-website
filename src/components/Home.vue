<template>
  <div class="home">
    <!--slider-->
    <Slideshow></Slideshow>

    <!--search-->
    <Search></Search>

    <!--内容-->
    <div class="content">
      <div class="about-us" style="position: relative;">
        <div
          style="width:80px;height:80px;background-color:#7cb930;color:white;font-size:22px;position: absolute;left:15%;z-index:1000;margin-left:5%;margin-top:-5px;">
          <span style="display: block;margin-top:7px;">关 于</span>
          <span style="display: block;;margin-top:2px;">我 们</span>
        </div>
        <div style="font-size:34px;color:#d0d0d0;margin-left:-41%;">
          ABOUT US
        </div>
        <div class="about-us-img"><img src="../assets/images/mainImg/reader1-3.jpg" width="70%;" height="250"/><span></span>
        </div>
        <div>
          <!--<img src="../assets/images/about.jpg" width="70%;" height="300"/>-->
        </div>
        <div style="font-size:18px;width: 100%;text-align: left;display: flex;line-height: 32px;">
          <div style="width:62%;margin:20px auto 0;color:#1f1f1f;font-weight: 500;">
            <b><span style="color:#7cb930;">广州指猴互联网科技有限公司</span>，深耕水果行业,致力于整合全球优质的水果资；
            构建高效水果供应服务链；使用移动互联网技术，为合作伙伴提供高质量、高价值、高效率的新零售服务。
            我们将兼具线上和线下的能力。线上，能研发、运营新零售供应链系统；线下，能搭建分销,直销渠道和提供冷链流通能力.目前我们已经在中国中部、南部、西南建立线下服务.
            我们的文化为"学校"文化，成长为主线，强调开放、高效、沟通。
            </b>
          </div>
        </div>
        <div class="quality-service" style="margin-top:60px;">
          <img src="../assets/images/m01.png"/>
        </div>
        <div class="service-standard" style="width:70%;display: flex;flex-direction: row;margin:0px auto;">
          <dl style="flex:1;">
            <dt><img src="../assets/images/icon01.png"/></dt>
            <dd>售后服务</dd>
            <dd>完善的售后服务，专人、全程跟进，节约人力、物力、财力成本，保证服务质量。</dd>
          </dl>
          <dl style="flex:1;">
            <dt><img src="../assets/images/icon02.png"/></dt>
            <dd>采购与销售</dd>
            <dd>全球化的采购网络，引进国外高品质水果，甄选国内优势水果，基于开发的心零售供应链系统，高效的分销、直销体系，为合作伙伴提供专业的水果服务。</dd>
          </dl>
          <dl style="flex:1;">
            <dt><img src="../assets/images/icon03.png"/></dt>
            <dd>冷链物流</dd>
            <dd>我们建立了采购到终端的全程冷链运输提体系，从干线到支线的轴辐式流通网络，产生集群效益，带动区域的水果行业的发展。</dd>
          </dl>
        </div>
      </div>


      <div style="margin-top:70px;display: flex;flex-direction: row;">
        <div style="flex:0.35;">
          <img src="../assets/images/mainImg/za.jpg" height="500" width="100%" />
        </div>
        <div
          style="flex:0.65;display: flex;flex-direction: column;align-content: center;background-color: #f4f4f4;height: 500px;">
          <div style="flex: 0.24;font-size:24px;font-weight: bold;align-content: center;line-height: 500%;">高效供应链</div>
          <div style="flex: 0.24;">
            <img src="../assets/images/lc.png"/>
          </div>
          <div
            style="flex: 0.52;display: flex;flex-direction: row;justify-content: space-evenly;margin:0px;position:relative;">
            <div style="width:38%;height: 95%;border:0;background-color: white;margin-top:-18px;text-align: right;">
              <video id="myvideo1" :src="video[0].videoSrc" :poster="video[0].videoImg" :muted="video[0].muteStatus"
                     :autoplay="video[0].playStatus" height="247px" width="100%">
                your browser does not support the video tag
              </video>
              <!--<img :src="playStatus" width="80" height="80" style="position:absolute;left:23%;top:30%;"/>--><!--
            <span class="ico ico-sound" :class="{ active: video[0].isMute }" v-on:click="closeSoundClick(0)">静音</span>-->
              <span class="ico ico-skip"></span>
              <span class="" v-on:click="showFullScreen(0)"><img src="../assets/images/fullscreem.jpg" height="22"
                                                                 width="22"
                                                                 style="vertical-align: middle;margin-top:-3px;"/>&nbsp;全屏</span>
              <span class="ico ico-video" :class="{ hide: video[0].isPlay }" v-on:click="playClick(0)">{{video[0].playOrPause}}</span>
            </div>
            <div style="width:38%;height: 95%;border:0;background-color: white;margin-top:-20px;text-align: right;">
              <video id="myvideo2" :src="video[1].videoSrc" :poster="video[1].videoImg" :muted="video[1].muteStatus"
                     :autoplay="video[1].playStatus" height="247px" width="100%">
                your browser does not support the video tag
              </video><!--
            <span class="ico ico-sound" :class="{ active: video[1].isMute }" v-on:click="closeSoundClick(1)">静音</span>-->
              <span class="ico ico-skip"></span>
              <span class="" v-on:click="showFullScreen(1)"><img src="../assets/images/fullscreem.jpg" height="22"
                                                                 width="22"
                                                                 style="vertical-align: middle;margin-top:-3px;"/>&nbsp;全屏</span>
              <span class="ico ico-video" :class="{ hide: video[1].isPlay }" v-on:click="playClick(1)">{{video[1].playOrPause}}</span>
            </div>
          </div>
        </div>
      </div>
      <div style="clear:both;margin-top:50px;">
        <div><img src="../assets/images/m02.png"/></div>
        <el-carousel :interval="4000" type="card" height="200px" class="teamwork">
          <!-- <el-carousel-item v-for="item in 10" :key="item" style="width:140px;height: 140px;border-radius: 70px;margin-left:100px;">
             <h3 style="line-height:140px;">{{ item }}</h3>
           </el-carousel-item>-->
          <el-carousel-item class="teamwork-child">
            <img src="../assets/images/teamwork01.jpg" class="teamwork-child-img"/>
          </el-carousel-item>
          <el-carousel-item class="teamwork-child">
            <img src="../assets/images/teamwork02.jpg" class="teamwork-child-img"/>
          </el-carousel-item>
          <el-carousel-item class="teamwork-child">
            <img src="../assets/images/teamwork03.jpg" class="teamwork-child-img"/>
          </el-carousel-item>
          <el-carousel-item class="teamwork-child">
            <img src="../assets/images/teamwork04.jpg" class="teamwork-child-img"/>
          </el-carousel-item>
          <el-carousel-item class="teamwork-child">
            <img src="../assets/images/teamwork05.jpg" class="teamwork-child-img"/>
          </el-carousel-item>
          <el-carousel-item class="teamwork-child">
            <img src="../assets/images/teamwork06.jpg" class="teamwork-child-img"/>
          </el-carousel-item>

        </el-carousel>
      </div>
    </div>

    <div id="showFullScreen" class="closeFullScreen"
         style="position: absolute;left: 1px;top: 1px;width:100%;height: 3400px;background-color: rgba(0, 0, 0,1);z-index:100000;overflow: hidden;">
      <div
        style="width:600px;height: 450px;background-color: white;position: fixed;left:50%;top:150px;margin-left:-250px;color:white;text-align: right;">
        <video id="myvideo3" :src="video[fullscreen].videoSrc" :poster="video[fullscreen].videoImg"
               :muted="video[fullscreen].muteStatus" :autoplay="video[fullscreen].playStatus" height="450px"
               width="600px">
          your browser does not support the video tag
        </video>
        <!--<img :src="playStatus" width="80" height="80" style="position:absolute;left:23%;top:30%;"/>--><!--
      <span class="ico ico-sound" :class="{ active: video[0].isMute }" v-on:click="closeSoundClick(0)">静音</span>-->
        <span class="ico ico-skip"></span>
        <span v-on:click="closeFullScreen()"><img src="../assets/images/normalscreen.jpg" height="22" width="22"
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

  import '../assets/vedio/9ed6bc6dbf3b8aaf8c188ac53d6e3908.mp4'
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
            videoImg: 'http://static.fdc.com.cn/avatar/usercenter/5996999fa093c04d4b4dbaf1_162.jpg',
            playStatus: '',
            muteStatus: '',
            isMute: true,
            isPlay: true,
            playOrPause: '暂停'
          },
          {
            _dom: '',
            videoSrc: require('../assets/vedio/b034c42a57e1ff0c595ccc8ad6d9ab8a.mp4'),
            videoImg: 'http://static.fdc.com.cn/avatar/usercenter/5996999fa093c04d4b4dbaf1_162.jpg',
            playStatus: '',
            muteStatus: '',
            isMute: true,
            isPlay: true,
            playOrPause: '暂停'
          }
        ],
        fullscreen: 0
      }
    },
    methods: {
      handleSelect: function (key, keyPath) {
        console.log(key, keyPath)
      },
      playClick: function (val) {
        console.log(val)
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
        console.log('_this:' + _this)
        setInterval(function () {
          if (typeof (_this._dom) !== 'undefined') {
            console.log('_this._dom:' + _this._dom)
            _this.flag = _this._dom.paused
            if (_this.flag) {
              console.log(_this.flag)
              this.playOrPause = '播放'
            }
          } else {
            console.log('a')
          }
        }, 1000)
      },
      showFullScreen: function (val) {
        this.fullscreen = val
        console.log(val)
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
    margin:0 auto;
    width:80%;
  }
  .content{
    width:100%;
    margin-top:40px;
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
    position: absolute;
    -webkit-animation-name: fadeInOut;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 10s;
    -webkit-animation-direction: alternate;
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

  .closeFullScreen {
    position: absolute;
    -webkit-animation-name: fadeOutIn;
    -webkit-animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-duration: 10s;
    -webkit-animation-direction: alternate;
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
  }

  .service-standard dl dt, dd {
    margin-top: 20px;
  }

  .service-standard dl dt {
    margin-left: 26px;
  }

  .service-standard dl dd:nth-child(2) {
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
  .teamwork{
    width:80%;
    margin:20px auto 0;
  }
  .teamwork-child{
    width:140px;
    height: 140px;
    border-radius: 75px;
    background-color: white;
    margin-left: 235px;
    border:1px solid #999;
  }
  .teamwork-child-img{
    width:150px;
    height: 150px;
    border-radius: 75px;
  }
  .about-us-img {
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
