<template>
    <div class="register-page">
        <div class="register-header">
            <div class="header-cont">
                <div class="logo-frame">
                    <img class="logo-img" src="~/static/image/logo.png" alt="">
                    <h1 class="login-title">BbMall.com</h1>
                </div>
                <div class="re-cont">
                    <h1 class="user-re-word">用户注册</h1>
                </div>
            </div>
        </div>
        <step-bar :stepBarData="stepData"></step-bar>
        <div class="register-cont">
            <div class="email-re" v-if="option.registerStatus==1">
                <div class="email-frame" >
                    <label class="email-label" for="email">邮箱</label>
                    <input id="email" placeholder="请输入邮箱" class="email" type="text">
                    <p class="error-msg">错误消息</p>
                </div>
                <div class="email-verify-frame">
                    <label for="email-verify" class="email-verify-label">验证码</label>
                    <input class="email-verify" placeholder="请输入邮箱验证码" id="email-verify" type="text">
                    <button class="email-verify-btn" 
                    @click="getVerify"
                    :disabled="option.getVerifyBtnStatus"
                    >{{option.getVerifyBtn}}</button>
                    <p class="error-msg">错误消息</p>
                </div>
            </div>
            <div v-if="option.registerStatus==2"
            class="user-pass">
                <div class="user-frame">
                    <label for="user-name">用户名</label>
                    <input id="user-name" placeholder="请输入用户名" class="user-name" type="text">
                    <p class="error-msg">错误消息</p>
                </div>
                <div class="password-frame">
                    <label for="password">用户密码</label>
                    <input class="password" placeholder="请输入用户密码" id="password" type="text">
                    <p class="error-msg">错误消息</p>
                </div>
                <div class="again-passowrd-frame">
                    <label for="again-password">确认密码</label>
                    <input id="again-password" placeholder="再次输入用户密码" class="again-password" type="text">
                    <p class="error-msg">错误消息</p>
                </div>
            </div>

            <div v-if="option.registerStatus==3"
            class="per-info" >
                <div class="id-card-frame">
                    <label for="id-card">身份证号</label>
                    <input id="id-card" placeholder="请输入身份证号" class="id-card" type="text">
                    <p class="error-msg">错误消息</p>
                </div>
                <div class="verify-frame">
                    <label for="verify">验证码</label><input id="verify" class="verify-code" type="text">
                    <div class="verify-input-frame">
                        <identify @verification="verification"></identify>
                    </div>
                    <p class="error-msg">错误消息</p>
                </div>
            </div>
            <div class="suce" v-if="option.registerStatus==4">
                <h1 class="suce-word">
                    <i class="iconfont">&#xe60a;</i>注册成功!!
                </h1>
            </div>
            <div class="pact" v-if="option.pact">
                <div class="pact-title">
                    <h1 class="title-word">注册协议</h1>
                    <i class="iconfont close"
                    @click="closePact">&#xe608;</i>
                </div>
                <p class="read">
                    <span style="font-weight:600;">【审慎阅读】</span>您在申请注册流程中点击同意前，应当认真阅读以下协议。<span style="font-weight:600;text-decoration:underline;">请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：</span>
                </p>
                <p class="symbol">1、<span>与您约定免除或限制责任的条款；</span></p>
                <p class="symbol">2、<span>与您约定法律适用和管辖的条款；</span></p>
                <p class="symbol">3、<span>其他以粗体下划线标识的重要条款。</span></p>
                <p>如您对协议有任何疑问，可向平台客服咨询。</p>
                <p style="line-height:0.32rem;"><span style="font-weight:600;">【特别提示】</span>当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因平台服务与北北商城发生争议的，适用《北北商城平台服务协议》处理。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。</p>
                <p style="font-weight:600;text-decoration:underline;">阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</p>
                <div class="agree">
                    <button class="agree-btn"
                    @click="option.pact=false">同意协议</button>
                </div>
            </div>
            <div class="next-login-btn">
                <button class="next"
                @click="nextFn"
                v-if="option.registerStatus!=4">下一步</button>
                <button class="login"
                v-if="option.registerStatus==4"
                @click="goLogin"
                >去登陆</button>
            </div>
        </div>
        <sign-up-footer></sign-up-footer>
    </div>
</template>

<script>
import identify from "~/components/common/identify.vue"
import signUpFooter from "~/components/common/signUpFooter.vue"
import stepBar from "~/components/common/stepBar.vue"
export default {
  data() {
    return {
        option:{
            pact:true,
            getVerifyBtn:"获取验证码",
            getVerifyBtnStatus:false,
            registerStatus:1,
            errorMsg:"",
            emailCont:"",
            emailCode:"",
            userName:"",
            userPassword:"",
            userAgainPassword:"",
            IDcard:"",
            verifyCode:""
        },
        stepData:[
            {stepNumber:1,stepName:"邮箱认证",stepStatus:true},
            {stepNumber:2,stepName:"用户名",stepStatus:false},
            {stepNumber:3,stepName:"个人信息",stepStatus:false},
            {stepNumber:4,stepName:"注册完成",stepStatus:false}
        ]
    }
  },
  components:{
    identify,
    stepBar,
    signUpFooter
  },
  methods:{
    goLogin(){
        this.$router.push({path:"/login"});
    },
    nextFn(){
        if(this.option.registerStatus==4){
            return false;
        }else{
            this.option.registerStatus++;
            this.stepData.forEach((item)=>{
                if(this.option.registerStatus==item.stepNumber){
                    item.stepStatus=true;
                }
                
            })
        }
    },
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
        //向后台发送邮箱验码的请求
    },
    closePact(){
        this.option.pact=false;
        this.$router.push({path:"/"});
    },
    verification(identifyCode){
        console.log(identifyCode)
    }
  }
}
</script>

<style scoped>
/* 错误消息 */
.error-msg{
    width: 6rem;
    line-height: 0.24rem;
    color: #f00;
    position: absolute;
    top: 0.1rem;
    left: 7rem;
    font-size: 0.24rem;
}
/* 注册成功 */
.suce{
    padding-top: 2rem;
}
.suce-word{
    font-size: 0.6rem;
    color: #f40;
    text-align: center;
}
.suce-word i{
    font-size: 0.6rem;
    color: #f40;
    padding-right: 0.3rem;
}
/* 用户个人信息完善 */
.verify-code{
    padding: 0.1rem;
    border: 0.02rem solid #ccc;
    font-size: 0.3rem;
    width: 2.8rem;
}
.verify-input-frame{
    float: right;
    border: 0.02rem solid #ccc;
    margin-right: 0.55rem;
}
.id-card{
    padding: 0.1rem;
    border: 0.02rem solid #ccc;
    font-size: 0.3rem;
    width: 5.3rem;
}
.per-info{
    padding-top:1rem; 
}
.id-card-frame{
    position: relative;
    width: 7rem;
    margin: 0 auto;
    margin-bottom: 0.5rem;
}
.verify-frame{
    position: relative;
    width: 7rem;
    margin: 0 auto;
}
.id-card-frame label{
    font-size:0.3rem;
    color: #333;
}
.verify-frame label{
    padding-right: 0.4rem;
    font-size:0.3rem;
    color: #333;
}
/* 用户个人信息结束 */
/* 用户名 */
.again-password{
    padding: 0.1rem;
    border: 0.02rem solid #ccc;
    font-size: 0.3rem;
    width: 5.3rem;
}
.again-passowrd-frame{
    position: relative;
    width: 7rem;
    margin: 0 auto;
}
.again-passowrd-frame label{
    padding-right: 0.1rem;
    font-size:0.3rem;
    color: #333;
}
.password{
    padding: 0.1rem;
    border: 0.02rem solid #ccc;
    font-size: 0.3rem;
    width: 5.3rem;
}
.password-frame label{
    padding-right: 0.1rem;
    font-size:0.3rem;
    color: #333;
}
.password-frame{
    position: relative;
    width: 7rem;
    margin: 0 auto;
    margin-bottom: 0.5rem;
}
.user-pass{
    padding-top: 1rem;
}
.user-frame{
    position: relative;
    width: 7rem;
    margin: 0 auto;
    margin-bottom: 0.5rem;
}
.user-frame label{
    padding-right: 0.3rem;
    font-size:0.3rem;
    color: #333;
}
.user-name{
    padding: 0.1rem;
    border: 0.02rem solid #ccc;
    font-size: 0.3rem;
    width: 5.4rem;
}
/* 用户名结束 */
/* 邮箱输入 */
.email-re{
    padding-top:1rem; 
}
.email-verify{
    padding: 0.1rem;
    border: 0.02rem solid #ccc;
    font-size: 0.3rem;
    width: 3rem;
}
.email-verify-label{
    font-size:0.3rem;
    color: #333;
}
.email-verify-btn{
    /* height: 0.6rem; */
    margin-left: 0.2rem;
    padding:0.1rem 0.3rem;
    background: #fff;
    border: 0.02rem solid #ccc;
    border-radius: 0.05rem;
}
.email{
    padding: 0.1rem;
    border: 0.02rem solid #ccc;
    font-size: 0.3rem;
    width: 5.4rem;
}
.email-frame{
    position: relative;
    width: 7rem;
    margin: 0 auto;
    margin-bottom: 0.5rem;
}
.email-label{
    padding-right: 0.4rem;
    font-size:0.3rem;
    color: #333;
} 
.email-verify-frame{
    position: relative;
    width: 7rem;
    margin: 0 auto;
}
/* 邮箱输入结束 */
/* 下一步 去登陆按钮 */
.next{
    margin-right: 6rem;
    background: #ededed;
    width: 2rem;
    padding: 0.1rem 0;
    color: #333;
    font-size: 0.32rem;
    font-weight: 600;
    font-family: "宋体";
}
.next:hover{
    color:#fff;
}
.login{
     margin-right: 6rem;
    background: #F40;
    width: 2rem;
    padding: 0.1rem 0;
    color: #fff;
    font-size: 0.32rem;
    font-weight: 600;
    font-family: "宋体";
}
.next-login-btn{
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: right;
    padding-bottom: 1rem;
    z-index: 2;
}
/* 下一步 去登陆按钮结束 */
/* 协议 */
.agree{
    margin-top: 0.5rem;
    text-align: center;
}
.agree-btn{
    padding: 0.1rem 1rem;
    font-size: 0.3rem;
    background: #f40;
    color: #fff;
    font-family: '宋体';
    font-weight: 600;
    border-radius: 0.05rem;
}
.symbol span{
    font-weight: 600;
    text-decoration: underline;
}
p{
    font-size: 0.24rem;
    color: #333;
    padding-bottom:0.2rem; 
    font-family: "宋体";
    line-height: 0.3rem;
    text-align: justify;
}
.title-word{
    color: #3e3e3e;
    font-family: "宋体";
    font-size: 0.32rem;
    margin-bottom: 0.2rem;
}
.pact-title{
    display: flex;
    justify-content:space-between;
}
.close{
    font-size: 0.32rem;
    color: #ccc;
    cursor: pointer;
    transition: ease all 0.5s;
}
.close:hover{
    transform: rotate(90deg)
}
.pact{
    position: absolute;
    top: -1rem;
    background: #fff;
    padding: 0.4rem;
    width: 13.6rem;
    left: 50%;
    margin-left: -6.8rem;
    border: 0.04rem solid #ccc;
    z-index: 4;
}
/* 协议结束 */
/* 头部样式 */
.logo-frame{
    float: left;
    width: 2.6rem;
    text-align: center;
}
.logo-img{
    height: 1.6rem;
    padding: 0.2rem 0;
}
.user-re-word{
    font-size: 0.6rem;
    vertical-align: bottom;
    margin:1.3rem 0 0 0.5rem; 
}
.login-title{
    color: #f40;
    font-size: 0.4rem;
    font-weight: 600;
    font-family: 'Courier New', Courier, monospace;
    text-align: center
}
.re-cont{
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
.register-header{
    width: 100%;
    min-width: 26rem;
    height: 2rem;
    margin-bottom: 0.5rem;
}
.register-page{
    width: 100%;
    min-width: 26rem;
}
.register-cont{
    width: 24rem;
    margin: 0 auto;
    height: 7rem;
    margin-top: 1rem;
    position: relative;
}
</style>
