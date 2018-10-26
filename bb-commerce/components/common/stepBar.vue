<template>
    <div class="step-bar-frame">
        <div class="step-bar-cont">
            <ul class="step-bar" :style="{width:stepBar+'rem'}">
                <li class="step-item" :style="{width:stepItem+'rem'}"
                v-for="(item,index) of stepBarData"
                :key="index">
                    <span class="circle"
                    :class="{select:item.stepStatus}"
                    >{{item.stepNumber}}</span>
                    <div class="line"
                    :class="[{left:index==0},{right:index==stepBarData.length-1},{select:item.stepStatus}]"
                    ></div>
                    <h1 class="step-word">{{item.stepName}}</h1>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        stepBar:{
            Type:Number,
            default:12
        },
        stepItem:{
            Type:Number,
            default:3
        },
        stepBarData:{
            Type:Array
                
        }
    },

}
</script>

<style scoped>
.step-bar .step-item .select{
    background: #f40;
}
.step-word{
    width: 100%;
    position: absolute;
    bottom: 0;
    text-align: center;
    font-size: 0.3rem;
    font-family:"黑体";
    color: #F40;
}
.step-bar{
    margin: 0 auto;
    display: flex;
}
.step-item{
    height: 1rem;
    position: relative;
}
.step-bar-frame{
    width: 100%;
    min-width: 26rem;
}
.step-bar-cont{
    margin: 0 auto;
    width: 24rem;
}
.line{
    position: absolute;
    width: 3rem;
    height: 0.1rem;
    background: #ccc;
    top: 35%;
    margin-top: -0.05rem;
}
.circle{
    z-index: 2;
    position: absolute;
    top: 35%;
    margin-top: -0.2rem;
    left: 1.3rem;
    display: inline-block;
    text-align:center;
    height: 0.4rem;
    width: 0.4rem;
    line-height: 0.4rem;
    border-radius: 100%;
    background: #ccc;
    color: #fff;
}
.left{
    border-radius: 0.1rem 0 0 0.1rem;
}
.right{
    border-radius: 0 0.1rem 0.1rem 0;
}
</style>
