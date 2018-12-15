<template>
    <div class="page-frame">
        <mall-header></mall-header>
        <div class="page-cont">
        
        </div>
        <side-nav></side-nav>
        <mall-icon></mall-icon>
        <mall-footer></mall-footer>
  </div>
</template>

<script>
import mallFooter from "~/components/common/mallFooter"
import mallHeader from "~/components/common/mallHeader"
import mallIcon from "~/components/common/mallIcon"
import sideNav from "~/components/common/sideNav.vue"
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
        mallFooter,
        mallHeader,
        mallIcon,
        sideNav
    },
    prop:{

    },
    watch:{

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
}
</style>
