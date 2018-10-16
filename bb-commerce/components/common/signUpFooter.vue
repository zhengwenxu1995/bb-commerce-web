<template>
    <div class="sign-up-footer-frame">
        <div class="sign-up-footer-cont">
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
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.sign-up-footer-frame{
    width: 100%;
    min-width: 26rem;
}
.sign-up-footer-cont{
    width: 24rem;
    margin: 0 auto;
    margin-top: 1rem;
    border-top: 0.02rem solid #ccc;
    padding: 0.5rem 0 0.4rem 0;
}
.menu-list{
    display: flex;
    padding: 0.2rem;
    /* border: 1px solid #f00; */
    width: 13.5rem;
    font-size: 0.25rem;
    margin:0 auto;
    color:  #333;
}
.menu-item{
    font-size: 0.25rem;
}
.menu-item span {
    font-size: 0.25rem;
    padding: 0 0.2rem;
    color: #333;
    cursor: pointer;
}
.copy{
    margin-top:0.2rem; 
    text-align: center;
    font-size: 0.25rem;
    color:#333;
}
</style>
