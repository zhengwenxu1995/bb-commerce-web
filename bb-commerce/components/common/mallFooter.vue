<template>
    <div class="footer-frame">
        <div class="footer-cont">
            <ul class="synopsis-list">
                <li class="synopsis-item">
                    <h1 class="title">服务保证</h1>
                    <ul class="sys-cont-list">
                        <li>正品保证</li>
                        <li>7天无理由退货</li>
                        <li>退货返运费</li>
                        <li>7*15小时客户服务</li>
                    </ul>
                </li>
                <li class="synopsis-item">
                    <h1 class="title">支付方式</h1>
                    <ul class="sys-cont-list">
                        <li>公司转账</li>
                        <li>货到付款</li>
                        <li>在线支付</li>
                        <li>分期付款</li>
                    </ul>
                </li>
                <li class="synopsis-item">
                    <h1 class="title">商家服务</h1>
                    <ul class="sys-cont-list">
                        <li>商家服务</li>
                        <li>培训中心</li>
                        <li>广告服务</li>
                        <li>服务市场</li>
                    </ul>
                </li>
                <li class="synopsis-item">
                    <h1 class="title">物流配送</h1>
                    <ul class="sys-cont-list">
                        <li>免运费</li>
                        <li>海外配送</li>
                        <li>EMS</li>
                        <li>211限时达</li>
                    </ul>
                </li>
            </ul>
            <div class="attention">
                <img src="~/static/image/qrCode.png" alt="">
                <h1 class="attention-cont">扫一扫，关注官方公众号</h1>
            </div>
        </div>
        <div class="footer">
            <div class="footer-bottom">
                <ul class="menu-list">
                    <li class="menu-item"><span>联系我们</span>|</li>
                    <li class="menu-item"><span>关于我们</span>|</li>
                    <li class="menu-item"><span>合作招商</span>|</li>
                    <li class="menu-item"><span>商家帮助</span>|</li>
                    <li class="menu-item"><span>营销中心</span>|</li>
                    <li class="menu-item"><span>友情链接</span>|</li>
                    <li class="menu-item"><span>销售联盟</span>|</li>
                    <li class="menu-item"><span>隐私政策</span></li>
                </ul>
                <p class="copy">&copy;&nbsp;2018&nbsp;北京信长仁捷科技有限公司&nbsp;版权所有</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    computed:{

    },
    methods:{

    },
    components:{

    },
    prop:{

    },
    watch:{

    }
}
</script>

<style scoped>
.footer-frame{
    width: 100%;
    min-width: 26rem;
    background-color:#222;
    padding:1rem 0 0.1rem 0;   
}
.footer-cont{
    width: 24rem;
    margin: 0 auto;
    overflow: hidden;
}
.footer-bottom{
    width: 24rem;
    padding-top:0.4rem; 
    margin: 0 auto;
}
.menu-list{
    display: flex;
    padding: 0.2rem;
    /* border: 1px solid #f00; */
    width: 13.5rem;
    margin:0 auto;
    color:  rgb(150,150,150);
}
.menu-item span {
    padding: 0 0.2rem;
    color: rgb(150,150,150);
    cursor: pointer;
}
.menu-item span:hover{
    color:#fff;
}
.footer{
    width: 100%;
    min-width: 26rem;
    background-color:#222;
    margin-top: 0.4rem;
    border-top:0.02rem solid #333;
    padding: 0.3rem 0;
}
.copy{
    margin-top:0.2rem; 
    text-align: center;
    font-size: 0.25;
    color:rgb(150,150,150);
}
.synopsis-list{
    display: flex;
    width: 18rem;
    float: left;
}
.synopsis-item{ 
    padding-left: 0.5rem;
}
.title{
    font-size: 0.36rem;
    color: rgb(150,150,150);
    padding-bottom: 1rem;
}
.sys-cont-list{
    margin-right:2.3rem;
}
.sys-cont-list li{
    font-size: 0.28rem;
    color:rgb(150,150,150);
    padding:0 0 0.4rem 0;
}
.attention{
    float: left;
    margin: 0.8rem 0 0 1rem; 
}
.attention img{
    margin-left:0.2rem; 
    border: 0.15rem solid #fff;
    height: 2.1rem;
    width: 2.1rem;
    box-sizing: border-box;
    background: #fff;
}
.attention-cont{
    color: #969696;
    margin-top:0.2rem;
    font-size: 0.24rem; 
}
</style>
