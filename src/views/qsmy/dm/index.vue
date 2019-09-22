<template>
  <div>
    动漫
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions,Store} from 'vuex'
export default {
    data() {
        return {
        }
    },
    created(){
        this.init();
        console.log(Store);
        console.log(this.qsmyDmList)
        this.set_qsmyDmActiveIndex(1) 
    },
    computed:{
        ...mapState({
            qsmyDmList:state =>state.qsmy.dm.qsmyDmList,
            qsmyDmActiveIndex:state => state.qsmy.dm.qsmyDmActiveIndex
        })
    },
    methods: {
        ...mapMutations(["set_qsmyDmActiveIndex"]),
        ...mapActions(["get_qsmyDmList"]),
        init(){
            this.get_qsmyDmList();
        }
    },
}
</script>

<style lang="less" scoped>
</style>
