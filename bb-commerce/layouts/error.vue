<template>
    <div class="error">
        <img class="img-error" src="../static/error/404.gif" alt="">
        <div class="go-home">
            回到首页
        </div>
    </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // 你可以为错误页面指定自定义的布局
}
</script>

<style scoped>
.error{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    /* background: url("../static/error/404.gif") center no-repeat;
    background-size: 100%; */
}
.img-error{
    width: 100%;
    height: 100%;
}
.go-home{
    position: absolute;
    font-size: 1rem;
    color: #fefefe;
    top: 1rem;
    font-family: '黑体', Courier, monospace;
    font-weight: 600;
    
}
</style>
