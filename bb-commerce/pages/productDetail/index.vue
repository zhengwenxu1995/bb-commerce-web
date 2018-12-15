<template>
  <div class="goods-info-frame">
    <mall-header></mall-header>
    <search-product></search-product>
    <side-nav></side-nav>
    <mall-nav :nowShowMenuItem="nowShowMenuItem"
    :showNavMenuItem="false"
    @changeShowMenu="changeShowMenu"
    ></mall-nav>
    <div class="goods-info-cont">
      <div class="goods-show">
        <div class="goods-show-left">
          <div class="goods-img-show">
            <img :src="nowShowGoods" alt="">
          </div>
          <div class="goods-icon-show">
            <div class="goods-icon-show-cont">
              <div class="goods-icon-show-frame">
                <div class="thumbnail-frame">
                  <ul class="thumbnail-cont-list"
                  :style="{width:thumbnailWidht+'rem',left:showthumbnailIndex*-8+'rem'}">
                    <li class="thumbnail-cont"
                    v-for="(item,index) of thumbnailLlis"
                    :key="index">
                      <ul class="thumbnail-list">
                        <li class="thumbnail-item"
                        @mousemove="changeGoodsImg(item.icon)"
                        v-for="(item,index) of item.thumbnailItem"
                        :key="index"><img :src="item.icon" alt="">
                        </li>
                      </ul>
                    </li>
                  </ul>
              </div>
              <div class="swiper-button-prev iconfont"
              @click="showThumbnail('less')">&#xe67c;</div>
              <div class="swiper-button-next iconfont"
              @click="showThumbnail('add')">&#xe678;</div>
              </div>
            </div>
          </div>
        </div>
        <div class="goods-show-right">
          <div class="goods-show-info-cont">
            <h1 class="goods-title">粗线宽松茧型外套开衫</h1>
            <div class="activity">
              <i class="iconfont countdown">&#xe614;</i>
              <span class="activity-word">距离活动结束仅剩：</span>
              <span class="acitvity-time">23天10小时12分03秒</span>
            </div>
            <div class="price">
              <h1 class="market-price">市场价：<span><i>￥</i>198.00</span></h1>
              <h1 class="original-price">价格：<span><i>￥</i>118.00</span></h1>
              <div class="after-discount">
                <span class="discount-word">促销价:</span>
                <p><span class="clinch-price"><strong>￥</strong>106.20</span></p>
                <i class="discount">享9折</i>
              </div>
              <div class="offer">
                <div class="offer-left">
                  <span>优惠:</span>
                </div>
                <div class="offer-right">
                  <ul>
                    <li class="offer-item"><i class="volume"></i>10元优惠券，满59可用</li>
                    <li class="offer-item"><i class="volume"></i>10元优惠券，满59可用</li>
                    <li class="volume-more" @click="volumeMore"><span>更多</span></li>
                  </ul>
                </div>
              </div>
              <div class="goods-number">
                <span>购买数量:</span>
                <input type="text" v-model="goodsNumber">
                <div class="goods-number-btn">
                  <button class="iconfont add-btn"
                  @click="numberChange('add')">&#xe6b0;</button>
                  <button class="iconfont less-btn"     
                  :disabled="btnAvailable"
                  @click="numberChange('less')">&#xe6aa;</button>
                </div>
              </div>
              <div class="goods-car-shop">
                <button class="car-shop-btn"
                @click="addShopCar"><i class="iconfont">&#xe622;</i>加入购物车</button>
                <button class="buy-btn"
                @click="nowBuy">立即购买</button>
              </div>
              <ul class="goods-icon-list">
                <li class="icon-list"><i class="iconfont">&#xe641;</i>收藏</li>
                <li class="icon-list"><i class="iconfont">&#xe629;</i>商品保证</li>
                <li class="icon-list"><i class="iconfont">&#xe629;</i>正品保证</li>
                <li class="icon-list"><i class="iconfont">&#xe629;</i>快速发货</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="goods-relat">
        <ul class="relat-title">
          <li :class="{select:showGoodsRelat}"
          @click="relatShowItem(true)">
            产品评论({{commentList.length}})
          </li>
          <li
          @click="relatShowItem(false)"
          :class="{select:!showGoodsRelat}">
            产品详情
          </li>
        </ul>
        <div class="goods-comment"
        v-if="showGoodsRelat">
          <ul class="comment-list">
            <li class="comment-item"
            v-for="(item,index) of commentList"
            :key="index">
              <div class="user-info">
                <img :src="item.userAvatar" alt="">
                <h1>{{item.userName}}</h1>
              </div>
              <div class="comment-cont">
                <div class="comment-star"><i class="iconfont"
                v-for="indexs of item.commentStar"
                :key="indexs">&#xe634;</i></div>
                <p class="comment-msg">
                  {{item.commentCont}}
                </p>
                <p class="comment-time">{{item.commentTime}}</p>
              </div>
            </li>
            <li class="none-comment"
            v-if="commentList.length==0">
              暂没有评论
            </li>
          </ul>
          <ul class="comment-page-btn"
          v-if="commentList.length>0">
            <li class="page-item">
              <button class="pre-btn"
              @click="pageTurning('less')"><i class="iconfont">&#xe67c;</i>上一页</button>
            </li>
            <li class="page-item"
            v-if="pageOption.pageTotal>=1">
              <button class="page-number">1</button>
            </li>
            <li class="page-item"
            v-if="pageOption.pageTotal>=2">
              <button class="page-number">2</button>
            </li>
            <li class="page-item"
            v-if="pageOption.pageTotal>=4">
              <button class="page-number">……</button>
            </li>
            <li class="page-item"
            v-if="pageOption.pageTotal>=3">
              <button class="page-number">
                <span v-if="pageOption.pageTotal>100">100+</span>
                <span v-if="pageOption.pageTotal<=100">{{pageOption.pageTotal}}</span>
              </button>
            </li>
            <li class="page-item">
              <button class="next-btn"
              @click="pageTurning('add')">下一页<i class="iconfont">&#xe678;</i></button>
            </li>
          </ul>
        </div>
        <div class="goods-info"
        v-if="!showGoodsRelat">
          <table>
            <tbody>
              <tr
              v-for="(item,index) of goodsInfoList"
              :key="index">
                <td class="goods-info-title">{{item.fieldNameOne}}<i v-if="item.fieldNameOne">:</i></td>
                <td class="goods-info-word">{{item.fieldContOne}}</td>
                <td class="goods-info-title">{{item.fieldNameTwo}}<i v-if="item.fieldNameTwo">:</i></td>
                <td class="goods-info-word">{{item.fieldContTwo}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="more-coupon"
    :class="{moreCouponShow:moreCouponStatus==true}">
      <div class="more-coupon-title">
        <h1>领取优惠券</h1>
        <i class="iconfont"
        @click="moreCouponStatus=false"
        style="cursor:default;">&#xe608;</i>
      </div>
      <div class="more-coupon-cont" ref="wrapper">
        <ul class="more-coupon-list">
          <li v-for="(item,index) of moreCouponInfo" :key="index">
            <div class="more-coupon-item">
              <div class="more-coupon-left">
                 <div class="coupon-amount">
                   <i class="money-icon">￥</i>
                   <span class="money">
                    {{item.money}}
                   </span>
                   <div class="coupon-way">
                     <h2 style="font-size:0.28rem" :class="{'coupon-ok':item.coponTime==''}">满{{item.moneyAvailable}}可用</h2>
                     <!-- 类名coupon 和事件有关系 -->
                     <h2 style="font-size:0.24rem"
                     v-if="item.coponTime">{{item.coponTime}}可用</h2>
                   </div>
                 </div>
                 <h1 class="coupon-name">{{item.couponName}}</h1>
              </div>
              <div class="more-coupon-right">
                <h1
                @click="moreCoupon">
                  立即领取
                </h1>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <mall-icon></mall-icon>
    <mall-footer></mall-footer>
  </div>
</template>

<script>
  import mallFooter from "~/components/common/mallFooter"
  import mallHeader from "~/components/common/mallHeader"
  import mallIcon from "~/components/common/mallIcon"
  import sideNav from "~/components/common/sideNav.vue"
  import searchProduct from "~/components/common/searchProduct.vue"
  import mallNav from "~/components/common/mallNav.vue"
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        nowShowMenuItem:-1,
        goodsNumber:1,
        btnAvailable:true,
        thumbnailIdex:0+'rem',
        showthumbnailIndex:0,
        thumbnailLlis:[
          {
            thumbnailItem:[
              {icon:require("~/static/image/AD0IjP6zBxACGAAgr460.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAgr460.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAgr460.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAgr460.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAgr460.jpg")}
            ]
          },
          {
            thumbnailItem:[
              {icon:require("~/static/image/AD0IjP6zBxACGAAg60.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAg60.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAg60.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAg60.jpg")}
            ]
          },
          {
            thumbnailItem:[
              {icon:require("~/static/image/AD0IjP6zBxACGAAgr460.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAgr460.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAgr460.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAgr460.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAgr460.jpg")}
            ]
          },
          {
            thumbnailItem:[
              {icon:require("~/static/image/AD0IjP6zBxACGAAg60.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAg60.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAg60.jpg")},
              {icon:require("~/static/image/AD0IjP6zBxACGAAg60.jpg")}
            ]
          }
        ],
        nowShowGoods:require("~/static/image/AD0IjPffff.jpg"),
        showGoodsRelat:1,
        commentList:[
          {
            userName:"花***3",
            userAvatar:require("~/static/image/getAvatar.jpg"),
            commentStar:4,
            commentCont:"超棒 ，参加朋友的婚礼穿的，好多姐妹问我哪买的，哈哈哈超值的，质量好上个实物图",
            commentTime:"2018年10月26日"
          },
          {
            userName:"花***3",
            userAvatar:require("~/static/image/getAvatar.jpg"),
            commentStar:4,
            commentCont:"超棒 ，参加朋友的婚礼穿的，好多姐妹问我哪买的，哈哈哈超值的，质量好上个实物图",
            commentTime:"2018年10月26日"
          }
        ],
        pageOption:{
          pageTotal:100,
          pageCurrent:1
        },
        goodsInfoList:[
          {
              fieldNameOne:"商品名字",
              fieldContOne:"连帽秋季卫衣女韩版潮流",
              fieldNameTwo:"类型",
              fieldContTwo:"卫衣"
          },
          {
            fieldNameOne:"颜色",
            fieldContOne:"粉色"
          }
        ],
        moreCouponStatus:false,
        moreCouponInfo:[
          {
            money:10,
            couponName:"店铺优惠",
            coponTime:"12.3-1.3",
            moneyAvailable:500
          },
          {
            money:10,
            couponName:"店铺优惠",
            coponTime:"12.3-1.3",
            moneyAvailable:500
          },
          {
            money:10,
            couponName:"店铺优惠",
            coponTime:"",
            moneyAvailable:66
          },
          {
            money:10,
            couponName:"店铺优惠",
            coponTime:"12.3-1.3",
            moneyAvailable:500
          },
          {
            money:10,
            couponName:"店铺优惠",
            coponTime:"",
            moneyAvailable:66
          }
        ]
      }
    },
    components:{
      mallFooter,
      mallHeader,
      mallIcon,
      sideNav,  
      searchProduct,
      mallNav
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper);
    },
    watch:{
      goodsNumber(){
        if(this.goodsNumber>1){
          this.btnAvailable=false;
        }else{
          this.btnAvailable=true;
        }
      },
      showthumbnailIndex(){
        this.thumbnailIdex=(this.showthumbnailIndex-1)*-8+"rem";
      }
    },
    methods:{
      changeGoodsImg(src){
        this.nowShowGoods=src;
      },
      showThumbnail(way){
        if(way=="add"){
          if(this.thumbnailLlis.length-1>this.showthumbnailIndex){
            this.showthumbnailIndex++;
          }
        }else{
          if(this.showthumbnailIndex>0){
            this.showthumbnailIndex--;
          }
        }
        console.log(this.showthumbnailIndex);
      },
      changeShowMenu(index){
        this.nowShowMenuItem=index;
       // console.log("导航"+index)
      },
      volumeMore(){
        this.moreCouponStatus=true;
        console.log("点击了领卷更多！");
      },
      numberChange(way){
        if(way=="add"){
          this.goodsNumber++;
        }else{
          if(this.goodsNumber>1){
            this.goodsNumber--;
          }
        };
        console.log(this.commentList);
      },
      addShopCar(){
        console.log("添加购物车");
      },
      nowBuy(){
        console.log("立即购买");
      },
      relatShowItem(index){
        this.showGoodsRelat=index;
      },
      pageTurning(way){
        if(way=='add'){
          if(this.pageOption.pageCurrent<this.pageOption.pageTotal){
            this.pageOption.pageCurrent++;
          }
        }else{
          if(this.pageOption.pageCurrent>1){
            this.pageOption.pageCurrent--;
          }
        }
        console.log('翻页');
      },
      moreCoupon(){
        console.log("更多卷立即领取");
      }
    },
    computed:{
      thumbnailWidht(){
        return this.thumbnailLlis.length*8;
      }
    }
  }
</script>

<style scoped>
.coupon-ok{
  margin-top: 0.3rem;
}
.coupon-way{
  margin-top: 0.5rem;
  width:1.4rem;
  height: 0.8rem;
}
.coupon-way h2{
  overflow: hidden;
  color: #fff;
  margin-bottom: 0.1rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: .7;
}
.money-icon{
  padding-top: 0.1rem;
  color: #fff;
}
.money{
  display: block;
  width: 1.5rem;
  font-size:0.9rem;
  padding-top: 0.2rem;
  font-weight: 600;
  color: #fff;
}
.coupon-amount{
  height: 1.5rem;
  display: flex;
  padding: 0.2rem 0.1rem 0.2rem 0.6rem;
}
.coupon-name{
  margin: 0.2rem auto;
  margin-top: 0rem;
  height: 0.5rem;
  width: 3.5rem;
  padding: 0.1rem 0;
  text-align: center;
  background: #ff9d7f;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #fff;
  border-radius: 0.05rem;
  opacity: .7;
}
.more-coupon-left{
  width: 3.95rem;
}
.more-coupon-right{
  width: 0.95rem;
  color: #fff;
  border-left: 0.01rem dashed #fff;
}
.more-coupon-right h1{
  line-height: 0.4rem;
  padding:0.3rem;
  cursor: default;
}
.more-coupon-list{
  width: 7rem;
}
.more-coupon-list li{
  width: 7rem;
  height: 2.2rem;
  margin-top: 0.1rem;
  margin-bottom: 0.5rem;
}
.more-coupon-item{
  width: 4.9rem;
  height: 2.2rem;
  margin: 0 auto;
  background-image: url("../../static/image/morecoup.png");
  background-size: 100%;
  display: flex;
}
.more-coupon-cont{
  width: 7rem;
  margin: 0.25rem auto;
  height: 8.5rem;
  overflow: hidden;
}
.more-coupon-title{
  line-height: 1rem;
  height: 1rem;
  border-bottom: 0.01rem solid #ccc;
  display: flex;
  padding: 0 0.3rem;
  justify-content: space-between;
}
.goods-info-frame .moreCouponShow{
  right: 0.8rem;
}
.more-coupon{
  width: 7.3rem;
  height: 10rem;
  border-radius: 0.05rem;
  background: #fff;
  border:0.02rem solid #ccc;
  position: fixed;
  top: 4.8rem;
  right: -8rem;
  z-index: 2018;
  box-shadow: 0 0rem 0.05rem #ccc;
  transition: all 0.5s ease;
}
.goods-info-title{
  font-size:0.28rem;
  letter-spacing: 0.04rem;
  border: 0.02rem solid #efefef;
  height: 1rem;
  text-align: right;
  color: #666;
  padding-right: 0.2rem;
  background: #f8f8f8;
  width: 3.5rem;
}
table{
  width: 23rem;
  margin: 0.5rem auto;
}
.goods-info-word{
  border:0.02rem solid #efefef;
  height: 0.8rem;
  width: 8rem;
  color: #666;
  padding-left: 0.2rem;
  font-size:0.28rem;
}
.page-number{
  width: 1rem;
}
.comment-page-btn{
  margin: 0.5rem 0;
  display: flex;
  justify-content: flex-end;
}
.page-item{
  height: 0.8rem;
  padding-right: 0.2rem;
}
.page-item button{
  background: #fff;
  font-size: 0.28rem;
  border: 0.02rem solid #ccc;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 0.8rem;
  line-height: 0.8rem;
}
.pre-btn i,
.next-btn i{
  padding: 0 0.1rem;
  color: #333;
  font-size: 0.28rem;
  line-height: 0.8rem;
}
.pre-btn{
  padding: 0 0.4rem 0 0.3rem;
}
.next-btn{
  padding: 0 0.3rem 0 0.4rem;
}
.none-comment{
  text-align: center;
  line-height: 1rem;
  color: #666;
  font-size: 0.26rem;
  height: 1rem;
}
.comment-time{
  margin-top: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}
.comment-msg{
  line-height: 0.4rem;
  color: #666;
  font-size: 0.26rem;
}
.comment-star .iconfont{
  color: #ff6537;
  padding-right: 0.1rem;
}
.comment-star{
  height: 0.6rem;
  line-height: 0.6rem;
  margin-bottom: 0.1rem;
}
.comment-cont{
  width: 20rem;
  margin: 0 auto;
}
.user-info{
  width: 3rem;
  text-align: center;
}
.user-info img{
  width: 0.8rem;
  height: 0.8rem;
}
.user-info h1{
  color: #666;
  font-size: 0.26rem;
  margin-top: 0.2rem;
}
.comment-list{
  width: 23.6rem;
}
.comment-item{
  width: 100%;
  border-bottom: 0.02rem solid #ccc;
  padding:0.3rem 0;
  display: flex;
}
.goods-comment,
.goods-info{
  margin-top: 0.5rem;
  padding: 0.2rem;
  padding-top:0;
  border: 0.02rem solid #ccc;
}
.relat-title{
  border: 0.02rem solid #ccc;
  height: 1rem;
  display: flex;
}
.relat-title li{
  cursor:default; 
  line-height: 1rem;
  width: 3rem;
  text-align: center;
  color: #666;
  font-size: 0.3rem;
  border-right: 0.01rem solid #ccc;
}
.relat-title .select{
  border-top:0.05rem solid #ff6537;
  color: #ff6537;
}
/* 有关 */
.thumbnail-cont-list .thumbnail-cont{
  float: left;
}
.thumbnail-cont-list{
  position: absolute;
  top: 0;
  overflow: hidden;
}
.thumbnail-frame{
  position: relative;
  width: 8rem;
  height: 100%;
  overflow: hidden;
}
.swiper-button-prev{
  height: 1.2rem;
  width: 0.4rem;
  border:0.02rem solid #ccc;
  position: absolute;
  top: 0.65rem;
  left: -0.3rem;
  background: #fff;
  background-image: none;
  z-index: 2018;
  line-height: 1.2rem;
  color: #666;
  font-size: 0.3rem;
  text-align: center;
}
.swiper-button-next{
  height: 1.2rem;
  width: 0.4rem;
  border:0.02rem solid #ccc;
  position: absolute;
  top: 0.65rem;
  right: -0.3rem;
  background: #fff;
  background-image: none;
  z-index: 2018;
  line-height: 1.2rem;
  color: #666;
  font-size: 0.3rem;
  text-align: center;
}
.thumbnail-list{
  width: 8rem;
  margin-top: 0.2rem;
  display: flex;
}
.thumbnail-item{
  border: 0.01rem solid #ccc;
  height: 1.2rem;
  width: 1.2rem;
  margin:0 0.2rem;
  position: relative;
}
.thumbnail-item img{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -0.5rem;
  margin-top: -0.5rem;
  display: block;
  height: 1rem;
  width: 1rem;
}
.thumbnail-item:hover{
  border: 0.05rem solid #ff6537;
}
.goods-icon-show-cont{
  height: 1.6rem;
  margin-top:0.2rem;
}
.goods-icon-show-frame{
  position: relative;
  margin: 0 auto;
  height: 1.6rem;
  width: 8rem;
}
.goods-icon-show{
  height: 1.8rem;
  padding:0 0.5rem; 
}
.icon-list{
  cursor: pointer;
  padding-right: 0.3rem;
  font-size: 0.3rem;
  color: #666;
}
.icon-list i{
  color: #ff6537;
  font-size: 0.3rem;
  padding-right: 0.2rem;
}
.goods-icon-list{
  display: flex;
  height: 1rem;
  margin-top: 0.4rem;
  line-height: 1rem;
}
.car-shop-btn{
  background: #fff;
  border-color: #ff6537;
  color: #ff6537;
}
.car-shop-btn i{
  color: #ff6537;
  font-size: 0.28rem;
  padding-right: 0.2rem;
}
.buy-btn{
  background: #ff6537;
  border-color: #ff6537;
  color: #fff;
  margin-left: 0.2rem;
}
.goods-car-shop{
  height: 1rem;
  margin-top: 0.4rem;
  line-height: 1rem;
}
.goods-car-shop button{
  width: 3.2rem;
  border: 0.02rem solid #f00;
  border-radius: 0.08rem;
  height: 0.8rem;
  padding: 0.1rem 0;
}
.goods-number-btn{
  width: 1rem;
  height: 0.8rem;
  margin-top: 0.1rem;
  position: relative;
}
.goods-number-btn button{
  padding: 0 0.05rem;
  position: absolute;
  color: #9a9a9a;
  background: #fff;
  font-size: 0.2rem;
  border: 0.01rem solid #ccc;
}
.add-btn{
  top:0;
}
.less-btn{
  bottom:0;
}
.goods-number{
  display: flex;
  height: 1rem;
  padding-left: 0.1rem;
  margin-top: 0.5rem;
  line-height: 1rem;
}
.goods-number span{
  color: #666;
  font-size: 0.28rem;
  padding-right: 0.3rem;
}
.goods-number input{
  margin-top: 0.1rem;
  text-align: center;
  font-size: 0.3rem;
  height: 0.8rem;
  color: #666;
  border: 0.01rem solid #ccc;
  width: 1rem;
  margin-right: 0.3rem;
}
.offer-item{
  position: relative;
  margin-left: 1rem;
  line-height: 0.5rem;
  color: #666;
  font-size: 0.28rem;
}
.volume-more{
  padding-left: 0.1rem;
  padding-top: 0.1rem;
  cursor: pointer;
}
.volume-more span{
  text-decoration: underline;
  color: #ff6537;
  font-size: 0.28rem;
}
.volume{
  display: block;
  position: absolute;
  top: 0;
  left: -0.85rem;
  display: block;
  height: 0.5rem;
  width: 0.85rem;
  background: url("../../static/image/vbg01.png");
  background-position: -1298px -939px;
  cursor: pointer;
}
.offer-right{
  padding-left: 0.1rem;
  width: 5rem;
}
.offer{
  display: flex;
  margin-top: 0.2rem;
}
.offer-left{
  padding-top: 0.1rem;
  width: 1rem;
}
.offer-left span{
  padding-left: 0.3rem;
  font-size: 0.28rem;
  color: #666;
}
.discount{
  display: inline-block;
  height: 0.38rem;
  background: #ff6537;
  color: #fff;
  padding: 0 0.1rem;
  line-height: 0.38rem;
  font-size: 0.24rem;
  margin-top: 0.4rem;
  margin-left: 0.3rem;
  cursor: pointer;
  position: relative;
}
.discount::before{
  display: inline-block;
  content: "";
  position: absolute;
  border: 0.08rem solid #ff6537;
  border-top: 0.08rem solid transparent;
  border-left: 0.08rem solid transparent;
  bottom: 0rem;
  left: -0.2rem;
}
.clinch-price>strong{
  font-size:0.52rem;
  line-height: 1rem;
  color: #ff6537;
  font-weight: 700;
}
.clinch-price{
  line-height: 1rem;
  font-size:0.8rem;
  color: #ff6537;
  font-weight: 700;
}
.discount-word{
  line-height: 1rem;
  font-size: 0.28rem;
  color: #666;
  padding-right: 0.1rem;
}
.after-discount{
  display: flex;
  height: 1rem;
}
.market-price{
  color: #666;
  font-size: 0.28rem;
  line-height: 0.64rem;
}
.market-price span{
  text-decoration:line-through;
  font-size: 0.28rem;
  padding-left:0.1rem;
  font-family: "Arial";
  font-weight: 700;
}
.original-price{
  padding-left: 0.28rem;
  line-height: 0.64rem;
  color: #666;
  font-size: 0.28rem;
}
.original-price span{
  text-decoration:line-through;
  font-size: 0.28rem;
  padding-left:0.1rem;
  font-family: "Arial";
  font-weight: 700;
}
.price{
  height: 3rem;
  padding-left: 0.1rem;
}
.activity span{
  color: #666;
  font-size: 0.26rem;
  line-height: 0.5rem;
}
.countdown{
  position: absolute;
  top: 0;
  left: 0;
  line-height: 0.5rem;
  color: #ff6537;
  font-size: 0.4rem;
}
.activity{
  margin-bottom: 0.4rem;
  position: relative;
  padding-left: 0.6rem;
  line-height: 0.5rem;
  height: 0.5rem;
  margin-top: 0.5rem;
}
.goods-title{
  width: 8.5rem;
  font-size: 0.6rem;
  color: #333;
  line-height: 1rem;
}
.goods-show-info-cont{
  width: 13rem;
  height: 11rem;
}
.goods-img-show{
  width: 9rem;
  height: 9rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  border: 0.02rem solid #ccc;
}
.goods-img-show img{
  vertical-align: middle;
  width: 100%;
}
.goods-show{
  display: flex;
}
.goods-show-left{
  width: 10rem;
  height: 11.5rem;
}
.goods-show-right{
  padding: 0.5rem;
  width: 14rem;
  height: 11.5rem;
}
.goods-info-frame{
  width: 100%;
  min-width: 26rem;
  position: relative;
  background: #fafafa;
}
.goods-info-cont{
  width: 24rem;
  background: #fff;
  margin: 0 auto;
  margin-top: 0.2rem;
}
</style>
