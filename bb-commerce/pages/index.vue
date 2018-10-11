<template>
  <div class="page-frame">
    <mall-header></mall-header>
    <div class="page-cont">
      <div class="header">
        <h1>hhahah</h1>
        <nuxt-link :to="'/login'">登录</nuxt-link>
        <h1 @click="login">登录</h1>
        <h1 @click="register">注册</h1>

      </div>
    </div>
    <mall-icon></mall-icon>
    <mall-footer></mall-footer>
  </div>
</template>

<script>
import mallFooter from "~/components/common/mallFooter"
import mallHeader from "~/components/common/mallHeader"
import mallIcon from "~/components/common/mallIcon"
export default {
  data() {
    return {

    }
  },
  components: {
    mallFooter,
    mallHeader,
    mallIcon
  },
  methods:{
    login(){
      this.$router.push({path:"/login"});
    },
    register(){
      this.$router.push({path:"/register"});
    }
  },
  computed:{

  }
}
</script>

<style scoped>
.page-frame{
  width: 100%;
  min-width: 1400px;
}
.page-cont{
  width: 1300px;
  margin: 0 auto;
  background: #f00;
}
</style>
