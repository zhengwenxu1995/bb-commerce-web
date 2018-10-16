<template>
    <div class="mall-header-frame">
        <div class="mall-header-cont">
            <ul class="user-info">
                <li class="go-login" v-if="!option.loginStatus"><nuxt-link to="/login">亲，请登录</nuxt-link></li>
                <li class="user-register" v-if="!option.loginStatus"><nuxt-link to="/register">免费注册</nuxt-link></li>
                <li class="user-name" v-if="option.loginStatus" @mouseover="option.avatarInfo=true" @mouseout="option.avatarInfo=false">刘勇<i class="iconfont vip">&#xe7ac;</i>
                    <div class="user-data" v-if="option.avatarInfo">
                        <span class="close" @click="close">退出</span>
                        <div class="user-relate">
                            <img class="avatar" :src="user.userAvater" alt="">
                            <div class="avatar-info">
                                <h2>淘气值：<span>{{user.vipValue}}</span></h2>
                                <h2>普通会员</h2>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="my-data" v-if="option.loginStatus"><nuxt-link to="">我的资料</nuxt-link></li>
            </ul>
            <ul class="user-menu">
                <li class="menu-item" v-if="option.backIndex"><nuxt-link to="">商城首页</nuxt-link></li>
                <li class="menu-item order" @click="order" @mouseover="option.carShopShow=true" @mouseout="option.carShopShow=false">我的订单<i class="iconfont" style="color:rgb(150,150,150)">&#xe733;</i>
                    <div class="order-list" v-if="option.carShopShow">
                        <h2 style="color:#333;font-weight:600;">最近完成的订单:</h2>
                        <div v-if="user.orderList" style="max-height:5rem;overflow: auto;">
                            <ul  v-if="option.loginStatus" style="width:5.4rem">
                                <li style="margin-bottom:0.2rem;margin-top:0.0rem;padding-top:0.0rem;" v-for="(item,index) of user.orderList" :key="index">
                                    <div class="order-title">
                                        <h3>订单号:{{item.orderNumber}}</h3>
                                        <span >{{item.orderStatus}}</span>
                                    </div>
                                    <div class="order-over-info">
                                        <img class="order-img" :src="item.orderImg" alt="">
                                        <!-- 图片 -->
                                        <div class="order-right-cont">
                                            <p class="order-cont-title" :title="item.productName">{{item.productName}}</p>
                                            <i style="display:inline-block;vertical-align: top;color:rgb(150,150,150);line-height:0.22rem;padding-left:0.2rem">￥</i><span style="color:#f40;vertical-align: top;line-height:0.22rem;">{{item.orderSum}}.00</span>
                                            <p class="order-cont-sort" :title="item.productSort">颜色分类:{{item.productSort}} </p>
                                            <a class="order-del" style="line-height:0.22rem;color:#333;padding-left:0.2rem;vertical-align: top;" href="#" @click="delOrder(item.orderNumber)">删除</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div v-if="option.loginStatus" class="none-frame">
                            <p class="none-title" v-if="user.orderList.length==0">
                                最近没有完成订单！
                            </p>
                        </div>
                        <div v-else class="none-frame">
                            <p class="none-title">
                                请先登录！
                            </p>
                        </div>
                        <div class="btn-frame">
                            <button class="btn" @click="viewOrder">查看我的订单</button>
                        </div>
                    </div>
                </li>
                <li class="menu-item car-shop" @mouseover="option.orderShow=true" @mouseout="option.orderShow=false">购物车<i class="iconfont" style="color:#f40;font-weight: 600;">&#xe622;</i>
                    <div class="car-shop-list" v-if="option.orderShow">
                        <h1 style="color:#333;font-weight:600;">最近加入的宝贝:</h1>
                        <div v-if="user.shopCarList" style="max-height:4rem;overflow: auto;">
                            <ul v-if="option.loginStatus" style="width:5.4rem" >
                                <li class="car-shop-item" style="margin-bottom:0.2rem;" v-for="item of user.shopCarList"
                                 :key="item.productId">
                                    <div class="car-shop-over-info">
                                        <img class="car-shop-img" :src="item.carShopImg" alt="">
                                        <!-- 图片 -->
                                        <div class="car-shop-right-cont">
                                            <p class="car-shop-cont-title" :title="item.productName">{{item.productName}}</p>
                                            <i style="display:inline-block;vertical-align: top;color:rgb(150,150,150);line-height:0.22rem;padding-left:0.1rem">￥</i><span style="color:#f40;vertical-align: top;line-height:0.22rem;">{{item.productSum}}.00</span>
                                            <p class="car-shop-cont-sort" :title="item.productSort">颜色分类:{{item.productSort}} </p>
                                            <a class="car-shop-del" 
                                            style="line-height:0.22rem;color:#333;padding-left:0.1rem;vertical-align: top;"
                                             href="#" @click="delCarShop(item.productId)">删除</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div v-if="option.loginStatus" class="none-frame">
                            <p class="none-title" v-if="user.shopCarList.length==0">
                                最近没有添加购物车商品！
                            </p>
                        </div>
                        <div v-else class="none-frame">
                            <p class="none-title">
                                请先登录！
                            </p>
                        </div>
                        <div class="btn-frame">
                            <button class="btn" @click="viewCarShop">查看我的购物车</button>
                        </div>
                    </div>
                </li>
                <li class="menu-item"><nuxt-link to="">收藏夹<i class="iconfont" style="color:rgb(150,150,150);font-weight: 600;">&#xe641;</i></nuxt-link></li>
                <li class="menu-item" @click="addFavorite">收藏本站</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            option:{
                loginStatus:true,
                backIndex:false,
                avatarInfo:false,
                carShopShow:false,
                orderShow:false
            },
            user:{
                userName:"刘勇",
                userAvater:require("~/static/image/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80.jpg"),
                vipValue:"481",
                shopCarList:[
                    {
                        productId:"45",
                        carShopImg:require("~/static/image/car.jpg"),
                        productName:"婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        productSort:"健儿【红色】自驾+遥控+双电双驱",
                        productSum:500
                    },
                    {
                        productId:"12",
                        carShopImg:require("~/static/image/car.jpg"),
                        productName:"婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        productSort:"健儿【红色】自驾+遥控+双电双驱",
                        productSum:600
                    },
                    {
                        productId:"485",
                        carShopImg:require("~/static/image/car.jpg"),
                        productName:"婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        productSort:"健儿【红色】自驾+遥控+双电双驱",
                        productSum:500
                    },
                    {
                        productId:"172",
                        carShopImg:require("~/static/image/car.jpg"),
                        productName:"婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        productSort:"健儿【红色】自驾+遥控+双电双驱",
                        productSum:600
                    },
                    {
                        productId:"475",
                        carShopImg:require("~/static/image/car.jpg"),
                        productName:"婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        productSort:"健儿【红色】自驾+遥控+双电双驱",
                        productSum:500
                    },
                    {
                        productId:"122",
                        carShopImg:require("~/static/image/car.jpg"),
                        productName:"婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        productSort:"健儿【红色】自驾+遥控+双电双驱",
                        productSum:600
                    }
                ],
                orderList:[
                    {
                        orderImg:require("~/static/image/car.jpg"),
                        orderNumber:"231532290697103956",
                        orderStatus:"交易完成",
                        productName:"婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        productSort:"健儿【红色】自驾+遥控+双电双驱",
                        orderSum:480
                    },
                    {
                        orderImg:require("~/static/image/car.jpg"),
                        orderNumber:"231532290697103956",
                        orderStatus:"交易完成",
                        productName:"婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        productSort:"健儿【红色】自驾+遥控+双电双驱婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        orderSum:480
                    },
                    {
                        orderImg:require("~/static/image/car.jpg"),
                        orderNumber:"231532290697103956",
                        orderStatus:"交易完成",
                        productName:"婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        productSort:"健儿【红色】自驾+遥控+双电双驱",
                        orderSum:480
                    },
                    {
                        orderImg:require("~/static/image/car.jpg"),
                        orderNumber:"231532290697103956",
                        orderStatus:"交易完成",
                        productName:"婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        productSort:"健儿【红色】自驾+遥控+双电双驱婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        orderSum:480
                    },
                    {
                        orderImg:require("~/static/image/car.jpg"),
                        orderNumber:"231532290697103956",
                        orderStatus:"交易完成",
                        productName:"婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        productSort:"健儿【红色】自驾+遥控+双电双驱",
                        orderSum:480
                    },
                    {
                        orderImg:require("~/static/image/car.jpg"),
                        orderNumber:"231532290697103956",
                        orderStatus:"交易完成",
                        productName:"婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        productSort:"健儿【红色】自驾+遥控+双电双驱婴幼儿童电动车四轮带遥控汽车可坐小孩摇摆童车宝宝玩具车可坐人",
                        orderSum:480
                    }
                ]
            }
        }
        
    },
    computed:{

    },
    methods:{
        viewOrder(){
            console.log("查看订单")
            //this.$router.push({path:""})
        },
        viewCarShop(){
            console.log("查看购物车")
            //this.$router.push({path:""})
        },
        delCarShop(productId){
            console.log("删除购物车商品id"+productId);
            return false;
        },
        delOrder(orderNumber){
            console.log("要删除的订单编号"+orderNumber)
            return false;
        },
        order(){
            this.$router.push({path:"/order"})
        },
        close(){
            console.log("guanbi")
        },
        backHome(){
            let url= this.$route.path;
            if(url=="/"){
                this.backIndex=false;
            }else{
                this.backIndex=true;
            }
        },
        //添加到书签
        addFavorite(){
            let sURL=window.location;
            let sTitle=document.title
            try
            {
                window.external.addFavorite(sURL, sTitle);
            }
            catch (e)
            {
                try
                {
                window.sidebar.addPanel(sTitle, sURL, "");
                }
                catch (e)
                {
                alert("加入收藏失败，请使用Ctrl+D进行添加");
                }
            }
        }
    },
    components:{

    },
    prop:{

    },
    watch:{
        
    },
    mounted(){
        this.backHome();
        console.log(this.$route.path)
    }
}
</script>

<style scoped>
/* 购物车列表 订单列表公共部分 */
.none-frame .none-title{
    color: #333;
    text-align: center;
    padding-bottom: 0.2rem;
}
.car-shop-over-info{
    overflow: hidden;
}
.btn-frame{
    width: 100%;
    border-top: 0.02rem solid #ccc;
    padding: 0;
    text-align: right;
}
.btn{
    cursor: pointer;
    background: #f40;
    padding: 0.1rem 0.2rem;
    border-radius: 0.1rem;
    color: #fff;
}
/* 购物车列表开始 */
.car-shop{
    position: relative;
}
.car-shop-over-info .car-shop-item{
    margin-bottom: 0.2rem;
}
.car-shop-list{
    position: absolute;
    background: #fff;
    border: 0.02rem solid #ccc;
    left: 0;
    top: 0.7rem;
    width: 6.2rem;
    min-height:0.8rem ;
    max-height: 7rem;
    overflow: auto;
    padding: 0.2rem;
    z-index: 2018;
}
.car-shop-right-cont .car-shop-cont-title{
    display: inline-block;
    width: 3rem;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    font-size: 0.22rem;
    line-height: 0.22rem;
    color: #333;
    vertical-align: top;
}
.car-shop-right-cont .car-shop-cont-sort{
    vertical-align: top;
    display: inline-block;
    width: 3.5rem;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    font-size: 0.22rem;
    line-height: 0.22rem;
    color: rgb(150, 150, 150);
}
.car-shop-over-info .car-shop-right-cont{
    float: left;
    margin-left: 0.3rem;
    padding-top: 0.1rem;
    line-height: 0.4rem;
    width: 4.3rem;
}
.car-shop-right-cont .car-shop-del{
    color: #333;
}
.car-shop-img{
    height: 0.8rem;
    width: 0.8rem;
    float: left;
}

/*订单列表开始  */
.order-img{
    height: 0.8rem;
    width: 0.8rem;
    float: left;
}
.order-over-info .order-right-cont{
    float: left;
    padding-top: 0.1rem;
    margin-left: 0.3rem;
    line-height: 0.4rem;
    width: 4.3rem;
}
.order-right-cont .order-del{
    color: #333;
}
.order-right-cont .order-cont-title{
    display: inline-block;
    width: 3rem;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    font-size: 0.22rem;
    line-height: 0.22rem;
    color: #333;
    vertical-align: top;
}
.order-right-cont .order-cont-sort{
    vertical-align: top;
    display: inline-block;
    width: 3.5rem;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
    font-size: 0.22rem;
    line-height: 0.22rem;
    color: rgb(150, 150, 150);
}
.order-over-info{
    overflow: hidden;
}
.order-title{
    display: flex;
    line-height: 0.5rem;
    justify-content:space-between;
}
.order-list{
    position: absolute;
    border: 0.02rem solid #ccc;
    background: #fff;
    width: 6.2rem;
    right: 0;
    top: 0.7rem;
    z-index: 2018;
    padding: 0.2rem;
    min-height:0.8rem ;
    max-height: 7rem;    
}
.order{
    position: relative;
}
.order-title h3{
    color: rgb(150,150,150);
    font-size: 0.2rem;
}
.order-title span{
    color: #f00;
    font-size: 0.2rem;
}
/* 订单列表结束 */
.user-data .user-relate{
    color: #333;
    text-align: left;
    padding: 0.2rem;
}
.avatar-info{
    display: inline-block;
    margin:0.1rem 0 0 0.3rem;
}
.avatar-info h2{
    line-height: 0.5rem;
}
.avatar{
    height: 1.12rem;
    width: 1.12rem;
    border-radius: 100%;
    vertical-align: top;
}
.user-data{
    position: absolute;
    border: 0.02rem solid #ccc;
    background: #fff;
    top: 0.7rem;
    left: 0;
    width: 4rem;
    z-index: 99;
    text-align:right;
    padding: 0 0.3rem 0.5rem 0.3rem;
}
.user-data .close{
    color: #333;
    padding: 0.1rem;
}
.mall-header-frame{
    width: 100%;
    min-width: 26rem;
    height: 0.7rem;
    background: #F5F5F5;
    border-bottom:0.02rem solid #ccc;
}
.mall-header-cont{
    width: 24rem;
    margin: 0 auto;
    height: 0.7rem;
    display: flex;
    justify-content:space-between;
}
.user-info{
    display: flex;
}
.my-data a{
    color: rgb(150, 150, 150);
}
.user-info li,a{
    font-size: 0.24rem;
    cursor: pointer;
}
.user-name{
    position: relative;
    padding-right:0.2rem;
    color: rgb(150,150,150);
}
.user-info li .vip{
    margin-left: 0.05rem;
    border-radius: 100%;
    color: #f40;
    font-size: 0.2rem;
    padding: 0.01rem 0;
}
.user-name:hover,
.my-data:hover{
    background: #fff;
    padding: 0 0.3rem;
    color: #f40;
}
.user-name,
.my-data{
    padding: 0 0.3rem;
    margin-right: 0.2rem;
}
.user-register a{
    color: rgb(150,150,150);
}
.user-register a:hover{
    color: #f40;
}
.user-menu{
    display: flex;
}
.menu-item{
    line-height: 0.7rem;
    margin-left: 0.3rem;
    padding: 0 0.2rem;
    font-size: 0.24rem;
    color: rgb(150,150,150);
}
.go-login{
    margin-right: 0.2rem;
}
.go-login a{
    color: #f40;
}
.menu-item:hover{
    cursor: pointer;
    background: #fff;
    color: #f40;
}
.iconfont{
    font-size: 0.22rem;
    padding-left:0.1rem; 
}
.user-info li{
    line-height: 0.7rem;
}
.menu-item a{
    color:rgb(150,150,150)
}
.menu-item:hover a{
    color: #f40;
}
</style>
