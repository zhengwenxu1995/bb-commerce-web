<template>
    <div class="register-page">
        <div class="register-header">
            <div class="header-cont">

            </div>
        </div>
        <div class="register-cont">
            <identify @verification="verification"></identify>
        </div>
        <sign-up-footer></sign-up-footer>
    </div>
</template>

<script>
import identify from "~/components/common/identify.vue"
import signUpFooter from "~/components/common/signUpFooter.vue"
export default {
  data() {
    return {

    }
  },
  components:{
    identify,
    signUpFooter
  },
  methods:{
      verification(identifyCode){
          console.log(identifyCode)
      }
  }
}
</script>

<style scoped>
.header-cont{
    width: 24rem;
    height: 2.5rem;
    border: 1px solid #f00;
    margin: 0 auto;
}
.register-header{
    width: 100%;
    min-width: 26rem;
    height: 2.5rem;
}
.register-page{
    width: 100%;
    min-width: 26rem;
}
.register-cont{
    width: 24rem;
    margin: 0 auto;
    height: 6rem;
    border: 1px solid #f00;
    margin-top: 0.1rem;
}
</style>
