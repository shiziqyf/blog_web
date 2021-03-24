import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs'

//1.安装插件
Vue.use(Vuex)

//创建对象

const store = new Vuex.Store({
    state: {
        token: null,
        isMobile: false
    },
    mutations: {
        login(state,token) {
            state.token = token
        },
        outLogin(state) {
            state.token = null
        },
        setMobile(state) {
            state.isMobile = true
        }
      
      
    }
})

export default store