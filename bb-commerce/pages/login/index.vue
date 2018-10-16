<template>
    <div class="login-page">
        <sign-up-header></sign-up-header>
        <div class="login-frame" title="点击换背景" :style="{ backgroundImage: 'url('+bgOption.bgStyle+')'}">
            <div class="login-cont" @click.self="changeBg">
                <div class="login-info" title="欢迎来到北北商城">
                    <div class="login-info-frame">
                        <h1 class="login-title">用户登录</h1>
                        <div class="error" v-if="error">
                            <i class="iconfont caveat">&#xe607;</i><p class="error-cont">
                                你输入的密码和账户名不匹配，是否<nuxt-link to="/">忘记密码</nuxt-link>或<nuxt-link to="/">会员名</nuxt-link>
                            </p>
                        </div>
                        <div class="login-frame-cont">
                            <div class="input-frame" title="输入用户名">
                                <i class="iconfont user">&#xe604;</i><input class="userCode" placeholder="会员名/账号" v-model="userOption.userCode" type="text">
                            </div>
                            <div class="pass-frame" title="输入密码">
                                <i class="iconfont password">&#xe640;</i><input class="passwordCode" placeholder="密码" v-model="userOption.passwordCode" type="password">
                            </div>
                            <div class="loginBtn-frame" title="登录">
                                <button class="loginBtn" @click="userLogin">登录</button>
                            </div>
                            <div class="other-frame">
                                <nuxt-link to="/" class="forget-pass" title="忘记密码">忘记密码？</nuxt-link>
                                <nuxt-link to="/register" title="免费注册">免费注册</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <sign-up-footer></sign-up-footer>
    </div>
</template>

<script>
import signUpHeader from "~/components/common/signUpHeader.vue"
import signUpFooter from "~/components/common/signUpFooter.vue"
export default {
    data(){
        return {
            bgOption:{
                // show:"backgroundImage: url()",
                bgImgList:[
                    require("../../static/image/login2.png"),
                    require("../../static/image/login1.jpg"),
                    require("../../static/image/logina.jpg"),
                    require("../../static/image/login3.jpg")
                ],
                bgStyle:require("../../static/image/login2.png"),
                nowBgIndex:0
            },
            userOption:{
                userCode:"",
                passwordCode:""
            },
            error:false
        }
    },
    components:{
        signUpHeader,
        signUpFooter
    },
    methods:{
        changeBg(){
           this.bgOption.nowBgIndex++;
           if(this.bgOption.nowBgIndex>3){
               this.bgOption.nowBgIndex=0;
           }
           this.bgOption.bgStyle=this.bgOption.bgImgList[this.bgOption.nowBgIndex]
        },
        userLogin(){
            console.log(this.userOption)
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
    background-position: center;
}
.login-cont{
    width:24rem;
    margin: 0 auto;
    height: 100%;
}
.login-info{
    float: right;
    background-color: rgba(255, 255, 255, 0.9);
    height: 6rem;
    width: 7rem;
    margin:2.4rem 1.2rem 0 0;
}
.login-info-frame{
    height: 5rem;
    width: 6rem;
    padding: 0.5rem;
    box-sizing: content-box;
    position: relative;
}
.error{
    position: absolute;
    border: 0.02rem solid #ffb4a8;
    background: #fef2f2;
    width: 5.95rem;
    padding: 0.12rem 0.2rem;
    top: 0.4rem;
    left: 50%;
    margin-left: -3rem;
}
.caveat{
    padding-right: 0.2rem;
    color: #f40;
}
.error-cont{
    display: inline;
    font-size: 0.26rem;
    line-height: 0.34rem;
    color: #6C6C6C;
}
.error-cont a{
    color: #f40;
}
.login-title{
    padding: 0.2rem 0 0.3rem 0;
    font-size: 0.34rem;
    font-weight: 600;
    color: #3c3c3c;
}
.input-frame{
    height: 0.84rem;
    margin-bottom: 0.4rem;
    position: relative;
}
.user{
    position: absolute;
    height: 0.8rem;
    background: #ddd;
    color: #fff;
    left: 0.02rem;
    top:0.02rem;
    border: 0.02rem solid #fff;
    box-sizing: border-box;
    font-size: 0.34rem;
    width: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
}
.userCode{
    width: 5.96rem;
    border: 0.02rem solid #ddd;
    box-sizing:border-box;
    height: 0.84rem;
    padding-left:0.9rem;
    font-size: 0.32rem;
}
.userCode:focus{
    border: 0.02rem solid #f40;
}
.pass-frame{
    height: 0.84rem;
    margin-bottom: 0.4rem;
    position: relative;
}
.password{
    position: absolute;
    height: 0.8rem;
    background: #ddd;
    color: #fff;
    left: 0.02rem;
    top:0.02rem;
    border: 0.02rem solid #fff;
    box-sizing: border-box;
    font-size: 0.34rem;
    width: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
}
.passwordCode{
    width: 5.96rem;
    border: 0.02rem solid #ddd;
    box-sizing:border-box;
    height: 0.84rem;
    padding-left:0.9rem;
    font-size: 0.32rem;
}
.passwordCode:focus{
    border: 0.02rem solid #f40;
}
.loginBtn-frame{
    margin-bottom: 0.6rem;
}
.loginBtn{
    width: 100%;
    height: 0.8rem;
    background: #f40;
    line-height: 0.84rem;
    font-size: 0.35rem;
    color: #fff;
    text-align: center;
    font-weight: 600;
    letter-spacing: 0.2rem;
    font-family: "HeiTi";
    border-radius: 0.05rem;
}
.other-frame{
    text-align: right;
    margin-top: 0.4rem;
}
.other-frame a{
    padding:0 0 0 0.3rem;
    color: #6c6c6c;
    font-size: 0.25rem;
}
</style>
