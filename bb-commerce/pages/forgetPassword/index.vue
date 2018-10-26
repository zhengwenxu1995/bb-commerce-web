<template>
    <div class="forget-page">
        <div class="forget-header">
            <div class="header-cont">
                <div class="forget-frame">
                    <img class="forget-img" src="~/static/image/logo.png" alt="">
                    <h1 class="forget-title">BbMall.com</h1>
                </div>
                <div class="forget-cont">
                    <h1 class="user-forget-word">密码找回</h1>
                </div>
            </div>
        </div>
        <step-bar :stepBarData="stepData" :stepBar="option.stepBarWidth"></step-bar>
        <div class="forget-cont-frame">
            <div class="email-frame" v-if="option.waySwitch&&option.showSetpIndex==1">
                <div class="email-cont">
                    <label for="email">邮箱</label>
                    <input id="email" class="email" placeholder="请输入邮箱" type="text">
                    <p class="error-msg">错误消息</p>
                </div>
                <div class="verify-cont">
                    <label for="verify">验证码</label>
                    <input type="text" id="verify" placeholder="请输入邮箱验证码" class="verify">
                    <button class="btn-verify"
                    @click="getVerify"
                    :disabled="option.getVerifyBtnStatus">{{option.getVerifyBtn}}</button>
                    <p class="error-msg">错误消息</p>
                </div>
            </div>
            <div class="id-card-frame" v-if="!option.waySwitch&&option.showSetpIndex==1">
                <div class="id-card-cont">
                    <label for="id-card">身份证号</label>
                    <input id="id-card" class="id-card" type="text">
                    <p class="error-msg">错误消息</p>
                </div>
            </div>
            <div class="password-frame" v-if="option.showSetpIndex==2">
                <div class="password-cont">
                    <label for="password">密码</label>
                    <input id="password" class="password" type="text">
                    <p class="error-msg">错误消息</p>
                </div>
                <div class="repeat-password-cont">
                    <label for="repeat-password">确认密码</label>
                    <input class="repeat-password" id="repeat-password" type="text">
                    <p class="error-msg">错误消息</p>
                </div>
            </div>
            <div class="modify-Succe" v-if="option.showSetpIndex==3">
                <h1 class="modify-Succe-word"><i class="iconfont">&#xe60a;</i>修改成功</h1>
            </div>
            <div class="btn-frame">
                <div class="left-btn">
                    <button class="id-card-btn" 
                    @click="option.waySwitch=false"
                    v-if="option.waySwitch&&option.showSetpIndex==1"
                    >身份证找回</button>
                    <button class="email-btn" 
                    @click="option.waySwitch=true"
                    v-if="!option.waySwitch&&option.showSetpIndex==1"
                    >邮箱找回</button>
                </div>
                <div class="right-btn">
                    <button class="login-btn"
                    v-if="option.showSetpIndex==3"
                    @click="goLogin">去登陆</button>
                    <button class="next-btn"
                    v-if="option.showSetpIndex!=3"
                    @click="nextStep">下一步</button>
                </div>
            </div>
        </div>
        <sign-up-footer></sign-up-footer>
    </div>
</template>

<script>
import signUpFooter from "~/components/common/signUpFooter.vue"
import stepBar from "~/components/common/stepBar.vue"
export default {
    data(){
        return{
            option:{
                stepBarWidth:9,
                waySwitch:true,
                showSetpIndex:1,
                getVerifyBtnStatus:false,
                getVerifyBtn:"获取验证码"
            },
            stepData:[
                {stepNumber:1,stepName:"邮箱认证",stepStatus:true},
                {stepNumber:2,stepName:"重置密码",stepStatus:false},
                {stepNumber:3,stepName:"修改成功",stepStatus:false}
            ]
        }
    },
    components:{
        stepBar,
        signUpFooter
    },
    methods:{
        getVerify(){
            let time=120;
            this.option.getVerifyBtnStatus=true;
            let timeFn=setInterval(()=>{
                if(time==-1){
                    clearInterval(timeFn);
                    this.option.getVerifyBtn="获取验证码";
                    this.option.getVerifyBtnStatus=false;
                }
                time--;
                this.option.getVerifyBtn="重试("+time+")"
            },1000);
        },
        goLogin(){
            this.$router.push({path:"/login"})
        },
        nextStep(){
            if(this.option.registerStatus==3){
                return false;
            }else{
                this.option.showSetpIndex++;
                this.stepData.forEach((item)=>{
                    if(this.option.showSetpIndex==item.stepNumber){
                        item.stepStatus=true;
                    }
                    
                })
            }
        }
    }
}
</script>

<style scoped>
/* 修改成功 */
.modify-Succe{
    padding-top: 2rem;
}
.modify-Succe-word{
    font-size: 0.6rem;
    color: #f40;
    text-align: center;
}
.modify-Succe-word i{
    font-size: 0.6rem;
    color: #f40;
    padding-right: 0.3rem;
}
/* 修改成功 */
.error-msg{
    width: 6rem;
    line-height: 0.24rem;
    color: #f00;
    position: absolute;
    top: 0.1rem;
    left: 7rem;
    font-size: 0.24rem;
}
/* 确认密码 */
.password-frame{
    padding-top:1rem; 
}
.password, .repeat-password{
    padding: 0.1rem;
    border: 0.02rem solid #ccc;
    font-size: 0.3rem;
    width: 5.3rem;
}
.password-cont label{
    padding-right: 0.6rem;
    font-size:0.3rem;
    color: #333;
}
.repeat-password-cont label{
    font-size:0.3rem;
    color: #333;
}
.password-cont,
.repeat-password-cont{
    position: relative;
    width: 7rem;
    margin: 0 auto;
    margin-bottom: 0.5rem;
}
/* 确认密码结束 */
/* 身份证找回 */
.id-card-frame{
    padding-top: 2rem;
}
.id-card{
    padding: 0.1rem;
    border: 0.02rem solid #ccc;
    font-size: 0.3rem;
    width: 5.4rem;
}
.id-card-cont{
    position: relative;
    width: 7rem;
    margin: 0 auto;
    margin-bottom: 0.5rem;
}
.id-card-cont label{
    padding-right: 0.1rem;
    font-size:0.3rem;
    color: #333;
}
/* 身份证找回结束 */
/* 邮箱验证 */
.email-frame{
    padding-top: 1rem;
}
.email{
    padding: 0.1rem;
    border: 0.02rem solid #ccc;
    font-size: 0.3rem;
    width: 5.4rem;
}
.verify{
    padding: 0.1rem;
    border: 0.02rem solid #ccc;
    font-size: 0.3rem;
    width: 2.8rem;
}
.btn-verify{
    margin-left: 0.2rem;
    padding:0.1rem 0.3rem;
    background: #fff;
    border: 0.02rem solid #ccc;
    border-radius: 0.05rem;
}
.email-cont,
.verify-cont{
    position: relative;
    width: 7rem;
    margin: 0 auto;
    margin-bottom: 0.5rem;
}
.email-cont label{
    padding-right: 0.4rem;
    font-size:0.3rem;
    color: #333;
}
.verify-cont label{
    padding-right: 0.1rem;
    font-size:0.3rem;
    color: #333;
}
/* 邮箱验证完成 */
/* 按钮样式 */
.btn-frame{
    position: absolute;
    bottom: 0;
    height: 1rem;
    width: 100%;
    display: flex;
}
.left-btn button{
    margin-left: 0.8rem;
    width: 2.5rem;
    font-size: 0.3rem;
    padding: 0.15rem 0;
    color: #fff;
    background: #f40;
}
.left-btn,
.right-btn{
    flex: 1;
}
.right-btn{
    text-align: right;
}
.right-btn .next-btn{
    background: #ededed;
}
.right-btn button{
    margin-right: 0.8rem;
    width: 2.5rem;
    font-size: 0.3rem;
    padding: 0.15rem 0;
    color: #fff;
    background: #f40;
}
/* 按钮样式结束 */
/* 头部样式 */
.forget-page{
    width: 100%;
    min-width: 26rem;
}
.forget-frame{
    float: left;
    width: 2.6rem;
    text-align: center;
}
.forget-img{
    height: 1.6rem;
    padding: 0.2rem 0;
}
.user-forget-word{
    font-size: 0.6rem;
    vertical-align: bottom;
    margin:1.3rem 0 0 0.5rem; 
}
.forget-title{
    color: #f40;
    font-size: 0.4rem;
    font-weight: 600;
    font-family: 'Courier New', Courier, monospace;
    text-align: center
}
.forget-cont{
    float: left;
    height: 2rem;
    width: 21.4rem;
    vertical-align: bottom;
}
/* 头部样式结束 */
.header-cont{
    width: 24rem;
    height: 2rem;
    margin: 0 auto;
}
.forget-header{
    width: 100%;
    min-width: 26rem;
    height: 2rem;
    margin-bottom: 0.5rem;
}
/* 头部样式结束 */
.forget-cont-frame{
    width: 24rem;
    margin: 0 auto;
    height: 7rem;
    margin-top: 1rem;
    position: relative;
}
</style>
