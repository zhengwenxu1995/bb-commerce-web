<template>
    <div class="icon-frame">
        <ul class="icon-cont">
            <li class="icon-item">
                <div class="box">
                    <img src="~/static/image/ThumbsUp.png" alt="">
                    <div class="line"><h1 class="icon-title">正品保障</h1><span class="icon-english">Authentic guarantee</span></div>
                </div>
            </li>
            <li class="icon-item">
                <div class="box">
                    <img src="~/static/image/Direct.png" alt="">
                    <div class="line"><h1 class="icon-title">海外直采</h1><span class="icon-english">Overseas direct sourcing</span></div>
                </div>
            </li>
            <li class="icon-item">
                <div class="box">
                    <img src="~/static/image/Profit.png" alt="">
                    <div class="line"><h1 class="icon-title">低价让利</h1><span class="icon-english">Low price concession</span></div>
                </div>
            </li>
            <li class="icon-item">
                <div class="box">
                    <img src="~/static/image/Transport.png" alt="">
                    <div class="line"><h1 class="icon-title">闪电发货</h1><span class="icon-english">Lightning delivery</span></div>
                </div>
            </li>
        </ul>
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
.icon-frame{
    width: 100%;
    min-width: 26rem;
    background-color:#fafafa;
    height:4.4rem;
    padding:0.2rem 0; 
}
.icon-cont{
    margin: 0 auto;
    height: 4rem;
    width: 24rem;
    display: flex;
}
.icon-item {
    flex: 1;
    position: relative;
}
.box{
    height: 60px;
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto; 
    padding-left:0.6rem;
}
.box img{
    float: left;
}
.line{
    float: left;
    margin-left:0.3rem;
    padding: 0.15rem 0;
}
.icon-title{
    color: rgb(85, 85, 85);
    font-size: 0.36rem;
    padding-bottom: 0.2rem;
    text-align: left;
}
.icon-english{
    font-size: 0.26rem;
    color: rgb(153, 153, 153);

}
</style>
