
import Vue from 'vue'
import Vuex from 'vuex'
import appData from './app-data'
import routerStatus from './router-status'
import orderData from './order-data'


Vue.use(Vuex);

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'PRD', //在非生产环境下，使用严格模式
    modules: {
        appData, routerStatus,orderData
    }
})
