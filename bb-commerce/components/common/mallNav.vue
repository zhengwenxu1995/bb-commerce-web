<template>
    <div class="mall-nav-frame">
        <div class="mall-nav-cont">
            <div class="mall-sort">
                <div class="mall-sort-cont" @click="showNavMenu">
                <i class="iconfont menu-item">&#xe609;</i>商城分类
                </div>
                <div class="mall-sort-list" v-if="showNavMenuItem">
                    <ul class="mall-sort-list-cont">
                        <li class="sort-menu-cont"
                        @mouseover="option.sortMenuItemIndex=index"
                        @mouseout="option.sortMenuItemIndex=-1"
                        v-for="(item,index) of option.sortMenuItem"
                        :key="index"
                        @click.stop="sort(item.menuName)"
                        >
                            <div class="sort-menu-item">
                                {{item.menuName}}
                                <i class="iconfont">&#xe658;</i>
                            </div>
                            <div class="child-menu-cont"
                            v-if="option.sortMenuItemIndex==index">
                                <div class="child-menu-box" v-for="(item,index) of item.childMenu"
                                    :key="index">
                                    <h1 class="child-menu-title"
                                    @click.stop="sortChild(item.childMenuName)">{{item.childMenuName}}<i class="iconfont">&#xe658;</i></h1>
                                    <ul class="gr-son-ment-list">
                                        <li class="gr-son-ment-item"
                                        v-for="(items,index) of item.grSonMenu"
                                        :key="index"
                                        @click.stop="grSort(items.grSonMenuName)"
                                        >{{items.grSonMenuName}}</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                
            </div>
            <ul class="mall-menu">
                <li class="menu-itme"
                :class="{'select':nowShowMenuItem==index}"
                v-for="(item,index) of option.navMenuItem"
                :key="index"
                @click="setShowMenu(index)"
                ><nuxt-link :to="item.path">{{item.menuName}}</nuxt-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            option:{
                navMenuItem:[
                    {path:"",menuName:"首页"},
                    {path:"",menuName:"每日推荐"},
                    {path:"",menuName:"品质生活"},
                    {path:"",menuName:"热卖单品"},
                    {path:"",menuName:"猜你喜欢"},
                    {path:"",menuName:"秒杀"}
                    // 只能6个菜单项
                ],
                sortMenuItemIndex:-1,
                sortMenuItem:[
                    {
                        menuName:"服饰",
                        childMenu:[
                            {
                                childMenuName:"女装",
                                grSonMenu:[
                                    {grSonMenuName:"半身裙"},
                                    {grSonMenuName:"女装外套"},
                                    {grSonMenuName:"T恤"},
                                    {grSonMenuName:"女裤薄外套"},
                                    {grSonMenuName:"衬衣"},
                                    {grSonMenuName:"休闲裤"},
                                    {grSonMenuName:"套装大码"},
                                    {grSonMenuName:"女装连衣裙"},
                                    {grSonMenuName:"牛仔裤"}
                                ]
                            },
                            {
                                childMenuName:"配饰",
                                grSonMenu:[
                                    {grSonMenuName:"眼镜"}
                                ]
                            }
                        ]
                    },
                    {
                        menuName:"箱包",
                        childMenu:[
                            {
                                childMenuName:"鞋帽箱包",
                                grSonMenu:[
                                    {grSonMenuName:"男鞋"},
                                    {grSonMenuName:"运动鞋"},
                                    {grSonMenuName:"休闲鞋"},
                                    {grSonMenuName:"休闲包"},
                                    {grSonMenuName:"手拿包"},
                                    {grSonMenuName:"双肩包"},
                                    {grSonMenuName:"腰包"},
                                    {grSonMenuName:"单肩包"},
                                    {grSonMenuName:"旅行箱"}
                                ]
                            }
                        ]
                    },
                    {
                        menuName:"男装",
                        childMenu:[
                            {
                                childMenuName:"服饰",
                                grSonMenu:[
                                    {grSonMenuName:"夏清仓"},
                                    {grSonMenuName:"夹克"},
                                    {grSonMenuName:"衬衫"},
                                    {grSonMenuName:"休闲裤"},
                                    {grSonMenuName:"上衣"},
                                    {grSonMenuName:"短裤"},
                                    {grSonMenuName:"牛仔系列"},
                                    {grSonMenuName:"西装"}
                                ]
                            }
                        ]
                    },
                    {
                        menuName:"母婴",
                        childMenu:[
                            {
                                childMenuName:"服饰",
                                grSonMenu:[
                                    {grSonMenuName:"童装"},
                                    {grSonMenuName:"男童"},
                                    {grSonMenuName:"夏装"},
                                    {grSonMenuName:"女童"}
                                ]
                            }
                        ]
                    },
                    {
                        menuName:"美食",
                        childMenu:[
                            {
                                childMenuName:"零食",
                                grSonMenu:[
                                    {grSonMenuName:"休闲零食"},
                                    {grSonMenuName:"水果干"},
                                    {grSonMenuName:"茶水饮料"},
                                    {grSonMenuName:"饼干糕点"},
                                    {grSonMenuName:"蜜饯"}
                                ]
                            },
                            {
                                childMenuName:"水果",
                                grSonMenu:[
                                    {grSonMenuName:"新鲜水果"},
                                    {grSonMenuName:"芒果节"},
                                    {grSonMenuName:"水蜜桃"},
                                    {grSonMenuName:"新鲜橙子"},
                                    {grSonMenuName:"猕猴桃"}
                                ]
                            }
                        ]
                    },
                    {
                        menuName:"百货",
                        childMenu:[
                            {
                                childMenuName:"家用百货",
                                grSonMenu:[
                                    {grSonMenuName:"纸巾类"},
                                    {grSonMenuName:"家庭清洁"},
                                    {grSonMenuName:"学习用品"},
                                    {grSonMenuName:"家电"}
                                ]
                            }
                        ]
                    },
                    {
                        menuName:"手机",
                        childMenu:[
                            {
                                childMenuName:"手机配件",
                                grSonMenu:[
                                    {grSonMenuName:"充电线"},
                                    {grSonMenuName:"手机壳"}
                                ]
                            }
                        ]
                    },
                    {
                        menuName:"美妆",
                        childMenu:[
                            {
                                childMenuName:"美妆用品",
                                grSonMenu:[
                                    {grSonMenuName:"口红唇膏"},
                                    {grSonMenuName:"面部护理"}
                                ]
                            }
                        ]
                    },
                    {
                        menuName:"家纺",
                        childMenu:[
                            {
                                childMenuName:"床上用品",
                                grSonMenu:[
                                    {grSonMenuName:"四件套"},
                                    {grSonMenuName:"空调被"}
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    },
    props:{
        showNavMenuItem:{
            Type:Boolean,
            default:true
        },
        nowShowMenuItem:{
            Type:Boolean,
            default:0
        }
    },
    methods:{
        setShowMenu(index){
            this.$emit("changeShowMenu",index)
        },
        sort(menuName){
            console.log("您点击了"+menuName)
        },
        sortChild(childMenuName){
            console.log("您点击了"+childMenuName);
        },
        grSort(grSonMenuName){
            console.log("您点击了"+grSonMenuName);
        },
        showNavMenu(){
            this.showNavMenuItem=!this.showNavMenuItem;
        }
    }
}
</script>

<style scoped>
/* 分类列表 */
.child-menu-box{
    overflow: hidden;
}
.gr-son-ment-item{
    color: #ccc;
    font-size: 0.22rem;
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0 0.2rem;
}
.gr-son-ment-item:hover{
    color:#f40;
}
.gr-son-ment-list{
    border-bottom: 0.02rem dotted rgb(150,150,150);
    width: 7rem;
    height: 1rem;
    float: left;
    display: flex;
    flex-wrap: wrap;
}
.child-menu-title{
    float: left;
    width: 3rem;
    text-align: center;
    color: #333;
    font-size: 0.3rem;
}
.child-menu-title:hover{
    color:#f40;
}
.child-menu-title i{
    padding-left: 0.3rem;
    color: #ccc;
}
.child-menu-cont{
    position: absolute;
    left: 3.5rem;
    width: 10rem;
    height: 9.01rem;
    text-align: left;
    top: 0;
    background: #fff;
    z-index: 150;
}
.mall-sort-list{
    width: 3.5rem;
    position: absolute;
    top: 1rem;
    left: 0rem;
    z-index: 100;
}
.sort-menu-cont{
    border-bottom: 0.01rem solid #f1f1f1;
    background: #f7f7f7;
    color:#333;
    text-align: center;
}
.sort-menu-item{
    text-align: center;
    letter-spacing: 0.1rem;
}
.sort-menu-item i{
    float: right;
    color: #ccc;
    padding-right: 0.2rem;
}
.sort-menu-cont:hover{
    color: #f40;
    background: #fff;
}
.mall-sort-list-cont{

}
/* 分类列表结束 */
.select{
    background: #f40;
}
.menu-item{
    padding-right: 0.45rem;
}
.mall-sort{
    position: relative;
    height: 1rem;
    line-height: 1rem;
    background: #f40;
    text-align: center;
    font-size: 0.35rem;
    color: #fff;    
    width: 3.5rem;
    cursor: pointer;
}
.mall-menu{
    display: flex;
}
.menu-itme{
    height: 1rem;
    padding: 0 0.8rem;
    margin-left: 0.4rem;
    line-height: 1rem;
    color:#fff;
    cursor: pointer;
}
.menu-itme a{
    color:#fff;
    font-size: 0.35rem;
}
.menu-itme:hover{
    background: #f40;
}
.mall-nav-frame{
    height: 1rem;
    width: 100%;
    min-width: 26rem;
    background: #ff8d00;
}
/* 选中#ff5000 */
.mall-nav-cont{
    display: flex;
    height: 1rem;
    margin: 0 auto;
    width: 24rem;
}
</style>