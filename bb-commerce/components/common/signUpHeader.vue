<template>
    <div class="sign-frame">
        <div class="sign-cont">
            <div class="logo-cont" @click="home">
                <img class="logo" src="~/static/image/logo.png" alt="">
                <h1 class="title">BbMall.com</h1>
            </div>
            <div class="claim">
                为确保您账户的安全及正常使用，依《网络安全法》相关要求，6月1日起会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"signUpHeader",
    data(){
        return {
            
        }
    },
    methods:{
        home(){
            this.$router.push({path:"/"})
        }
    }
}
</script>

<style scoped>
.sign-frame{
    width: 100%;
    min-width: 26rem;
}
.sign-cont{
    margin: 0 auto;
    padding: 0.2rem 0;
    width: 24rem;
    overflow: hidden;
}
.claim{
    border: 1px solid #f40;
    float: left;
    padding: 0.15rem 1.2rem;
    font-size: 0.24rem;
    background: #fef2f2;
    color:rgb(108, 108, 108);
    margin: 0.5rem 0 0 1rem;
}
.logo-cont{
    text-align: center;
    width: 2.2rem;
    cursor: pointer;
    float: left;
}
.logo{
    height: 1.2rem;
    width: 1.2rem;
}
.title{
    color: #f40;
    font-size: 0.35rem;
    font-weight: 600;
    margin-top: 0.1rem;
    font-family: 'Courier New', Courier, monospace;
}
</style>
