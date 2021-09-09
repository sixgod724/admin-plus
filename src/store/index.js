import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isCollapse: false,
        title: 'getter',
        num: 100
    },
    getters: {
        geTitle: state => state.title,
        getNum: state => state.num + '%'
    },
    mutations: {
        isCollapseState(state){
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {

    },
    modules: {}
})
