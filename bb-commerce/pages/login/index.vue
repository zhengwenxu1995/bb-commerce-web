<template>
    <div class="login-page">
        <sign-up-header></sign-up-header>
        <div class="login-frame" title="点击换背景" :style="{ backgroundImage: 'url('+bgOption.bgStyle+')'}">
            <div class="login-cont" @click.self="changeBg">
                <div class="login-info">
                    <div class="login-info-frame">
                        <h1 class="login-title">用户登录</h1>
                        <div>
                            <input type="text">
                        </div>
                        <div>
                            <input type="password">
                        </div>
                        <div>
                            <button>登录</button>
                        </div>
                        <div>
                            <span>忘记密码？</span>
                            <span>免费注册</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import signUpHeader from "~/components/common/signUpHeader.vue"
export default {
    data(){
        return {
            bgOption:{
                // show:"backgroundImage: url()",
                bgImgList:[
                    require("../../static/image/login2.png"),
                    require("../../static/image/login1.jpg"),
                    require("../../static/image/logina.jpg")
                ],
                bgStyle:require("../../static/image/login2.png"),
                nowBgIndex:0
            }
            
        }
    },
    components:{
        signUpHeader
    },
    methods:{
        changeBg(){
           this.bgOption.nowBgIndex++;
           if(this.bgOption.nowBgIndex>2){
               this.bgOption.nowBgIndex=0;
           }
           this.bgOption.bgStyle=this.bgOption.bgImgList[this.bgOption.nowBgIndex]
        }
    }
}
</script>

<style scoped>
.login-page{
    width: 100%;
    min-width: 26rem;
}
.login-frame{
    width: 100%;
    min-width: 26rem;
    height: 12rem;
    transition: all 0.3s ease;
    background-color: #f40;
    background-position: center;
}
.login-cont{
    width:24rem;
    margin: 0 auto;
    height: 100%;
}
.login-info{
    float: right;
    background: #e9e9f2;
    height: 7rem;
    width: 7rem;
    margin:2.4rem 1.2rem 0 0;
}
.login-info-frame{
    height: 6rem;
    width: 6rem;
    padding: 0.5rem;
    border: 1px solid #f00;
    box-sizing: content-box;
}
.login-title{
    padding: 0.2rem 0 0.18rem 0;
    font-size: 0.34rem;
    font-weight: 600;
    color: #3c3c3c;
}
</style>
