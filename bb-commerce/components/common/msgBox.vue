<template>
    <div class="mask" v-if="showMsg">
        <div class="msg-fram">
            <div class="title-cont">
                <h1>提示</h1>
                <i class="iconfont close"
                @click="changeMsgStatus">&#xe608;</i>
            </div>
            <div class="msg-cont">
                <slot name="msg-cont"></slot>
            </div>
            <div class="msg-btn">
                <button class="cancel">取消</button>
                <slot name="fun-btn"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        changeMsgStatus(){
            this.$emit("closeMsg",false);
        }
    },
    props:{
        showMsg:{
            Type:Boolean,
            defalut:true
        },
        boxWidth:{
            Type:Number,
            defalut:8
        },
        boxHeight:{
            Type:Number,
            defalut:6
        },
        confirmBtn:{
            Type:Boolean,
            defalut:true
        },
        cancelBtn:{
            Type:Boolean,
            defalut:true
        },
    }
}
</script>

<style scoped>
.cancel{
    line-height: 0.7rem;
    padding: 0 0.4rem;
    color: #ccc;
    background: #fff;
    border: 0.01rem solid #ccc;
    border-radius: 0.1rem;
}
.cancel:hover{
    color: #333;
}
.msg-btn{
    display: flex;
    justify-content: space-between;
    padding: 0.15rem 0.5rem;
}
.msg-cont{
    width: 100%;
    line-height: 2.3rem;
    text-align: center;
    height: 2.1rem;
    border:0.02rem solid #ccc0;
}
.close{
    font-size: 0.3rem;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
}
.close:hover{
    transform: rotate(90deg);
}
.title-cont h1{
    color: #333;
    font-size: 0.3rem;
}
.title-cont{
    padding: 0.3rem  0.4rem 0.2rem 0.4rem; 
    border-bottom: 0.02rem solid #ccc;
    display: flex;
    justify-content: space-between;
}
.msg-cont{

}
.mask{
    position: fixed;
    background: rgba(0, 0, 0, 0.7);
    height: 100%;
    width: 100%;
    z-index: 2020;
    top: 0;
    left: 0;
}
.msg-fram{
    position: fixed;
    z-index: 2023;
    top: 50%;
    left: 50%;
    margin-left: -4rem;
    margin-top: -2rem;
    height: 4rem;
    width: 8rem;
    background: #fff;
}
</style>