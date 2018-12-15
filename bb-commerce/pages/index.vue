<template>
  <div class="page-frame">
    <mall-header></mall-header>
    <search-product></search-product>
    <mall-nav></mall-nav>
    <carousel-map></carousel-map>
    <div class="page-cont">
      <div class="life-research">
        <div class="life-title">
          <h1 class="life-title-word">发现属于你的生活方式</h1>
        </div>
        <ul class="life-re-list">
          <li class="life-item" v-for="(item,index) of lifeReList" :key="index">
            <div class="life-item-left">
                <img :src="item.imgPath" alt="">
            </div>
            <div class="life-item-right">
              <h1>{{item.title}}</h1>
              <p><i class="iconfont" style="color: #13d0a7">&#xe63a;</i>人气<span>{{item.popNumber}}</span></p>
            </div>
          </li>
        </ul>
      </div>
      <div class="good-stuff">
        <div class="good-stuff-title">
          <h1 class="good-stuff-title-word">与品质生活不期而遇</h1>
          <div class="more">
            更多<i class="iconfont">&#xe678;</i>
          </div>
        </div>
        <ul class="good-stuff-list">
          <li class="good-stuff-item" v-for="(item,index) of goodStuffList" :key="index">
            <div class="good-stuff-img">
              <img :src="item.imgPath" alt="">
              <i class="discount" v-if="item.discount">享{{item.discountNum}}折</i>
            </div>
            <div class="good-stuff-info">
              <i class="good-stuff-volume"
              v-if="item.coupon"></i>
              <h1 :class="{'good-stuff-volume-none':item.style}">{{item.goodName}}</h1>
              <p>{{item.goodSynopsis}}</p>
              <i class="money">￥</i><span class="money-word">{{item.price}}</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="love-shopping">
        <div class="love-shopping-title">
          <h1 class="love-shopping-title-word">与品质生活不期而遇</h1>
          <div class="more">
            更多<i class="iconfont">&#xe678;</i>
          </div>
        </div>
        <ul class="love-shopping-list">
          <li class="love-shopping-item" v-for="(item,index) of loveShoppingList" :key="index">
            <div class="love-shopping-img">
              <img :src="item.imgPath" alt="">
              <i class="love-shopping-discount" v-if="item.discount">享{{item.discountNum}}折</i>
            </div>
            <div class="love-shopping-info">
              <i class="love-shopping-volume" v-if="item.coupon"></i>
              <h1 :class="{'love-shopping-name-style':item.style}">{{item.goodName}}</h1>
              <p>{{item.goodSynopsis}}</p>
              <i class="love-shopping-money">￥</i><span class="love-shopping-money-word">{{item.price}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="snatch-frame">
        <div class="snatch-title">
          <h1 class="snatch-title-word">好生活“抢”出来</h1>
          <div class="more">
            更多<i class="iconfont">&#xe678;</i>
          </div>
        </div>
        <ul class="snatch-cont-list">
          <li class="snatch-item" v-for="(item,index) of snatchList" :key="index">
            <div class="snatch-goods-left"
            @mouseover="snatchIconShow=index"
            @mouseout="snatchIconShow=-1">
              <i class="snatch-discount" v-if="item.discount">享{{item.discountNum}}折</i>
              <div class="snatch-img">
                <img :src="item.imgPath" alt="">
              </div>
              <transition name="slide-fade">
                <div class="search-icon"
                v-if="snatchIconShow==index">
                </div>
              </transition>
            </div>
            <div class="snatch-goods-right">
              <h1><i class="snatch-volume" v-if="item.coupon"></i>{{item.goodName}}</h1>
              <p>优惠期间在线抢购</p>
              <i class="price-icon">￥</i><span class="price-money">{{item.price}}</span>
              <span class="original-price">￥{{item.originalPrice}}</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="fashion-frame">
        <div class="fashion-left">
          <div class="fashion-title">
            <h1 class="fashion-title-word">要选择有腔调的生活</h1>
            <div class="more">
              更多<i class="iconfont">&#xe678;</i>
            </div>
          </div>
          <ul class="fashion-list">
            <li class="fashion-item"
            v-for="(item,index) of fashionList"
            :key="index"
            :class="{'no-border':index==0}">
              <div class="fashion-item-title">
                <h1>{{item.title}}</h1>
                <p>{{item.introd}}</p>
              </div>
              <div class="fashion-item-img">
                <img class="fashion-img-one" :src="item.imgPathOne" alt="">
                <img class="fashion-img-two" :src="item.imgPathTwo" alt="">
              </div>
            </li>
          </ul>
        </div>
        <div class="fashion-right">
          <div class="fashion-right-img">
            <img src="~/static/image/AD0IjI.jpg" alt="">
            <div class="fashion-right-img-word">
              <h1>热卖</h1>
              <h1>新品</h1>
              <h2>海量钜惠</h2>
              <h2>带回家</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="guess-love-frame">
        <div class="guess-love-title">
          <h1 class="guess-love-title-word">相信总有一款适合你</h1>
          <div class="more">
            更多<i class="iconfont">&#xe678;</i>
          </div>
        </div>
        <ul class="guess-love-goods-list">
          <li class="guess-love-goods-item"
          v-for="(item,index) of guessList"
          :key="index"
          :class="{'none-border-right':index%5==4}">
            <div class="guess-love-goods-img">
              <img :src="item.imgPath" alt="">
              <i class="guess-love-discount"
              v-if="item.discount">享9折</i>
            </div>
            <div class="guess-love-goods-info">
              <h1 :class="{'guess-love-goods-info-word':item.style}"><i class="guess-love-volume"
              v-if="item.coupon"></i>{{item.goodName}}</h1>
              <p>{{item.goodSynopsis}}</p>
              <i class="money-icont">￥</i><span class="money">{{item.price}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <side-nav></side-nav>
    <mall-icon></mall-icon>
    <mall-footer></mall-footer>
    <msg-box
    :showMsg="showMsg"
    v-on:closeMsg="closeMsg">
      <div slot="msg-cont">提示内容！</div>
      <button slot="fun-btn" class="confirm"
      @click="confirm">确定</button>
    </msg-box>
  </div>
</template>

<script>
import carouselMap from "~/components/index/mallCarouselMap.vue"
import mallFooter from "~/components/common/mallFooter"
import mallHeader from "~/components/common/mallHeader"
import mallIcon from "~/components/common/mallIcon"
import sideNav from "~/components/common/sideNav.vue"
import searchProduct from "~/components/common/searchProduct.vue"
import mallNav from "~/components/common/mallNav.vue"
import msgBox from "~/components/common/msgBox.vue"
export default {
  data() {
    return {
      showMsg:true,
      snatchIconShow:-1,
      lifeReList:[
        {title:"囤货小当家",popNumber:"920720",imgPath:require("~/static/image/life1.png")},
        {title:"吃货的后裔",popNumber:"920720",imgPath:require("~/static/image/life2.png")},
        {title:"厨艺达人",popNumber:"920720",imgPath:require("~/static/image/life3.png")},
        {title:"生活小贴士",popNumber:"920720",imgPath:require("~/static/image/life4.png")}
      ],
      goodStuffList:[
        {imgPath:require("~/static/image/haohuo1.jpg"),goodName:"小户型北欧矮床抽屉",goodSynopsis:"现代简约榻榻米床多功能床",price:"350.09",coupon:true,discount:true,style:false,discountNum:9},
        {imgPath:require("~/static/image/haohuo2.jpg"),goodName:"防滑居家室内静音棉拖鞋",goodSynopsis:"日式冬季情侣家居拖鞋厚底",price:"17.09",coupon:false,discount:false,style:true,discountNum:9},
        {imgPath:require("~/static/image/haohuo3.jpg"),goodName:"方便面米饭汤碗陶瓷碗",goodSynopsis:"创意可爱小花 带盖烤碗泡面碗",price:"350.09",coupon:true,discount:true,style:false,discountNum:9},
        {imgPath:require("~/static/image/haohuo4.jpg"),goodName:"日式折叠沙发床飘窗躺椅",goodSynopsis:"日式折叠沙发床飘窗躺椅",price:"288.99",coupon:false,discount:false,style:true,discountNum:9},
        {imgPath:require("~/static/image/haohuo5.jpg"),goodName:"硅胶热水袋注水暖手宝",goodSynopsis:"硅胶热水袋注水暖手宝",price:"28.09",coupon:true,discount:false,style:false,discountNum:9},
        {imgPath:require("~/static/image/haohuo6.jpg"),goodName:"全棉针织棉枕头套",goodSynopsis:"硅胶热水袋注水暖手宝",price:"108.00",coupon:false,discount:false,style:true,discountNum:9},
        {imgPath:require("~/static/image/haohuo1.jpg"),goodName:"小户型北欧矮床抽屉",goodSynopsis:"现代简约榻榻米床多功能床",price:"350.09",coupon:true,discount:false,style:false,discountNum:9},
        {imgPath:require("~/static/image/haohuo2.jpg"),goodName:"小户型北欧矮床抽屉",goodSynopsis:"现代简约榻榻米床多功能床",price:"350.09",coupon:false,discount:false,style:true,discountNum:9}
      ],
      loveShoppingList:[
        {imgPath:require("~/static/image/aiguang1.jpg"),goodName:"白色中长款高领套头毛衣",goodSynopsis:"秋冬装韩版宽松加厚长袖",price:"350.09",coupon:true,discount:true,style:false,discountNum:9},
        {imgPath:require("~/static/image/aiguang2.jpg"),goodName:"韩版宽松bf棉衣外套",goodSynopsis:"新款冬季韩国面包服棉服短款",price:"17.09",coupon:false,discount:false,style:true,discountNum:9},
        {imgPath:require("~/static/image/aiguang3.jpg"),goodName:"蝙蝠袖斗篷薄少女短外套",goodSynopsis:"原创设计森女部落秋冬女装",price:"350.09",coupon:true,discount:true,style:false,discountNum:9},
        {imgPath:require("~/static/image/aiguang4.jpg"),goodName:"粗线宽松茧型外套开衫",goodSynopsis:"网红软妹小清新毛衣",price:"288.99",coupon:false,discount:false,style:true,discountNum:9},
        {imgPath:require("~/static/image/aiguang5.jpg"),goodName:"学生宽松套秋季可爱外套",goodSynopsis:"连帽秋季卫衣女韩版潮流",price:"28.09",coupon:true,discount:false,style:false,discountNum:9},
        {imgPath:require("~/static/image/aiguang6.jpg"),goodName:"中长款牛角扣宽松呢大衣",goodSynopsis:"云上生活毛外套",price:"108.00",coupon:false,discount:false,style:true,discountNum:9},
        {imgPath:require("~/static/image/aiguang1.jpg"),goodName:"小户型北欧矮床抽屉",goodSynopsis:"现代简约榻榻米床多功能床",price:"350.09",coupon:true,discount:false,style:false,discountNum:9},
        {imgPath:require("~/static/image/aiguang2.jpg"),goodName:"小户型北欧矮床抽屉",goodSynopsis:"现代简约榻榻米床多功能床",price:"350.09",coupon:false,discount:false,style:true,discountNum:9}
      ],
      snatchList:[
        {imgPath:require("~/static/image/AD0IjP6z.jpg"),goodName:"卡通叮当布艺收纳九宫格双层衣柜整理盒",price:"350.09",originalPrice:"458.55", coupon:true,discount:true,discountNum:9},
        {imgPath:require("~/static/image/AD0IjP6z.jpg"),goodName:"卡通叮当布艺收纳九宫格双层衣柜整理盒",price:"350.09",originalPrice:"458.55", coupon:true,discount:true,discountNum:9},
        {imgPath:require("~/static/image/AD0IjP6z.jpg"),goodName:"卡通叮当布艺收纳九宫格双层衣柜整理盒",price:"350.09",originalPrice:"458.55", coupon:true,discount:true,discountNum:9}
      ],
      fashionList:[
        {imgPathOne:require("~/static/image/AD0IjP6zBxACGA.jpg"),imgPathTwo:require("~/static/image/AD0IjP6zBxAC.jpg"),title:"腔调",introd:"全球创意设计师平台"},
        {imgPathOne:require("~/static/image/AD0IjP6zBxACG.jpg"),imgPathTwo:require("~/static/image/AD0IjP.jpg"),title:"全球购",introd:"探索全球美好生活"},
        {imgPathOne:require("~/static/image/AD0IjP6zf.jpg"),imgPathTwo:require("~/static/image/AD0IjP6zBxA.jpg"),title:"美丽惠",introd:"奢品好物立即购"},
      ],
      guessList:[
        {imgPath:require("~/static/image/aiguang1.jpg"),goodName:"白色中长款高领套头毛衣",goodSynopsis:"秋冬装韩版宽松加厚长袖",price:"350.09",coupon:true,discount:true,style:false,discountNum:9},
        {imgPath:require("~/static/image/aiguang2.jpg"),goodName:"韩版宽松bf棉衣外套",goodSynopsis:"新款冬季韩国面包服棉服短款",price:"17.09",coupon:false,discount:false,style:true,discountNum:9},
        {imgPath:require("~/static/image/aiguang3.jpg"),goodName:"蝙蝠袖斗篷薄少女短外套",goodSynopsis:"原创设计森女部落秋冬女装",price:"350.09",coupon:true,discount:true,style:false,discountNum:9},
        {imgPath:require("~/static/image/aiguang4.jpg"),goodName:"粗线宽松茧型外套开衫",goodSynopsis:"网红软妹小清新毛衣",price:"288.99",coupon:false,discount:false,style:true,discountNum:9},
        {imgPath:require("~/static/image/aiguang5.jpg"),goodName:"学生宽松套秋季可爱外套",goodSynopsis:"连帽秋季卫衣女韩版潮流",price:"28.09",coupon:true,discount:false,style:false,discountNum:9},
        {imgPath:require("~/static/image/aiguang6.jpg"),goodName:"中长款牛角扣宽松呢大衣",goodSynopsis:"云上生活毛外套",price:"108.00",coupon:false,discount:false,style:true,discountNum:9},
        {imgPath:require("~/static/image/aiguang1.jpg"),goodName:"小户型北欧矮床抽屉",goodSynopsis:"现代简约榻榻米床多功能床",price:"350.09",coupon:true,discount:false,style:false,discountNum:9}
      ]
    }
  },
  components: {
    carouselMap,
    mallFooter,
    mallHeader,
    mallIcon,
    sideNav,
    searchProduct,
    mallNav,
    msgBox
  },
  methods:{
    confirm(){
      this.showMsg=false;
    },
    closeMsg(status){
      this.showMsg=status;
    },
    login(){
      this.$router.push({path:"/login"});
    },
    register(){
      this.$router.push({path:"/register"});
    }
  },
  computed:{

  }
}
</script>

<style scoped>
.confirm{
  line-height: 0.7rem;
  padding: 0 0.4rem;
  background: #fff;
  color: #ccc;
  border: 0.01rem solid #ccc;
  border-radius: 0.1rem;
}
.confirm:hover{
  color:#333;
}
/* 猜你喜欢 */
.guess-love-goods-info .guess-love-goods-info-word{
  padding-left: 0;
}
.guess-love-goods-list .none-border-right{
  border-right: 0;
}
.guess-love-volume{
  position: absolute;
  display: block;
  top: 0.15rem;
  left: 0;
  width: 0.84rem;
  height: 0.5rem;;
  background: url("../static/image/vbg01.png");
  background-position: -1298px -939px;
}
.money-icont{
  color: #ff6637;
  font-size: 0.4rem;
  padding: 0 0.1rem 0 0;
}
.guess-love-goods-info .money{
  color: #ff6637;
  font-size: 0.4rem;
}
.guess-love-goods-info h1{
  position: relative;
  padding-top:0.1rem;
  line-height: 0.6rem;
  font-size: 0.3rem;
  padding-left: 0.84rem;
  width: 3.98rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.guess-love-goods-info p{
  margin-bottom: 0.2rem;
  color: #ccc;
  width: 3.98rem;
  line-height: 0.28rem;
  font-size: 0.26rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.guess-love-goods-info{
  width: 3.98rem;
  height: 1.7rem;
  text-align: left;
}
.guess-love-goods-img img{
  height: 3.98rem;
  width: 3.98rem;
  transition-property:width height;
  transition-duration:0.5s;
  transition-timing-function:ease;
}.guess-love-goods-img img:hover{
  margin-top: -0.3rem;
  margin-left: -0.3rem;
  height: 4.58rem;
  width: 4.58rem;
}
.guess-love-discount{
  position:absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 0.2rem;
  background: #f13a3a;
  padding: 0.1rem 0.1rem;
}
.guess-love-goods-img{
  position: relative;
  overflow: hidden;
  height: 3.98rem;
  width: 3.98rem;
}
.guess-love-goods-item{
  text-align: center;
  width: 4.74rem;
  height: 6.5rem;
  padding: 0.6rem 0.38rem 0.18rem 0.4rem;
  border-right: 0.02rem solid #ccc;
  border-bottom: 0.02rem solid #ccc;
}
.guess-love-goods-list{
  display: flex;
  flex-wrap: wrap;
}
.guess-love-title-word{
  color: #ccc;
  font-size: 0.2rem;
  padding-left: 2.7rem;
  padding-top:0.5rem;
}
.guess-love-title{
  position: relative;
  background: url("../static/image/AD0IjP6zA.jpg") no-repeat;
  height: 0.96rem;
  border-bottom: 0.02rem solid #ccc;
}

.guess-love-frame{
  background: #fff;
  width: 23.75rem;
  margin-top: 0.6rem;
  border: 0.02rem solid #ccc;
}
/* 猜你喜欢结束 */
/* 时尚会场 */
.fashion-img-one{
  padding-right:0.3rem;
  width:2rem;
  margin-right: 0.3rem;
}
.fashion-img-two{
  max-width: 1.8rem;
  max-height: 3rem;
  }
.fashion-item-img{
  text-align: center;
  line-height: 3.1rem;
  width: 100%;
  height: 3.1rem;
}
.fashion-list{
  display: flex;
}
.fashion-item-title{
  height: 1rem;
  width: 100%;
}
.fashion-item-title h1{
  color: #333;
  font-size:0.3rem;
  margin-bottom: 0.3rem;
}
.fashion-item-title p{
  color:#ccc;
  font-size: 0.24rem;
}
.fashion-item{
  flex: 1;
  height: 5.04rem;
  border-left:0.02rem solid #ccc;
  padding: 0.7rem 0 0.2rem 0.3rem;
}
.fashion-title-word{
  padding-top:0.5rem;
  color: #ccc;
  font-size: 0.2rem;
  padding-left: 2.7rem;
}
.fashion-title{
  position: relative;
  background: url("../static/image/AD0I.jpg") no-repeat;
  height: 0.96rem;
  border-bottom: 0.02rem solid #ccc;
}
.fashion-frame{
  display: flex;
  background: #fafafa;
  width: 23.75rem;
  margin-top: 0.6rem;
}
.fashion-left{
  width: 16.75rem;
  border: 0.02rem solid #ccc;
  background: #fff;
}
.fashion-right-img-word{
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
}
.fashion-right-img-word h1,h2{
  color: #fff;
}
.fashion-right-img-word h1{
  margin-bottom: 0.2rem;
  font-weight: 600;
  font-size: 0.8rem;
  text-align: left;
}
.fashion-right-img-word h2{
  font-size: 0.4rem;
  text-align: left;
  margin-bottom: 0.1rem;
}
.fashion-right-img{
  position: relative;
  height: 5.6rem;
  width: 5.7rem;
  text-align: center;
}
.fashion-right-img img{
  height: 100%;
}
.fashion-right{
  padding: 0.2rem 0.4rem;
  margin-left: 0.5rem;
  background: #fff;
  height: 6rem;
  width: 6.5rem;
  border: 0.02rem solid #ccc;
}

/* 时尚会场结束 */
/* 惠抢购 */
.original-price{
  color: #ccc;
  font-size: 0.24rem;
  padding-left: 0.2rem;
  text-decoration: line-through;
}
.price-icon{
  color: #f13a3a;
  font-size: 0.24rem;
  padding-right: 0.1rem;
}
.price-money{
  color: #f13a3a;
  font-size: 0.4rem;
}
.snatch-goods-right p{
  color: #ccc;
  font-size: 0.24rem;
  margin-bottom: 0.2rem;
}
.snatch-goods-right h1{
  position: relative;
  line-height: 0.5rem;
  text-indent: 0.9rem;
  cursor: pointer;
  height: 1rem;
  text-overflow: ellipsis;
  color: #333;
  margin-bottom:0.4rem;
}
.snatch-goods-right h1:hover{
  color: #f13a3a;
}
.snatch-volume{
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 0.84rem;
  height: 0.5rem;
  cursor: pointer;
  background: url("../static/image/vbg01.png");
  background-position: -1298px -939px;
}
.search-icon{
  position: absolute;
  height: 1.3rem;
  width: 1.3rem;
  top: 50%;
  left: 50%;
  margin-left: -0.65rem;
  margin-top: -0.65rem;
  border-radius: 100%;
  background: url("../static/image/imageEffetc_magnifier.png") center no-repeat;
}
.snatch-img img{
  width: 3.6rem;
  height: 3.6rem;;
}
.snatch-discount{
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 0.22rem;
  padding: 0.05rem 0.1rem;
  background: #f13a3a;
}
.snatch-goods-left{
  position: relative;
  width: 3.6rem;
  height: 3.6rem;
}
.snatch-goods-right{
  padding-top: 0.65rem;
  padding-left: 0.2rem;
  width: 3.6rem;
  height: 3.6rem;
}
.snatch-item{
  display: flex;
  height: 4.15rem;
  width:7.7rem;
  padding: 0.3rem 0.2rem;
  }
.snatch-cont-list{
  display: flex;
  flex-wrap: wrap;
  padding: 0rem 0.3rem 0.2rem 0.3rem;
}
.snatch-title-word{
  width: 10rem;
  padding: 0.5rem 0 0 2rem;
  color: #ccc;
  font-size: 0.2rem;
}
.snatch-title{
  position: relative;
  overflow: hidden;
  height: 0.96rem;
  width: 23.7rem;
  background: url("../static/image/snatch.jpg") no-repeat;
}
.snatch-frame{
  margin-top: 0.6rem;
  height: 5.34rem;
  width: 23.75rem;
  background: #fff;
  border: 1px solid #ccc;
}
/* 惠抢购结束 */
.more{
  position: absolute;
  right: 0rem;
  top: 0rem;
  height: 0.96rem;
  line-height: 0.96rem;
  padding-right:0.8rem; 
  color: #ccc;
  font-family: "宋体";
  font-size: 0.24rem;
  cursor: pointer;
}
.more i{
  font-size: 0.24rem;
  padding-left: 0.1rem;
}
/* 爱逛街 */
.love-shopping-info .love-shopping-name-style{
  margin-left:0;
  width: 3.4rem; 
}
.love-shopping-info .love-shopping-money{
  font-size: 0.4rem;
  color: #ff4466;
  padding-right: 0.1rem;
}
.love-shopping-info .love-shopping-money-word{
  font-size: 0.4rem;
  color: #ff4466;
}
.love-shopping-info p{
  margin: 0.1rem 0;
  color:#999999;
  width: 3.4rem;
  line-height: 0.28rem;
  font-size: 0.26rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.love-shopping-info h1{
  width: 2.6rem;
  cursor: pointer;
  margin-left: 0.84rem; 
  color: #555555;
  font-size: 0.28rem;
  line-height: 0.55rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.love-shopping-volume{
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 0.5rem;
  width: 0.84rem;
  cursor: pointer;
  background: url("../static/image/vbg01.png");
  background-position: -1298px -939px;
}
.love-shopping-info{
  position: relative;
  width: 3.4rem;
  margin-top:0.2rem; 
  height: 1.4rem;
}
.love-shopping-img{
  position: relative;
  height: 3.4rem;
  width: 3.4rem;
  overflow: hidden;
}
.love-shopping-discount{
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 0.2rem;
  color:#fff;
  padding: 0.07rem;
  background: #ff6537;
}
.love-shopping-img img{
  height: 3.4rem;
  width: 3.4rem;
  transition-property:width height;
  transition-duration:0.5s;
  transition-timing-function:ease;
}
.love-shopping-img img:hover{
  margin-left: -0.2rem;
  margin-top:-0.2rem;
  height: 3.8rem;
  width: 3.8rem;
}
.love-shopping-item{
  height: 5.6rem;
  width:3.85rem;
  padding: 0.3rem 0.2rem;
}
.love-shopping-list{
  display: flex;
  flex-wrap: wrap;
  padding: 0rem 0.3rem 0.2rem 0.3rem;
}
.love-shopping-title-word{
  width: 10rem;
  padding: 0.5rem 0 0 2rem;
  color: #ccc;
  font-size: 0.2rem;
}
.love-shopping-title{
  position: relative;
  overflow: hidden;
  height: 0.96rem;
  width: 23.75rem;
  background: url("../static/image/lovevisit.jpg") no-repeat;
}
.love-shopping{
  background: #fff;
  width: 23.75rem;
  border: 0.02rem solid rgb(238, 238, 238);
  margin-top: 0.6rem;
}
/* 爱逛街over */
/* 有好货 */
.good-stuff-info .money{
  font-size: 0.4rem;
  color: #2cadf8;
  padding-right: 0.1rem;
}
.good-stuff-info .money-word{
  font-size: 0.4rem;
  color: #2cadf8;
}
.good-stuff-info p{
  margin: 0.1rem 0;
  color:#999999;
  width: 3.4rem;
  line-height: 0.28rem;
  font-size: 0.26rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.good-stuff-info h1{
  width: 2.6rem;
  cursor: pointer;
  margin-left: 0.84rem; 
  color: #555555;
  font-size: 0.28rem;
  line-height: 0.55rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.good-stuff-info .good-stuff-volume-none{
  margin-left:0; 
}
.good-stuff-volume{
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 0.5rem;
  width: 0.84rem;
  cursor: pointer;
  background: url("../static/image/vbg01.png");
  background-position: -1298px -1125px;
}
.good-stuff-info{
  position: relative;
  width: 3.4rem;
  margin-top:0.2rem; 
  height: 1.4rem;
}
.good-stuff-img{
  position: relative;
  height: 3.4rem;
  width: 3.4rem;
  overflow: hidden;
}
.discount{
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 0.2rem;
  color:#fff;
  padding: 0.07rem;
  background: #00a0e9;
}
.good-stuff-img img{
  height: 3.4rem;
  width: 3.4rem;
  transition-property:width height;
  transition-duration:0.5s;
  transition-timing-function:ease;
}
.good-stuff-img img:hover{
  margin-left: -0.2rem;
  margin-top:-0.2rem;
  height: 3.8rem;
  width: 3.8rem;
}
.good-stuff-item{
  height: 5.6rem;
  width:3.85rem;
  padding: 0.3rem 0.2rem;
}
.good-stuff-list{
  display: flex;
  flex-wrap: wrap;
  padding: 0rem 0.3rem 0.2rem 0.3rem;
}
.good-stuff-title-word{
  padding: 0.5rem 0 0 2rem;
  color: #ccc;
  font-size: 0.2rem;
}
.good-stuff-title{
  position: relative;
  overflow: hidden;
  height: 0.96rem;
  width: 23.75rem;
  background: url("../static/image/goodGoods.jpg") no-repeat;
}
.good-stuff{
  background: #fff;
  width: 23.75rem;
  border: 0.02rem solid rgb(238, 238, 238);
  margin-top: 0.6rem;
}
/* 有好货结束 */
/* 生活研究所 */
.life-item-right p i{
  padding:0 0.1rem 0 0.1rem;
}
.life-item-right p,i{
  color: #ccc;
  font-size: 0.24rem;
}
.life-item-right h1{
  color:#333;
  font-size: 0.31rem;
  padding-bottom:0.2rem; 
}
.life-item-left img{
  border-radius: 100%;
}
.life-item-left{
  height: 2.7rem;
  width: 2rem;
  padding-top:0.26rem; 
  padding-left:0.3rem; 
}
.life-item-right{
  height: 2.7rem;
  padding-top:0.9rem; 
  padding-left:0.3rem; 
}
.life-re-list{
  display: flex;
  height: 2.7rem;
}
.life-item{
  cursor: pointer;
  flex: 1;
  height: 2.7rem;
  display: flex;
}
.life-title-word{
  font-size: 0.2rem;
  margin-left:3.6rem; 
  padding: 0.5rem 0 0 0;
  color: #ccc;
}
.life-title{
  height: 0.96rem;
  background: url("../static/image/lifeTitle.jpg")
}
.life-research{
  height: 3.66rem;
  border: 0.02rem solid rgb(238, 238, 238);
  margin-top: 0.6rem;
  background: #fff;
  width: 23.75rem;
}
/* 生活研究所结束 */
.page-frame{
  width: 100%;
  min-width: 26rem;
  background: #fafafa;
}
.page-cont{
  width: 24rem;
  margin: 0 auto;
}
.no-border{
  border: 0;
}
/* 动画 */
.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .6s ease;
}
.slide-fade-enter, .slide-fade-leave-to{
  opacity: 0;
}
</style>
