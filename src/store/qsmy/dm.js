
import dmData from '../../moke/dm-moke'

const state = {
    qsmyDmList:[],
    qsmyDmActiveIndex:0
}
const mutations = {
    set_qsmyDmList(state,payload){
        state.qsmyDmList = payload;
    },
    set_qsmyDmActiveIndex(state,payload){
        state.qsmyDmActiveIndex = payload
    }
}

const actions = {
    get_qsmyDmList(context){
        if (dmData.data.code == 200) {
            context.commit("set_qsmyDmList",dmData.data.data)
        }
    } 
}

export default {
  state,
  mutations,
  actions
}

