<template>
    <div class="main-container">
        <QsmyTitle></QsmyTitle>
        <div class="sub-container">
            <router-view/>
        </div>
    </div>
</template>

<script>
import QsmyTitle from './title'
export default {
    components:{
        QsmyTitle
    },
    created(){
        if (this.$route.path == '/QsmyMain') {
            this.$router.push({path:'/QsmyMain/dm'})
        }
    }
}
</script>

<style lang="less">
.main-container{
    height: 100vh;
    width: 100%;
    min-width: 800px;
    min-height: 600px;
    background-image: url("../../assets/zhuye2.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
}
.sub-container{
    height: calc(100vh - 50px);
    width: 100%;
}
</style>
