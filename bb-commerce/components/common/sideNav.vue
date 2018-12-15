<template>
    <div class="side-frame">
        <div class="side-cont">
            <ul class="meun-top"> 
                <li class="user-item" @mouseover="option.myData=true" @mouseout="option.myData=false">
                    <nuxt-link  to="" class="iconfont">&#xe6b3;</nuxt-link>
                    <transition name="slide-fade">
                    <div class="my-data" v-if="option.myData">
                        我的资料
                    </div>
                    </transition>
                </li>
                <li class="user-item" @mouseover="option.myCollect=true" @mouseout="option.myCollect=false">
                    <nuxt-link to="" class="iconfont">&#xe641;</nuxt-link>
                    <transition name="slide-fade">
                        <div class="my-collect" v-if="option.myCollect">
                        我的收藏
                        </div>
                    </transition>
                    
                </li>
                <li class="user-car-shop">
                    <i class="iconfont car-shop">&#xe622;</i>
                    购物车
                    <span class="car-shop-num">5</span>
                </li>
            </ul>
            <ul class="menu-bottom">
                <li @mouseover="option.msg=true" @mouseout="option.msg=false">
                    <i class="iconfont">&#xe6d4;</i>
                    <transition name="slide-fade">
                    <div class="leave-msg" v-if="option.msg">
                        留言
                    </div>
                    </transition>
                </li>
                <li @mouseover="option.qrCode=true" @mouseout="option.qrCode=false">
                    <i class="iconfont">&#xe642;</i>
                    <transition name="slide-fade">
                    <div class="qr-code" v-if="option.qrCode">
                        <img src="~/static/image/qrCode.png" alt="">
                        <p>扫一扫，关注我们</p>
                    </div>
                    </transition>
                </li>
                <li><i class="iconfont back-top">&#xe647;</i><span class="back-top-word">TOP</span></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            option:{
                msg:false,
                myData:false,
                myCollect:false,
                qrCode:false
            }
        }
    },
    methods:{

    }
}
</script>
<style scoped>
/* 动画 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
/* 动画over */
/* 各种下拉菜单 */
.qr-code{
    position: absolute;
    left: -2.2rem;
    top: -2rem;
    padding-bottom: 0.2rem;
    text-align: center;
    z-index: 3000;
    background: #fff;
}
.qr-code img{
    padding: 0.2rem;
    background: #fff;
}
.qr-code p{
    color: #333;
    font-size: 0.2rem;
    text-align: center;
}
.qr-code::after{
    content: "";
    display:block;
    height: 0rem;
    width: 0;
    border: 0.1rem solid #fff;
    position: absolute;
    right: -0.2rem;
    top: 2.25rem;
    border-top: 0.1rem solid transparent;
    border-bottom: 0.1rem solid transparent;
    border-right: 0.1rem solid transparent;
    z-index: 100;
}
.my-data{
    position: absolute;
    left: -2rem;
    top: 0;
    padding: 0.2rem 0;
    width: 2rem;
    text-align: center;
    z-index: 99;
    background: #434343;
    color: #fff;
}
.my-data::after{
    content: "";
    display:block;
    height: 0rem;
    width: 0;
    border: 0.1rem solid #434343;
    position: absolute;
    right: -0.2rem;
    top: 0.25rem;
    border-top: 0.1rem solid transparent;
    border-bottom: 0.1rem solid transparent;
    border-right: 0.1rem solid transparent;
    z-index: 100;
}
.my-collect{
    position: absolute;
    left: -2rem;
    top: 0;
    padding: 0.2rem 0;
    width: 2rem;
    text-align: center;
    z-index: 99;
    background: #434343;
    color: #fff;
}
.my-collect::after{
    content: "";
    display:block;
    height: 0rem;
    width: 0;
    border: 0.1rem solid #434343;
    position: absolute;
    right: -0.2rem;
    top: 0.25rem;
    border-top: 0.1rem solid transparent;
    border-bottom: 0.1rem solid transparent;
    border-right: 0.1rem solid transparent;
    z-index: 3000;
}
.leave-msg{
    position: absolute;
    left: -2rem;
    top: 0;
    padding: 0.2rem 0;
    width: 2rem;
    text-align: center;
    z-index: 3000;
    background: #434343;
    color: #fff;
}
.leave-msg::after{
    content: "";
    display:block;
    height: 0rem;
    width: 0;
    border: 0.1rem solid #434343;
    position: absolute;
    right: -0.2rem;
    top: 0.25rem;
    border-top: 0.1rem solid transparent;
    border-bottom: 0.1rem solid transparent;
    border-right: 0.1rem solid transparent;
    z-index: 100;
}
/* 各种下拉菜单结束 */
.back-top{
    display: inline-block;
    line-height: 0.25rem;
}
.back-top-word{
    display: inline-block;
    padding-top: 0.1rem;
}
.menu-bottom li{
    cursor: pointer;
    /* margin-bottom:0.3rem; */
    margin-bottom: 40%;
    padding: 0.2rem 0;
    width: 0.7rem;
    text-align:center;
    color: #fff;
    position: relative;
}
.menu-bottom li:hover{
    background: #C40000;
}
.menu-bottom{
    position: absolute;
    bottom: 8%;
}
.side-frame{
    width: 0.7rem;
    height: 100%;
    background: #202020;
    /* 202020 */
    position: fixed;
    top: 0;
    right: 0;
}
.meun-top{
    position: absolute;
    top: 20%;
}
.meun-top li{
    position: relative;
    /* margin-bottom:0.3rem;  */
    margin-bottom: 50%;
}
.side-cont{
    width: 0.7rem;
    min-height: 12rem;
    margin-top: 2rem;
}
.user-item{
    padding: 0.2rem 0;
    width: 0.7rem;
    text-align:center;
}
.user-item a{
    color:#fff;
}
.user-item:hover, .user-item:hover a{
    background: #C40000;
    color: #fff;
}
.user-car-shop{
    padding: 0.2rem 0;
    width: 0.7rem;
    text-align:center;
    font-size: 0.34rem;
    letter-spacing: 0.05rem;
    line-height: 0.5rem;
    color: #fff;
}
.user-car-shop:hover{
    background: #C40000;
}
.user-car-shop .car-shop{
    color: #fff;
}
.car-shop-num{
    margin-top: 0.2rem;
    display: inline-block;
    width: 0.4rem;
    border-radius: 100%;
    background: #C40000;
    letter-spacing: 0;
    line-height: 0.4rem;
    text-align: center;
    overflow: hidden;
}
.user-car-shop:hover .car-shop-num{
    color: #333;
    background: #fff;
}
</style>