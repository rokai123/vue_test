import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//该文件用于创建Vuex中最为核心的store
const actions = {
    /* jia(context,value) {
        context.commit('JIA',value)
    },
    jian(context,value) {
        context.commit('JIAN',value)
    }, */
    jiaOdd(context,value) {
        if(context.state.sum % 2) {
            context.commit('JIA',value)
        }
    },
    jiaWait(context,value) {
        setTimeout(() => {
            context.commit('JIA',value)
        },500)
    }

}
const mutations = {
    JIA(state,value) {
        state.sum += value
        console.log('mutations中的JIA被调用了',value);
    },
    JIAN(state,value) {
        state.sum -= value
        console.log('mutations中的JIAN被调了',value);
    }
}
const state = {
    sum:0//当前的和
}
//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state
})