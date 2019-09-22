import Vue from 'vue'
import Vuex from 'vuex'
import dmData from '../../moke/dm-moke'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    qsmyDmList:[],
    qsmyDmActiveIndex:0
  },
  mutations: {
    set_qsmyDmList(state,payload){
        state.qsmyDmList = payload;
    },
    set_qsmyDmActiveIndex(state,payload){
        state.qsmyDmActiveIndex = payload
    }
  },
  actions: {
    get_qsmyDmList(context){
        if (dmData.code == 200) {
            context.commit("set_qsmyDmList",dmData.data)
        }
    }
  }
})
