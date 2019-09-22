<template>
  <div class="qsmy-dm-container">
    <div class="qsmy-dm-body">
        <div class="body-left">
            <ul>
                <li v-for="(item, index) in qsmyDmList" :key="index"
                    @click="changeDmActiveIndex(index)"
                    :class="index == qsmyDmActiveIndex?'dm-active-index':''">
                    {{ item.label }}
                    </li>
            </ul>
        </div>
        <div class="body-right">
            <ul>
                <li v-for="(item, index) in qsmyDmList" :key="index">
                    <div class="body-right-main" v-if="index == qsmyDmActiveIndex">
                        <h3>{{ item.label }}</h3>
                        <div class="body-right-main-bottom">
                            <img :src="item.img">
                            <div>{{ item.contain }}</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    data() {
        return {
        }
    },
    created(){
        this.set_qsmyDmActiveIndex(0) 
    },
    mounted() {
        this.init();
        
    },
    computed:{
        ...mapState({
            qsmyDmList:state =>state.qsmyDm.qsmyDmList,
            qsmyDmActiveIndex:state => state.qsmyDm.qsmyDmActiveIndex
        })
    },
    methods: {
        ...mapMutations(["set_qsmyDmActiveIndex"]),
        ...mapActions(["get_qsmyDmList"]),
        init(){
            this.get_qsmyDmList();
        },
        changeDmActiveIndex(index){
            this.set_qsmyDmActiveIndex(index);
        }
    },
}
</script>

<style lang="less" scoped>
.qsmy-dm-container{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-items: center;
    margin: auto;
    .qsmy-dm-body{
        margin: auto;
        display: flex;
        justify-content: space-between;
        min-width: 1150px;
        .body-left{
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 25px;
            width: 200px;
            ul{
                margin: 0;
                padding: 0;
                li{
                    margin: 0;
                    padding: 0;
                    list-style: none;
                    line-height: 100px;
                    font-size: 40px;
                    color: goldenrod;
                    text-align: center;
                    font-family: LiSu;
                    border-radius: 25px;
                    transition: all 0.3s;
                }
                li:hover{
                    background-color: rgba(255, 255, 255, 0.5);
                    transition: all 0.3s;
                }
            }
        }
        .body-right{
            width: 850px;
            height: 550px;
            background-color: rgba(255, 255, 255, 0.5);
            border-radius: 25px;
            padding: 25px;
            ul{
                margin: 0;
                padding: 0;
                li{
                    list-style: none;
                    .body-right-main{
                        width: 100%;
                        h3{
                            margin: 0;
                            padding: 0;
                            font-size: 32px;
                            font-family: KaiTi;
                            line-height: 70px;
                            color: goldenrod;
                        }
                        .body-right-main-bottom{
                            display: flex;
                            justify-content: space-between;
                            // align-items: center;
                            img{
                                width: 300px;
                                height: 450px;
                            }
                            div{
                                // align-items: baseline;
                                width: 500px;
                                font-size: 20px;
                                font-family: KaiTi;
                                line-height: 50px;
                                text-align: left;
                                text-indent: 50px;
                            }
                        }
                    }
                }
            }
        }
    }
}
.dm-active-index{
    background-color: rgba(255, 255, 255, 0.5);
}
</style>
