<template>
    <div class="cont-frame">
        <div class="content">
            <div class="first-cont">
                <div class="first-left-cont">
                    <swiper :options="swiperOption" >
                        <!-- slides -->
                        <swiper-slide v-for="(item,index) of carouselMap" :key="index">
                            <img class="carousel-img" :src="item.path">
                        </swiper-slide> 
                    </swiper>
                </div>
                <div class="first-right-cont">
                    <div class="home-textile">
                        <div class="home-textile-background">
                            <h1 class="word">家具家纺</h1>
                            <h1 class="word">居家用品</h1>
                            <h2 class="small-word">疯狂优惠1000+</h2>
                        </div>
                    </div>
                    <div class="menu-user">
                        <div class="user-info-frame">
                            <div class="user-avatar">
                                <img src="~/static/image/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80.jpg" alt="">
                            </div>
                            <div class="user-name">
                                <h1>Hi！你好</h1>
                            </div>
                            <div class="suc-login" v-if="loginStatus">
                                <ul class="status">
                                    <li class="status-itme">
                                        <div class="status-cont">
                                            <i class="status-number">0</i>
                                            <span class="status-name">待收货</span>
                                        </div>
                                    </li>
                                    <li class="status-itme">
                                        <div class="status-cont">
                                            <i class="status-number">0</i>
                                            <span class="status-name">待发货</span>
                                        </div>
                                    </li>
                                    <li class="status-itme">
                                        <div class="status-cont">
                                            <i class="status-number">0</i>
                                            <span class="status-name">待付款</span>
                                        </div>
                                    </li>
                                    <li class="status-itme">
                                        <div class="status-cont">
                                            <i class="status-number">0</i>
                                            <span class="status-name">待评价</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="no-login" v-if="!loginStatus">
                                <button class="login">登录</button>
                                <button class="regkster">注册</button>
                            </div>
                            <div class="report">
                                <p class="report-word">网上有害信息举报专区<i class="iconfont">&#xe61e;</i></p>
                            </div>
                        
                        </div>
                        <div class="icon-menu">
                            <ul class="icon-menu-list">
                                <li class="item-menu">
                                    <i class="icon-itme-menu"></i>
                                    <span class="item-menu-word">充话费</span>
                                </li>
                                <li class="item-menu">
                                    <i class="icon-itme-menu" style="background-position-y:-87px;"></i>
                                    <span class="item-menu-word">旅行</span>
                                </li>
                                <li class="item-menu">
                                    <i class="icon-itme-menu" style="background-position-y:-44px;"></i>
                                    <span class="item-menu-word">车险</span>
                                </li>
                                <li class="item-menu">
                                    <i class="icon-itme-menu" style="background-position-y:-132px;"></i>
                                    <span class="item-menu-word">游戏</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="second-cont">
              <div class="recommend-left">
                <h1 class="recommend-title">理想生活</h1>
                <ul class="recommend-left-cont">
                  <li class="recommend-goods-item" v-for="(item,index) of liveGoods" :key="index">
                    <nuxt-link to="">
                      <div class="goods-title">
                        <h1 class="title-one"
                        :style="{color:item.color}">{{item.titleOne}}</h1>
                        <h2 class="title-two">{{item.titleTwo}}</h2>
                        <h3 class="title-three">{{item.titleThree}}</h3>
                      </div>
                      <div class="goods-img">
                        <img :src="item.imgPath" alt="">
                      </div>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
              <div class="recommend-right">
                <h1 class="recommend-title">今日推荐</h1>
                <div class="recommend-right-cont">
                  <nuxt-link to="">
                    <img class="recommend-img" src="~/static/image/7e6e5017a3a9de39.jpg" alt="">
                  </nuxt-link>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      loginStatus: true,
      swiperOption: {
        loop: true,
        speed: 2000,
        autoplay: true,
        autoplay: {
          delay: 3000
        },
        effect: 'fade'
      },
      liveGoods:[
        {titleOne:"必抢",titleTwo:"牛货季节",titleThree:"件件必抢",imgPath:require("~/static/image/live1.jpg"),color:"rgb(241, 58, 58)"},
        {titleOne:"超大优惠",titleTwo:"手机会场",titleThree:"12期免息",imgPath:require("~/static/image/live2.jpg"),color:"rgb(0, 160, 233)"},
        {titleOne:"大牌香水",titleTwo:"高端奢华",titleThree:"件件必抢",imgPath:require("~/static/image/live3.jpg"),color:"rgb(202, 0, 0)"},
        {titleOne:"进口牛奶",titleTwo:"营养健康",titleThree:"滴滴香醇",imgPath:require("~/static/image/live6.jpg"),color:"rgb(88, 105, 135)"}
      ],
      carouselMap: [
        { path: require('~/static/image/carousel1.jpg') },
        { path: require('~/static/image/carousel2.jpg') }
      ]
    }
  },
  computed: {

  },
  methods: {

  },
  props: {
   
  }
}
</script>

<style scoped>
.goods-img{
  padding-top:0.8rem;
  height: 2.5rem;
  padding-right:0.4rem; 
}
.goods-img img{
  width:1.8rem;
  height: 1.4rem;
}
.title-one{
  padding-left:0.1rem;
  font-size: 0.3rem;
}
.title-two{
  margin-top:0.2rem;
  padding-left:0.1rem;
  font-size: 0.3rem;
  color: #333;
}
.title-three{
  margin-top:0.2rem;
  padding-left:0.1rem;
  font-size: 0.2rem;
  color: #ccc;
}
.goods-title{
  padding: 0.15rem 0.1rem;
  padding-top: 0.5rem;
}
.recommend-goods-item{
  float: left;
  border-left: 0.02rem solid #ccc;
  overflow: hidden;
  border-bottom:0.02rem solid #ccc;
  height: 2.55rem;
  background: #fff;
}
.goods-title,
.goods-img{
  float: left;
}
.recommend-img{
  height: 100%;
}
.recommend-left-cont{
  border-top: 0.05rem solid #f40;
  border-right: 0.02rem solid #ccc;
}
.recommend-left-cont,
.recommend-right-cont{
  height: 2.6rem;
  width: 100%;
}
.recommend-title{
  padding: 0.1rem 0 0.1rem 0.2rem;
  font-size: 0.28rem;
  color: #333;
}
.recommend-left{
  float: left;
  height:3.1rem ;
  width: 14.9rem;
  margin-right: 0.2rem;
}
.recommend-right{
  float: left;
  height:3.1rem ;
  width:5rem;
}
/* 用户信息框 */
.icon-itme-menu,
.item-menu-word{
    display:block;
    margin: 0 auto;
}
.item-menu-word{
    font-size: 0.25rem;
}
.icon-itme-menu{
    cursor: pointer;
    margin-top: 0.35rem;
    margin-bottom: 0.3rem;
    height: 0.5rem;
    width: 0.5rem;
    background: url("../../static/image/TB1eiXTXlTH8KJjy0FiXXcRsXXa-24-595.png") no-repeat;
    background-position-y: 0;
}
.item-menu{
    text-align: center;
    float: left;
    width: 1.49rem;
    height: 1.785rem;
    background: #fff;
    border-top:0.02rem solid #ccc;
    border-left: 0.02rem solid #ccc;
}
.item-menu:hover .item-menu-word{
    color: #f40;
}
.icon-menu-list{
    height: 1.8rem;
    width: 6rem;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
}
.icon-menu {
  height: 1.8rem;
  margin-top: 0.3rem;
  width: 6rem;
}
.report-word {
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.23rem;
  color: #f40;
}
.report-word i {
  padding-left: 0.5rem;
  font-size: 0.23rem;
  color: #f40;
}
.report {
  margin-top: 0.15rem;
  height: 0.5rem;
  background: #ffe4dd;
}
.no-login {
  height: 0.8rem;
}
.login {
  float: left;
  background: #f40;
  margin-top: 0.1rem;
  border-radius: 0.1rem;
  margin-left: 1rem;
  padding: 0.05rem 0.2rem;
  color: #fff;
}
.regkster {
  margin-top: 0.1rem;
  color: #fff;
  float: right;
  margin-right: 1rem;
  background: #f40;
  border-radius: 0.1rem;
  padding: 0.05rem 0.2rem;
}
.status-number {
  color: #f40;
  font-size: 0.3rem;
  font-weight: 600;
  cursor: pointer;
}
.status-name {
  cursor: pointer;
  color: #333;
  padding-top: 0.1rem;
  font-size: 0.25rem;
}
.status-name:hover {
  color: #f40;
}
.status-number,
.status-name {
  display: block;
}
.status-itme {
  flex: 1;
  height: 0.8rem;
}
.status-cont {
  height: 0.8rem;
  text-align: center;
}
.status {
  display: flex;
  height: 0.8rem;
}
.suc-login,
.no-login {
  height: 0.8rem;
  width: 100%;
}
.user-name h1 {
  font-size: 0.28rem;
  color: #333;
}
.user-name {
  height: 0.7rem;
  line-height: 0.7rem;
  text-align: center;
  width: 100%;
}
.user-avatar {
  text-align: center;
  height: 1rem;
  margin-top: 0.2rem;
  width: 100%;
}
.user-avatar img {
  height: 1rem;
  width: 1rem;
  border-radius: 100%;
}
.menu-user {
  height: 5.6rem;
  width: 6rem;
  margin-left: 0.2rem;
  background:#fafafa;
}
.user-info-frame {
  height: 3.5rem;
  overflow: hidden;
  width: 6rem;
  background: url('../../static/image/userinfoframe.png') center no-repeat;
  background-size: 100%;
  background-position-y: 0;
  border: 0.02rem solid #fff; 
}
/* 结束 */
.small-word {
  margin-top: 0.2rem;
  font-size: 0.3rem;
  text-align: center;
  color: rgb(66, 131, 149);
}
.word {
  color: rgb(146, 121, 203);
  font-size: 0.5rem;
  margin-top: 0.2rem;
  text-align: center;
}
.home-textile-background {
  position: absolute;
  top: 1.3rem;
  left: 0.1rem;
  height: 2.6rem;
  box-sizing: border-box;
  padding: 0.25rem;
  width: 3rem;
  background: url('../../static/image/AD0IjP6zBxAEGAAgotn40AUoqOirHzCWATiCAQ.png');
}
.home-textile {
  position: relative;
  height: 5.6rem;
  width: 3.2rem;
  background: url('../../static/image/AD0IjP6zBxACGAAgmef90AUo0Pn1jAMw6wE4kAM.jpg')
    100% 100% repeat;
}
.second-cont {
  height: 3.1rem;
  margin-top: 0.2rem;
  background: #fafafa; 
  width: 20.2rem;
}
.swiper-container {
  margin: 0;
}
.swiper-slide,
.swiper-wrapper,
.swiper-container,
.first-left-cont,
.carousel-img {
  width: 10.4rem;
  height: 5.6rem;
}
.first-left-cont {
  float: left;
}
.first-right-cont {
  float: left;
  display: flex;
  margin-left: 0.3rem;
  width: 9.5rem;
  height: 5.6rem;
}
.first-cont {
  height: 5.6rem;
}
.cont-frame {
  width: 100%;
  min-width: 26rem;
  background: #fafafa;
}
.content {
  width: 24rem;
  margin: 0 auto;
  height: 9rem;
  padding: 0.1rem 0.1rem 0rem 3.6rem;
}
</style>