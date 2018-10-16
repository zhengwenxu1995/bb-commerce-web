<template>
    <div class="serch-frame">
        <div class="serch-cont">
            <div class="logo-frame">
                <img class="logo-img" src="~/static/image/logo.png" alt="">
                <h1 class="login-title">BbMall.com</h1>
            </div>
            <div class="serch-input-frame" >
                <div class="input-frame" >
                    <input class="serch" type="text" 
                    :placeholder="option.serchPrompt"
                    @focus="option.showRearchSearchFrame=true"
                    @blur="hide"
                    ><button class="serch-btn">搜索</button>
                    <ul class="v-serch-recent" v-if="option.showRearchSearchFrame">
                        <li class="serch-recent-item" v-for="(item,index) of option.searchRecent"
                         :key="index"
                         @mouseover="option.delSearchRecentShow=index"
                         @mouseout="option.delSearchRecentShow=null"
                         @click.stop="search(item)">
                         <h1 class="product">{{item}}</h1>
                         <h1 class="serch-recent" v-if="index!=option.delSearchRecentShow">最近搜索商品</h1>
                         <h1 class="del-recent" 
                         @click.stop="delRecent(item)"
                         v-if="index==option.delSearchRecentShow">删除</h1>
                         </li>
                         <li class="serch-recent-item all-del"
                         v-if="option.searchRecent.length>0">
                             <p class="all-del-btn" @click.stop="delAll">全部删除</p>
                         </li>
                         <li class="serch-recent-item" v-if="option.searchRecent.length==0">
                            <p style="text-align:center">最近没有搜索商品</p>
                         </li>
                    </ul>
                    <ul class="h-serch-cont-list">
                        <li class="serch-cont-item"
                        v-for="(item,index) of seachRecentH"
                        :key="index"
                         @click.stop="search(item)"
                        :title="item">
                            {{item}}
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            option:{
                serchPrompt:"请输入要搜索的商品名字 ",
                delSearchRecentShow:null,
                showRearchSearchFrame:false,
                searchRecent:[
                    "手机",
                    "电脑",
                    "机械键盘",
                    "卫衣",
                    "毛衣",
                    "手机",
                    "电脑",
                    "机械键盘",
                    "毛衣",
                    "手机"
                ]
            }
        }
    },
    computed:{
        seachRecentH(){
            let newList=[];
            this.option.searchRecent.forEach((item)=>{
                newList.push(item)
                if(newList.length==7){
                    return newList;
                }
            })
            return newList;
        }
    },
    props:{

    },
    methods:{
        delAll(){
            this.option.searchRecent=[];
        },
        hide(){
            let time=null;
            time=setTimeout(()=>{
                this.option.showRearchSearchFrame=false;
            },300)
            if(time){
                time=null
            }
            
        },
        search(productName){
            console.log("您要搜索的内容是"+productName)
        },
        delRecent(productName){
            console.log("您要删除的内容是"+productName)
        }
    }
}
</script>

<style scoped>
/* 垂直搜索列表 */
.h-serch-cont-list{
    margin-top:0.1rem;
    width:8rem;
    height: 0.3rem;
    overflow: hidden;
}
.serch-cont-item{
    cursor: pointer;
    float: left;
    color: #ccc;
    line-height: 0.3rem;
    font-size: 0.2rem;
    width: 0.8rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 0.1rem;
}
.v-serch-recent{
    position: absolute;
    background: #fff;
    left: 0;
    top: 0.7rem;
    width: 8rem;
    z-index: 2000;
    border: 1px solid #ccc;
}
.product{
    float: left;
    cursor: default;
}
.del-recent{
    float: right;
    cursor: pointer;
}
.serch-recent{
    float: right;
}
.serch-recent-item{
    font-size: 0.2rem;
    overflow: hidden;
    padding: 0.1rem 0.2rem;
    box-sizing: border-box;
}
.serch-recent-item:hover {
    background: #f5f5f5;
}
.serch-recent-item:hover .del-recent{
    color: #f40;
}
.all-del-btn:hover{
    background: #f5f5f5;
    color: #f40;
}
.serch-recent{
    cursor: default;
}
.all-del-btn{
    cursor: pointer;
    text-align: center;
}
.serch-recent-item:hover .all-del-btn{
    color: #f40;
    text-align: center;
}
/* 垂直搜索列表结束 */

.serch-frame{
    height: 3rem;
    width: 100%;
    min-width: 26rem;
    background: #fafafa;
}
.serch-cont{
    width: 24rem;
    margin: 0 auto;
    height: 3rem;
    display: flex;
}
.serch-input-frame{
    height: 3rem;
    width: 20rem;
}
.login-title{
    color: #f40;
    font-size: 0.4rem;
    font-weight: 600;
    font-family:'Courier New', Courier, monospace;
    text-align: center;
}
.logo-frame{
    width: 4rem;
    text-align: center;
    padding-top:0.3rem; 
}
.input-frame{
    position: relative;
    width: 10rem;
    margin: 1.2rem 0 0 5rem;
}
.serch{
    height: 0.7rem;
    width: 8rem;
    padding-left: 0.3rem;
    border: 0.04rem solid #ff8d00;
}
.serch-btn{
    height: 0.7rem;
    background: #ff8d00;
    width: 2rem;
    color: #fff;
    font-size: 0.26rem;
    font-weight: 600;
    font-family: Arial, Helvetica;
}
.logo-img{
    margin-bottom: 0.2rem;
}
</style>
