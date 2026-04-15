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
    },
    ADD_PERSON(state,personObj) {
        state.personList.unshift(personObj)
    }
}
const state = {
    sum:0,//当前的和,
    school:'ATGUIGU',
    subject:'Vue',
    personList:[
        {id:'001',name:'张三'},
    ]
}
const getters = {//getters应用场景：需要根据state中的数据进行加工处理并需要复用时，就可以使用getters
    bigSum(state) {
        return state.sum * 10
    }
}
//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters
})